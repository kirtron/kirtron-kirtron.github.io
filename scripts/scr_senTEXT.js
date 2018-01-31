let kolpop=3
let dostup
sver.addEventListener('click', function(){
    doc.classList.remove("docu")
    document.getElementById("doc").innerHTML = ""
})

delfile.addEventListener('click', function(){
  if (kolpop>0)  dostup = prompt("У вас недостаточно прав для выполнения данной операции. Введите код доступа уровня А.")

    if (dostup == "admin" && kolpop >0){
      let xhr = new XMLHttpRequest()
    xhr.open('GET', '/delete', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        alert("Соединение прошло успешно. Все данные удалены.")  
        dostup=""
    }
    xhr.send()
    } else {
        alert("Error!")
        kolpop-=1
    }
})

showw.addEventListener('click', function(){
    doc.classList.add("docu")
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/show', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        alert("Соединение установлено. Данные получены.")
        document.getElementById("doc").innerHTML = xhr.responseText  
    }
    xhr.send()
})

chis.addEventListener('click', function(){
    document.getElementById("inmytext").value = ""
})

vnos.addEventListener('click', function(){
    let d = new Date()
    let text = {
       "textic" : d + "\n" + document.getElementById("inmytext").value
    }
    console.log(document.getElementById("inmytext").value)
    let xhr = new XMLHttpRequest()
    
    xhr.open('GET', '/sendtext?text='+JSON.stringify(text), true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        alert("Изменения внесены успешно")
    }
    xhr.send()
})