kripto.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/JS_pr/shifrovanie', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        content.innerHTML=xhr.responseText
        let script = document.createElement('script')
        script.src="/scripts/scr_shifr.js"
        content.appendChild(script)
    }
    xhr.send()
})

clean.addEventListener('click', function () {
    content.innerHTML=""
})

Stext.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/JS_pr/sometext', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        content.innerHTML=xhr.responseText
        let script = document.createElement('script')
        script.src="/scripts/scr_senTEXT.js"
        content.appendChild(script)
    }
    xhr.send()
})


life.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/JS_pr/life_avt', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        content.innerHTML=xhr.responseText
        let script = document.createElement('script')
        script.src="/scripts/scr_life.js"
        content.appendChild(script)

        let style = document.createElement('link')
        style.rel="stylesheet"
        style.href="/styles/style_life.css"
            content.appendChild(style)
    }
    xhr.send()
})

ipc.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/JS_pr/ip_calc', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        content.innerHTML=xhr.responseText
        let script = document.createElement('script')
        script.src="/scripts/scr_ip_calc.js"
        content.appendChild(script)

        let style = document.createElement('link')
        style.rel="stylesheet"
        style.href="/styles/style_ip_calc.css"
            content.appendChild(style)
    }
    xhr.send()
})


map.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/JS_pr/map', true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        content.innerHTML=xhr.responseText
    }
    xhr.send()
})




let timerIdent = setInterval(function dates() {
    let s = new Date()
    let dat = s.getDate() + "." + (s.getMonth()+1) + "." + s.getFullYear()
    document.getElementById("date").innerHTML = dat
    }, 50);


let timerId = setInterval(function vrema() {
    let d = new Date()
    let tim = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    document.getElementById("time").innerHTML = tim
    }, 100);

