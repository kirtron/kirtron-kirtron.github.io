 let name = prompt("Как вас зовут? - имя, фамилия, позывной")

let sendBtn = document.getElementById('send')

let socket = new WebSocket('ws://localhost:8081')

socket.onopen = function () {
alert('Соединение прошло успешно!')
}

socket.onmessage = function (message) {
let okput = JSON.parse(message.data)
messages.innerHTML += '<div class="mess">' + okput.mess  + '</div>'
inMessage.value = ""
kolup.innerHTML =  "Количество участников: " + okput.kol
}

sendBtn.addEventListener('click', function (e) {

socket.send(name + '<br>' + inMessage.value)

})

clup.addEventListener('click', function(){
  let pas = prompt("У вас недостаточно прав для выполнения данной операции. Введите код доступа уровня В.")
  if (pas=="admin") messages.innerHTML = ""
  else alert("Error!")
    
})


let ident=0

    clos.addEventListener('click', function(){
        if (ident==1){
        socket = new WebSocket('ws://localhost:8081')
        socket.onopen = function () {
          alert('Соединение прошло успешно!')
          }

          socket.onmessage = function (message) {
          let okput = JSON.parse(message.data)
          messages.innerHTML += '<div class="mess">' + okput.mess  + '</div>'
          inMessage.value = ""
          kolup.innerHTML =  "Количество участников: " + okput.kol
          }
          
          
        clos.innerHTML = "Закрыть соединение"
        ident=0;
        } else{
          if (socket.readyState === WebSocket.OPEN) socket.close();
            clos.innerHTML = "Открыть соединение"
            ident=1;
        }      
               });

kolup.addEventListener('click', function(){
     alert(allmas);
})