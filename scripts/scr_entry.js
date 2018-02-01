sendObj.addEventListener('click', function(){
    let user = {
        "login": login.value,
        "pass": pass.value
    }
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/private?user='+JSON.stringify(user), true)
    xhr.onreadystatechange = function() {
        if ( xhr.readyState != 4) return
        
    }
    xhr.send()
})