const Express = require("express")
const Router = Express.Router()
//const MySQL = require("./Utils/MySQL")

Router.post("/IsLoggedIn", (Request, Response) => {
    if (Request.session.TokenID) {
        Response.send(true)
    } else {
        Response.send(false)
    }
})

Router.get("/IsLoggedIn", (Request, Response) => {
    Response.send("wOHOOO")
})

module.exports = Router