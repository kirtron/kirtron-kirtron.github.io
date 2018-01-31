let express = require("express"),
    app=express(),
    http = require("http").Server(app).listen(80),
    upload = require("express-fileupload");
app.use(upload())


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/", function(req, res){
    if (req.files){
        let file = req.files.filename,
            filename = file.name;
        file.mv("./upload/"+filename, function(err){
            if (err){
                console.log(err)
                res.send("error")
            }
            else{
                res.send("DONE!")
            }
        })
    }
})