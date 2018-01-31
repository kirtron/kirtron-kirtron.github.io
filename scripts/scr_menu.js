let idi=0

    hide.addEventListener('click', function(){
        if (idi==0){
        menu.classList.toggle('vis'); 
        hide.classList.add('left2');
        hide.classList.remove('left1');
        hide.innerHTML = "Закрыть меню"
        idi=1;
        } else{
            menu.classList.toggle('vis'); 
            hide.classList.add('left1');
            hide.classList.remove('left2');
            hide.innerHTML = "Открыть меню"
            idi=0;
        }      
               });