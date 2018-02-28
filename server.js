let http = require("http"),
static = require("node-static"),
url = require("url"),
file = new static.Server('.'),
fs = require("fs"),
WebSocketServer = new require('ws');



function answer(req,res){
    let path = url.parse(req.url, true).pathname
    let urlObj = url.parse(req.url, true)
    
    if (path == '/JS_pr/shifrovanie'){
        file.serve(req,res)
    }

    if (path == '/JS_pr/life_avt'){
        file.serve(req,res)
    }
    if (path == '/JS_pr/map'){
        file.serve(req,res)
    }

    if (path == '/private'){
        let user = JSON.parse(urlObj.query.user)
        console.log(JSON.parse(urlObj.query.user))
        console.log(user.login)
        if(user.login == 'admin' && user.pass == 'admin'){
            file.serve(req,res)
        }
        else{
            res.end('Error!')
        }
    }
    else{
        file.serve(req,res)
    }  
    
    if (path == '/show'){
       let data = fs.readFileSync("file.doc", "utf8");
       res.end(data);
    }

    if (path == '/JS_pr/ip_calc'){
        file.serve(req,res)
     }

    if (path == '/delete'){
        fs.writeFile("file.doc", "")
     }

    if (path == '/sendtext'){
    let text = JSON.parse(urlObj.query.text)
    fs.appendFile("file.doc", text.textic + "\n", function(error){
        if(error) throw error; // если возникла ошибка
});
    }

}
http.createServer(answer).listen(8080)



// WS-сервер
let kolvo=0;


let clients = {} // подключенные клиенты

let webSocketServer = new WebSocketServer.Server({

port: 8081 // WebSocket-сервер на порту 8081

})

webSocketServer.on('connection', function(ws) {
kolvo++;
let id = Math.random()

clients[id] = ws

console.log("новое соединение " + id)


ws.on('message', function(message) { // Получение сообщения

  console.log('получено сообщение: ' + message)

let sending = {
    "kol" : kolvo,
    "mess" : message
    // "masid" : masid
}

  for (let key in clients) {
    clients[key].send(JSON.stringify(sending))
  }
  
})

ws.on('close', function() {
  console.log('соединение закрыто ' + id)
  delete clients[id]
  kolvo--
})

ws.on("error", function(error) {
    console.log('соединение закрыто ' + id)
    delete clients[id]
    kolvo--
    console.log(error);
});

})