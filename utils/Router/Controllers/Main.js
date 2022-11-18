const Express = require("express")
const Router = Express.Router()
const MySQL = require("../Utils/MySQL")
const TokenGenerator = require("../Utils/TokenGenerator")
const Hash = require("../Utils/Hash")

function CapitalizeFirstLetter(String) {
    return String.charAt(0).toUpperCase() + String.slice(1);
}

Router.post("/UserLoggedIn", (Request, Response) => {
    if (Request.session.TokenID) {
        Response.send("true")
    } else {
        Response.send("false")
    }
})

Router.post("/LoginUser", (Request, Response) => {
    if (Request.session.TokenID) {
        Response.send("Logged In")
        return
    }

    var Body = '';
    Request.on('data', function (Data) {
        Body += Data;
        if (Body.length > 1e6) { 
            Request.destroy()
        }
    });

    Request.on('end', function () {
        Body = JSON.parse(Body)

        if (!Body) {
            Response.send("Something went wrong").status(400)
            return
        }

        if (!Body.Username) {
            Response.send("Please type the username.").status(200)
            return
        }

        var Username = CapitalizeFirstLetter(Body.Username)

        MySQL(`SELECT * FROM Accounts WHERE Username = "${Username}"`, function(Data) {
            if (Data.length == 0) {
                Response.send("No account found.").status(200)
                return
            }

            if (!Body.Password) {
                Response.send("Please type the password.").status(200)
                return
            }
        
            var Password = Hash(Body.Password)

            if (Data[0].Password == Password) {
                Request.session.TokenID = Data[0].Token
                Response.send("200")
            } else {
                Response.send("Password incorect.").status(200)
            }
        })
    });
})

Router.post("/RegisterUser", (Request, Response) => {


    if (Request.session.TokenID) {
        Response.send("Logged In")
        return
    }

    var Body = '';
    Request.on('data', function (Data) {
        Body += Data;
        if (Body.length > 1e6) { 
            Request.destroy()
        }
    });

    Request.on('end', function () {
        Body = JSON.parse(Body)

        if (!Body) {
            Response.send("Something went wrong").status(400)
            return
        }

        if (!Body.Username) {
            Response.send("Please type the username.").status(200)
            return
        }


        if (!Body.Email) {
            Response.send("Please type an email.").status(200)
            return
        }

        MySQL(`SELECT * FROM Accounts WHERE Username = "${Body.Username}"`, function(Data) {
            if (Data.length > 0) {
                Response.send("Username taken.").status(200)
                return
            }

            if (!Body.Password) {
                Response.send("Please type the password.").status(200)
                return
            }
        
            if (!Body.Firstname) {
                Response.send("Please type the firstname.").status(200)
                return
            }
        
            if (!Body.Lastname) {
                Response.send("Please type the lastname.").status(200)
                return
            }
        
            if (String.toString(Body.Password).length < 8) {
                Response.send("Password must be at least 8 characters long.").status(200)
                return
            }
        
            if (String.toString(Body.Password).length < 5) {
                Response.send("Username must be at least 5 characters long.").status(200)
                return
            }

            var Firstname = CapitalizeFirstLetter(Body.Firstname)
            var Lastname = CapitalizeFirstLetter(Body.Lastname)
            var Password = Hash(Body.Password)
            var Token = TokenGenerator(50)
            var Status = 0
            var Balance = 0.00
            var Username = CapitalizeFirstLetter(Body.Username)
            var Email = Body.Email

            MySQL(`INSERT INTO Accounts 
            (Firstname, Lastname, Password, Token, Status, Balance, Username, Email) 
            VALUES 
            ('${Firstname}','${Lastname}','${Password}','${Token}','${Status}','${Balance}','${Username}','${Email}' )`, (Callback) => {
                Request.session.TokenID = Token
                Response.send("200")
            })
        })
    });
})

Router.get("/Logout", (Request, Response) => {
    if (Request.session.TokenID) {
        Request.session.destroy()
    }

    Response.redirect("/")
})

module.exports = Router