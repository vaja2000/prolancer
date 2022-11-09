var Data = {
    Firstname: "luka",
    Password: "ac"
}

const domain = "prolancer.ge"

var data = fetch(domain, {
    method: "POST",
    body: JSON.stringify(Data)
})


data.then(Res => {
    var json = Res.json()

    console.log(json.Response); // 200
})