var MySQL = require('mysql');

var Connection = MySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ProLancerDatabase"
});

Connection.connect(function (Err) {
    if (Err) throw Err;
});


module.exports = function(SQL, Callback)  {
    Connection.query(SQL, function (Err, Result) {
        if (Err) throw Err;
        Callback(Result)
    });
}