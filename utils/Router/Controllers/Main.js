const Express = require("express")
const Router = Express.Router()
//const MySQL = require("./Utils/MySQL")

Router.post("/UserLoggedIn", (Request, Response) => {
    if (Request.session.TokenID) {
        Response.send("true")
    } else {
        Response.send("false")
    }
})

module.exports = Router