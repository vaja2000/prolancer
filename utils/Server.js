const Express = require("express")
const Path = require("path")
const Session = require("express-session")
const CookieParser = require("cookie-parser")
const Cors = require("cors")
const MemoryStore = require("memorystore")(Session)

const App = Express()

const APIHandler = require("./Router/Controllers/Main.js")


const OneMonth = 1000 * 60 * 60 * 24 * 30;

App.use(CookieParser())


App.use(Cors({
    origin: ['http://localhost:4200'],
    "methods": "GET,PUT,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));

App.use(Session({
    cookie: { maxAge: OneMonth },
    resave: false,
    secret: 'secret'
}))

App.use("/API", APIHandler)

App.use((Request, Response) => {
    Response.status(404).send("Woohooo")
});

App.listen(8000, () => {
    console.log("Server has started on port: 8000")
})

