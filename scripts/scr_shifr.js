'use strict'
shifr.addEventListener('click', function(e){
    let str = ''
    for (let i = 0; i < myIn.value.length; i++ ){
        let c = myIn.value.charCodeAt(i) + 5
        str += String.fromCharCode(c)
    }
    myOut.value = str
})
deshifr.addEventListener('click', function(e){
    let str = ''
    for (let i = 0; i < myIn.value.length; i++ ){
        let c = myIn.value.charCodeAt(i) - 5
        str += String.fromCharCode(c)
    }
    myOut.value = str
})



deshifrs.addEventListener('click', function(e){
    let str = ''
    for (let i = myIns.value.length-1; i >= 0; --i ){
        str += myIns.value[i]
    }
    myOuts.value = str
})

shifrs.addEventListener('click', function(e){
    let str = ''
    for (let i = myIns.value.length-1; i >= 0; --i ){
        str += myIns.value[i]
    }
    myOuts.value = str
})



shifrс.addEventListener('click', function(e){
    let str = ''
    for (let i = 0; i + 1< myInс.value.length; i+=2 ){
        str += myInс.value[i+1] + myInс.value[i]
    }
    if (myInс.value.length % 2 == 1) str += myInс.value[myInс.value.length-1]
    myOutс.value = str
})

deshifrс.addEventListener('click', function(e){
    let str = ''
    for (let i = 0; i + 1< myInс.value.length; i+=2 ){
        str += myInс.value[i+1] + myInс.value[i]
    }
    if (myInс.value.length % 2 == 1) str += myInс.value[myInс.value.length-1]
    myOutс.value = str
})
let kkk=''
function dec_bin(n){
    if (n >= 2) dec_bin(Math.floor(n / 2))
      kkk +=  n % 2;
}

function dec(n){
    let strr=''
    
    dec_bin(n)
    for (let i=1; i<ckok(parseInt(kkk)); ++i){
        strr += "0"
    }
    strr += kkk
    kkk=''
    return strr
  }
  
  function  ckok(a){
      let kol=0;
      while (a!=0){
        a = Math.floor(a/10);
          ++kol;
      }
      return kol;
  }


shifra.addEventListener('click', function(e){
    
    let str = ''
    
    let mash = [], kk=0;
    //ввод строки
    let k = myIna.value.length;
    str+=myIna.value[0]
    //запись серий
    let kolvo=1, y=0;
    for (let i=0; y<k;){
       
   for ( ; myIna.value[y]==myIna.value[++y];){
       ++kolvo;
   }
   mash[i++]=kolvo;
   ++kk;
   kolvo=1;
    }

    for (let i=0; i<kk; ++i){
        str+=dec(mash[i])
        if (str.length %5 ==4) str+=" "
    }


    myOuta.value = str
})



deshifra.addEventListener('click', function(e){
    
    let str = ''
    
    let mash = new Array(), kk=0, ital;
    //ввод строки
    ital=myIna.value[0]
    let y=0;
    for (let z=1; z < myIna.value.length; ){
    let kolzero=0
    for (; myIna.value[z]=="0"; ++z){
       ++kolzero;
   }
   
   

   let chis=0
   for (let j=z, stepi=kolzero; j <= kolzero+z; ++j){
    
   chis += myIna.value[j]*Math.pow(2, stepi--) 
   }
   z+=kolzero+1
   kolzero=0
   mash[y++]=chis
   }
  
   
       if (ital=="1"){
          
          let flag=1
          for (let x=0; x<y;){
              if (flag==1){
                  for (let q=0; q<mash[x]; ++q){
                  str+="1"
                  }
                  ++x
                  flag=0
              }else  {
              for (let q=0; q<mash[x]; ++q){
                  str+="0"
                  }
                  ++x
                  flag=1
          } 
          }
       }

       if (ital=="0"){
          
          let flag=0
          for (let x=0; x<y; ){
              if (flag==1){
                  for (let q=0; q<mash[x]; ++q){
                  str+="1"
                  }
                  ++x 
                  flag=0
              }else  {
              for (let q=0; q<mash[x]; ++q){
                  str+="0"
                  }
                  ++x
                  flag=1
          } 
        
          }
       }
    myOuta.value = str
})






deshifrsi.addEventListener('click', function(){
    
    let str = ''
    
    let mas = new Array();
    let kol, x=0, y=0, nepr=0;
    mas[0] = new Array()
    for (let r=0, kolvo=0; r <= myInsi.value.length; ++r){
    if (myInsi.value[r]==" "){
        mas[++kolvo] = new Array()
    }
    }
    

    for (let i=0, w=0; w < myInsi.value.length; ++i){
        let flag=true, nn=0
        while (myInsi.value[w] != " "){
            if (w==myInsi.value.length) {
                flag=false
                 break
                }
        mas[i][nn++] = myInsi.value[w++];
        }
        
        ++w
        if (flag==false) break
    }

    for (let i=0; i<myInsi.value.length; ++i){
        if (myInsi.value[i] != " ") ++nepr
    }

    kol=mas[0].length;
    
let rq=1, flag=true

str += mas[x][y];
    while (rq<nepr){
        str +=mas[x][++y];
        ++rq;
        if (rq>=nepr || flag==false) break
         while (y!=0){
            str += mas[++x][--y];
            ++rq
            if (rq>=nepr) {
                flag=false
                break
                }
         }
         if (rq>=nepr || flag==false) break
         str += mas[++x][y];
         ++rq
         if (rq>=nepr) break

         while (x!=0){
            str += mas[--x][++y];
            ++rq
            if (rq>=nepr) {
                flag=false
                break
                }
         }
         if (rq>=nepr || flag==false) break
    }
   

    myOutsi.value = str
})

function dec_to_dec(n){
    let sum=0;
    let st=0;
    for (let i=0; n!=0; ++i){
        sum += n%10 * Math.pow(2, st++);
        n=Math.floor(n/10)
    }
    return sum;
}

shifrh.addEventListener('click', function(){
    
    let str = ''
    for (let z=0; z< Math.floor(myInh.value.length/15); ++z){
    let mas=new Array(15)
    let kol=0, chis=0;
    for (let w=0+15*z, i=0; i<15; ++i){
        if (i!=0 && i!=1 && i!=3 && i!=7 ) {
            mas[i]=myInh.value[w++];
        }
    }
    if ( mas[2]==1) ++kol
    if ( mas[4]==1) ++kol
    if ( mas[6]==1) ++kol
    if ( mas[8]==1) ++kol
    if ( mas[10]==1) ++kol
    if ( mas[12]==1) ++kol
    if ( mas[14]==1) ++kol
    if (kol%2==0) mas[0]=0
    else mas[0]=1;
    kol=0;

   if ( mas[2]==1) ++kol
   if ( mas[5]==1) ++kol
   if ( mas[6]==1) ++kol
   if ( mas[9]==1) ++kol
   if ( mas[10]==1) ++kol
   if ( mas[13]==1) ++kol
   if ( mas[14]==1) ++kol

    if (kol%2==0) mas[1]=0
    else mas[1]=1;
    kol=0;


    if ( mas[4]==1) ++kol
    if ( mas[5]==1) ++kol
    if ( mas[6]==1) ++kol
    if ( mas[11]==1) ++kol
    if ( mas[12]==1) ++kol
    if ( mas[13]==1) ++kol
    if ( mas[14]==1) ++kol
    if (kol%2==0) mas[3]=0
    else mas[3]=1;
    kol=0;

    for (let i=8; i<15; ++i){
        
        if (mas[i]==1) ++kol;
    }

    if (kol%2==0) mas[7]=0
    else mas[7]=1;


    
    
    for (let i=0; i<15; ++i){
        str+=mas[i]
        if (str.length %5 ==1 && str.length >=2) str+=" "
    }
}
    myOuth.value = str
})

deshifrh.addEventListener('click', function(){
    
    let str = ''
    for (let z=0; z< myInh.value.length/15; ++z){
    let mas=new Array(15)
    let kol=0, chis=0;
    for (let w=0+15*z, i=0; i<15; ++i){
            mas[i]=myInh.value[w++];
    }
    if ( mas[0]==1) ++kol
    if ( mas[2]==1) ++kol
    if ( mas[4]==1) ++kol
    if ( mas[6]==1) ++kol
    if ( mas[8]==1) ++kol
    if ( mas[10]==1) ++kol
    if ( mas[12]==1) ++kol
    if ( mas[14]==1) ++kol
    if (kol%2==0) mas[0]=0
    else mas[0]=1;
    kol=0;
    if ( mas[1]==1) ++kol
   if ( mas[2]==1) ++kol
   if ( mas[5]==1) ++kol
   if ( mas[6]==1) ++kol
   if ( mas[9]==1) ++kol
   if ( mas[10]==1) ++kol
   if ( mas[13]==1) ++kol
   if ( mas[14]==1) ++kol

    if (kol%2==0) mas[1]=0
    else mas[1]=1;
    kol=0;

    if ( mas[3]==1) ++kol
    if ( mas[4]==1) ++kol
    if ( mas[5]==1) ++kol
    if ( mas[6]==1) ++kol
    if ( mas[11]==1) ++kol
    if ( mas[12]==1) ++kol
    if ( mas[13]==1) ++kol
    if ( mas[14]==1) ++kol
    if (kol%2==0) mas[3]=0
    else mas[3]=1;
    kol=0;

    for (let i=7; i<15; ++i){
        
        if (mas[i]==1) ++kol;
    }

    if (kol%2==0) mas[7]=0
    else mas[7]=1;
    
    chis=parseInt(mas[0])+parseInt(mas[1])*10+parseInt(mas[3])*100+parseInt(mas[7])*1000
    
    let erad=dec_to_dec(chis)-1
    if (mas[erad]==0) mas[erad]=1
    else mas[erad]=0;
    
    for (let i=0 ; i<15; ++i){
        if (i!=0 && i!=1 && i!=3 && i!=7 )   {
            str+=mas[i]
            
        }
        
        if (str.length %5 ==4) str+=" "
    }
}
    myOuth.value = str

})



shifrsh.addEventListener('click', function(){
    let str = '', kol=0, mas=new Array();
    for (let i =0; i< myInsh.value.length; ++i){
     ++kol
    }
    for (let i=0; i < myInsh.value.length/2 + 1; ++i){
        mas[i]=new Array()
    }

    let x=0, y=0, ko=0, flagg=true
    mas[x][y]=myInsh.value[ko++];

while (ko<=kol){
    mas[x][++y]=myInsh.value[ko++]
   
    if (ko>=kol || flagg==false) break
     while (y!=0){
        mas[++x][--y]=myInsh.value[ko++]
      
        if (ko>=kol) {
            flagg=false
            break
            }
     }
     if (ko>=kol || flagg==false) break
     mas[++x][y]=myInsh.value[ko++];
     
     if (ko>=kol) break

     while (x!=0){
        mas[--x][++y]=myInsh.value[ko++]
        
        if (ko>=kol) {
            flagg=false
            break
            }
     }
     if (ko>kol || flagg==false) break
}


for (let i=0; i < myInsh.value.length/2 + 1; ++i){
        for (let z=0; z<mas[i].length; ++z){
            str += mas[i][z]
        }
    }
    myOutsh.value = str
})


 
 deshifrsh.addEventListener('click', function(){
    let str = '', kol=0, mas=new Array();
    for (let i =0; i< myInsh.value.length; ++i){
     ++kol
    }
    for (let i=0; i < myInsh.value.length/2 + 1; ++i){
        mas[i]=new Array()
    }
let ko=1, flagg=true, x=0, y=0, itx
mas[x][y]=ko;
while (ko<kol){
    mas[x][++y]=ko++
   
    if (ko>=kol || flagg==false) break
     while (y!=0){
        mas[++x][--y]=ko++
      
        if (ko>=kol) {
            flagg=false
            break
            }
     }
     if (ko>=kol || flagg==false) break
     mas[++x][y]=ko++;
     itx=x
     if (ko>=kol) break

     while (x!=0){
        mas[--x][++y]=ko++
        
        if (ko>=kol) {
            flagg=false
            break
            }
     }
     if (ko>=kol || flagg==false) break
}
    
    


for (let i=0, q=0; i<=itx; ++i){
    for (let z=0; z<mas[i].length; ++z){
        mas[i][z]=myInsh.value[q++]
    }
}


let rq=1, flag=true, nepr=myInsh.value.length
x=y=0
str += mas[x][y];
    while (rq<nepr){
        str +=mas[x][++y];
        ++rq;
        if (rq>=nepr || flag==false) break
         while (y!=0){
            str += mas[++x][--y];
            ++rq
            if (rq>=nepr) {
                flag=false
                break
                }
         }
         if (rq>=nepr || flag==false) break
         str += mas[++x][y];
         ++rq
         if (rq>=nepr) break

         while (x!=0){
            str += mas[--x][++y];
            ++rq
            if (rq>=nepr) {
                flag=false
                break
                }
         }
         if (rq>=nepr || flag==false) break
    }
   

    myOutsh.value = str
})


function SHIF (mas1, rev){
    let sad=""
    let res=new Array()
        for (let i=0; i<mas1.length; ++i){
            let k=rev[i]
            res[k]=mas1[i]
    }
    for (let i=0; i<mas1.length; ++i){
    sad+=res[i]
    }
    return sad
    }
    
        function BONE (max) {
    let min=0
        let totalNumbers 		= max - min + 1,
            arrayTotalNumbers 	= [],
            arrayRandomNumbers 	= [],
            tempRandomNumber;
    
        while (totalNumbers--) {
            arrayTotalNumbers.push(totalNumbers + min);
        }
    
        while (arrayTotalNumbers.length) {
            tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
            arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
            arrayTotalNumbers.splice(tempRandomNumber, 1);
        }
    
        return arrayRandomNumbers;
    }
    
    
    
    
        function XOR(mas1, mas2){
            let arr=new Array()
            if (mas1.length%2==1) arr+=mas1[0];
            if (mas2.length%2==1) arr+=mas2[0];
    
            if (mas1.length%2==0 && mas2.length%2==0){
            for (let i=0; i< parseInt((mas1.length+mas2.length)/2); ++i){
             
                if (mas1[i]==0 && mas2[i]==0 || mas1[i]==1 && mas2[i]==1) arr+="0"
                else arr+="1"
            }
            }
    
            if (mas1.length%2==1 && mas2.length%2==0){
            for (let i=0, k=1; i< parseInt((mas1.length+mas2.length)/2); ++i, ++k){
                console.log(mas1[i], mas2[i])
                if (mas1[k]==0 && mas2[i]==0 || mas1[k]==1 && mas2[i]==1) arr+="0"
                else arr+="1"
            }
            }
    
            if (mas1.length%2==0 && mas2.length%2==1){
            for (let i=0, k=1; i< parseInt((mas1.length+mas2.length)/2); ++i, ++k){
                if (mas1[i]==mas2[k]==0 || mas1[i]==mas2[k]==1) arr+="0"
                else arr+="1"
            }
            }
            return arr
        }
    
    function RELISE(mas1, mas2){
         let rev=new Array()
    rev=BONE(mas1.length-1)
    console.log(rev)
    mas1=SHIF(mas1, rev)
    
   let  arr = XOR(mas1, mas2)
    
    return arr
    }
    
        shifrhf.addEventListener('click', function(){
    let rrrr=BONE(myInhf.value.length-1)
    console.log(rrrr)
    let ssd=new Array()
    let k=myInhf.value.length
    
    for (let i=0; i<k; ++i){
    ssd[i] = myInhf.value[i]
    }
    myInhf.value = SHIF(ssd, rrrr)

    
        
    let str=""
    
    let mas1, mas2, arr;
    mas1=new Array()
    mas2=new Array()
    arr=new Array()
    for (let i=0, k=0; i<myInhf.value.length; ++i){
       if ( i < parseInt(myInhf.value.length/2) + myInhf.value.length%2) mas1[i]=myInhf.value[i]
       else mas2[k++]=myInhf.value[i]
        
    }
    
    while (str.length + myInhf.value.length/2 <=myInhf.value.length){
    arr=RELISE(mas1, mas2)
    mas2=mas1
    mas1=arr
    str+=arr
    }
    myOuthf.value=str
    })
    
    function DERELISE(mas1, mas2, rev){
    
    mas1=SHIF(mas1, rev)
    
    arr = XOR(mas1, mas2)
    
    return arr
    }
    
    
    
    function DESHIFIT (mas1, rev){
    let sad=""
    let res=new Array()
        for (let i=0; i<mas1.length; ++i){
            let k=rev[i]
            res[i]=mas1[k]
    }
    for (let i=0; i<mas1.length; ++i){
    sad+=res[i]
    }
    return sad
    }
    
    
    deshifrhf.addEventListener('click', function(){
        
    let str=""
    
    let mas1, mas2, arr;
    mas1=new Array()
    mas2=new Array()
    arr=new Array()
    for (let i=0, k=0; i<myInhf.value.length; ++i){
       if ( i < parseInt(myInhf.value.length/2) + myInhf.value.length%2) mas1[i]=myInhf.value[i]
       else mas2[k++]=myInhf.value[i]
        
    }
    
    while (str.length + myInhf.value.length/2 <=myInhf.value.length){
    
    let pass=prompt("Введите ключ")
    pass=pass.split(/\s+/)
    console.log(pass)
    arr=DERELISE(mas1, mas2, pass)
    mas2=mas1
    mas1=arr
    str+=arr
    }
    
    
     let rrrr=prompt("Введите ключ")
     rrrr=rrrr.split(/\s+/)
    let ssd=new Array()
    let k=str.length
    
    for (let i=0; i<k; ++i){
    ssd[i] = str[i]
    }
    myOuthf.value = DESHIFIT(ssd, rrrr)
    
    

    
    })
















function i_s(ins_sym) { /* Функция вставки символов из таблицы в окно ввода */
    
    document.morze.input_text.value += ins_sym; /* Вставляем символ в окно */
    }
    
    
    function convert() { /* Функция выбора режима конвертирования */
    
    var text2morze_value = document.getElementById("text2morze"); /* Присваиваем переменным значение полей */
    var morze2rus_value = document.getElementById("morze2rus");
    var morze2lat_value = document.getElementById("morze2lat");
    var input_text_value = document.getElementById("input_text").value;
    var current_symbol = input_text_value.charAt(0);
    
    document.morze.output_text.value = ""; /* Сбрасываем значение поля вывода */
    
    if (text2morze_value.checked) {
    
    if ((current_symbol == ".") || (current_symbol == ",") || (current_symbol == "*") || (current_symbol == "+") || (current_symbol == "·") || (current_symbol == "•") || (current_symbol == "-") || (current_symbol == "−")) {  /* Если текущий символ равен любому знаку Морзе */
    document.morze.output_text.value += "Внимание! Переключатель стоит в положении Текст в код Морзе, а сообщение начинается со знака препинания! Если всё верно, то результат конвертирования:  ";
    } /* Если переключатель в положении Текст в код Морзе - начинаем выполнять конвертацию введённого текста в код Морзе */
    convert_text2morze(input_text_value);
    }
    
    if (morze2rus_value.checked) { convert_morze2rus(input_text_value); } /* Если переключатель в положении код Морзе в русский текст - начинаем выполнять конвертацию введённого кода Морзе в текст */
    
    if (morze2lat_value.checked) { convert_morze2lat(input_text_value); } /* Если переключатель в положении код Морзе в латинский текст - начинаем выполнять конвертацию введённого кода Морзе в текст */
    }
    
    
    
    function convert_text2morze(input_text_value) { /* Функция конвертирования текста в код Морзе */
    
    input_text_value = input_text_value.toUpperCase(); /* Переводим введённый текст в верхний регистр (маленькие буквы в большие) */
    
    for (var string_count=0; string_count<input_text_value.length; string_count++) { /* Начинаем цикл прохода по всем символам введённого текста */
    
    var current_symbol=input_text_value.charAt(string_count); /* Присваиваем переменной значение текущего символа */
    var unknown_symbol=true; /* Устанавливаем флаг наличия неизвестного символа */
    
    if (current_symbol=="Ё") { current_symbol = "Е"; } /* Проверяем текущий символ - не является ли он буквой Ё. Если является - превращаем в Е*/
    
    for (var massiv_count=0; massiv_count<massiv_rus.length; massiv_count++) { /* Начинаем цикл сравнения текущего символа с символами массива русских букв */
    if (current_symbol==massiv_rus[massiv_count]) { /* Если текущий символ равен символу массива... */
    document.morze.output_text.value += massiv_morze[massiv_count]+" "; /* ...Добавляем соответствующий ему код Морзе в окно вывода... */
    unknown_symbol = false; /* ... И сбрасываем флаг неизвестного символа */
    }
    }
    
    for (var massiv_count=0; massiv_count<massiv_lat.length; massiv_count++) { /* Начинаем цикл сравнения текущего символа с символами массива латинских букв */
    if (current_symbol==massiv_lat[massiv_count]) { /* Если текущий символ равен символу массива... */
    document.morze.output_text.value += massiv_morze[massiv_count]+" "; /* ...Добавляем соответствующий ему код Морзе в окно вывода... */
    unknown_symbol = false; /* ... И сбрасываем флаг неизвестного символа */
    }
    }
    
    for (var massiv_count=0; massiv_count<massiv_num_sym.length; massiv_count++) { /* Начинаем цикл сравнения текущего символа с символами массива знаков препинания и других знаков */
    if (current_symbol==massiv_num_sym[massiv_count]) { /* Если текущий символ равен символу массива... */
    document.morze.output_text.value += massiv_morze[massiv_count]+" "; /* ...Добавляем соответствующий ему код Морзе в окно вывода... */
    unknown_symbol = false; /* ... И сбрасываем флаг неизвестного символа */
    }
    }
    
    /*
    if (unknown_symbol==true) { document.morze.output_text.value += "[неизвестный символ "+current_symbol+"] "; } Если текущий символ не соответствует ни одному символу в массивах - пишем об этом в окне вывода */
    } /* Конец цикла прохода по всем символам введённого текста  */
    
    } /* Конец конвертации введённого текста в код Морзе */
    
    
    
    function convert_morze2rus(input_text_value) { /* Функция конвертирования кода Морзе в русский текст */
    
    var morze_symbol = ""; /* Сбрасываем значение переменной символа кода Морзе */
    
    for (var string_count=0; string_count<=input_text_value.length; string_count++) { /* Начинаем цикл прохода по всем символам введённого текста */
    
    var current_symbol=input_text_value.charAt(string_count); /* Присваиваем переменной значение текущего символа */
    
    if ((current_symbol == ".") || (current_symbol == ",") || (current_symbol == "*") || (current_symbol == "+") || (current_symbol == "·")) { current_symbol = "•"; } /* Если текущий символ равен точке или умножению - присваиваем ему значение точки Морзе */
    if ((current_symbol == "-") || (current_symbol == "−")) { current_symbol = "−"; } /* Если текущий символ равен дефису - присваиваем ему значение тире Морзе */
    
    
    if ((current_symbol == "•") || (current_symbol == "−")) {
    morze_symbol += current_symbol;
    
    } /* Если получившийся текущий символ равен точке или тире Морзе, добавляем его к переменной символа Морзе */
    else { /* Иначе начинаем сравнение переменной символа Морзе с символами массива Морзе */
    
    if ((current_symbol == " ") && (input_text_value.charAt(string_count-1) == " ")) { /* Если в коде два пробела подряд... */
    document.morze.output_text.value += " "; /* Добавляем пробел в окно вывода */
    }
    
    
    for (var massiv_count=0; massiv_count<massiv_rus.length; massiv_count++) { /* Запускаем цикл прохода по массиву Морзе в границах кириллицы */
    if (morze_symbol==massiv_morze[massiv_count]) { /* Если переменная символа Морзе равна символу массива... */
    document.morze.output_text.value += massiv_rus[massiv_count]; /* ...добавляем соответствующий русский символ в окно вывода */
    morze_symbol = ""; /* сбрасываем значение переменной символа Морзе */
    }
    }
    for (var massiv_count=0; massiv_count<massiv_num_sym.length; massiv_count++) { /* Запускаем цикл прохода по массиву Морзе в границах кириллицы */
    if (morze_symbol==massiv_morze[massiv_count]) { /* Если переменная символа Морзе равна символу массива... */
    document.morze.output_text.value += massiv_num_sym[massiv_count]; /* ...добавляем соответствующий символ знака препинания в окно вывода */
    morze_symbol = ""; /* сбрасываем значение переменной символа Морзе */
    }
    }
    } /* Конец условия "иначе"  */
    
    
    } /* Конец цикла прохода по всем символам введённого текста  */
    
    } /* Конец конвертации введённого кода Морзе в русский текст */
    
    
    
    function convert_morze2lat(input_text_value) { /* Функция конвертирования кода Морзе в латинский текст */
    
    var morze_symbol = ""; /* Сбрасываем значение переменной символа кода Морзе */
    
    for (var string_count=0; string_count<=input_text_value.length; string_count++) { /* Начинаем цикл прохода по всем символам введённого текста */
    
    var current_symbol=input_text_value.charAt(string_count); /* Присваиваем переменной значение текущего символа */
    
    if ((current_symbol == ".") || (current_symbol == ",") || (current_symbol == "*") || (current_symbol == "+") || (current_symbol == "·")) { current_symbol = "•"; } /* Если текущий символ равен точке или умножению - присваиваем ему значение точки Морзе */
    if ((current_symbol == "-") || (current_symbol == "−")) { current_symbol = "−"; } /* Если текущий символ равен дефису - присваиваем ему значение тире Морзе */
    
    
    if ((current_symbol == "•") || (current_symbol == "−")) {
    morze_symbol += current_symbol;
    
    } /* Если получившийся текущий символ равен точке или тире Морзе, добавляем его к переменной символа Морзе */
    else { /* Иначе начинаем сравнение переменной символа Морзе с символами массива Морзе */
    
    if ((current_symbol == " ") && (input_text_value.charAt(string_count-1) == " ")) { /* Если в коде два пробела подряд... */
    document.morze.output_text.value += " "; /* Добавляем пробел в окно вывода */
    }
    
    
    for (var massiv_count=0; massiv_count<massiv_lat.length; massiv_count++) { /* Запускаем цикл прохода по массиву Морзе в границах кириллицы */
    if (morze_symbol==massiv_morze[massiv_count]) { /* Если переменная символа Морзе равна символу массива... */
    document.morze.output_text.value += massiv_lat[massiv_count]; /* ...добавляем соответствующий русский символ в окно вывода */
    morze_symbol = ""; /* сбрасываем значение переменной символа Морзе */
    }
    }
    for (var massiv_count=0; massiv_count<massiv_num_sym.length; massiv_count++) { /* Запускаем цикл прохода по массиву Морзе в границах кириллицы */
    if (morze_symbol==massiv_morze[massiv_count]) { /* Если переменная символа Морзе равна символу массива... */
    document.morze.output_text.value += massiv_num_sym[massiv_count]; /* ...добавляем соответствующий символ знака препинания в окно вывода */
    morze_symbol = ""; /* сбрасываем значение переменной символа Морзе */
    }
    }
    } /* Конец условия "иначе"  */
    
    
    } /* Конец цикла прохода по всем символам введённого текста  */
    
    } /* Конец конвертации введённого кода Морзе в латинский текст */
    
    
    var focus_on_input = document.getElementById("input_text"); /* Наводим фокус на окно ввода текста */
    focus_on_input.focus();
    
    var massiv_rus=new Array(32); /* Объявляем массив русских символов */
    var massiv_lat=new Array(29); /* Объявляем массив латинских символов */
    var massiv_num_sym=new Array(63); /* Объявляем массив цифр и специальных символов */
    var massiv_morze=new Array(63); /* Объявляем массив азбуки Морзе */
    
    massiv_rus[0]="А"; /* Задаём элементы массива русских символов */
    massiv_rus[1]="Б";
    massiv_rus[2]="В";
    massiv_rus[3]="Г";
    massiv_rus[4]="Д";
    massiv_rus[5]="Е";
    massiv_rus[6]="Ж";
    massiv_rus[7]="З";
    massiv_rus[8]="И";
    massiv_rus[9]="Й";
    massiv_rus[10]="К";
    massiv_rus[11]="Л";
    massiv_rus[12]="М";
    massiv_rus[13]="Н";
    massiv_rus[14]="О";
    massiv_rus[15]="П";
    massiv_rus[16]="Р";
    massiv_rus[17]="С";
    massiv_rus[18]="Т";
    massiv_rus[19]="У";
    massiv_rus[20]="Ф";
    massiv_rus[21]="Х";
    massiv_rus[22]="Ц";
    massiv_rus[23]="Ч";
    massiv_rus[24]="Ш";
    massiv_rus[25]="Щ";
    massiv_rus[26]="Ъ";
    massiv_rus[27]="Ы";
    massiv_rus[28]="Ь";
    massiv_rus[29]="Э";
    massiv_rus[30]="Ю";
    massiv_rus[31]="Я";
    
    massiv_lat[0]="A"; /* Задаём элементы массива латинских символов */
    massiv_lat[1]="B";
    massiv_lat[2]="W";
    massiv_lat[3]="G";
    massiv_lat[4]="D";
    massiv_lat[5]="E";
    massiv_lat[6]="V";
    massiv_lat[7]="Z";
    massiv_lat[8]="I";
    massiv_lat[9]="J";
    massiv_lat[10]="K";
    massiv_lat[11]="L";
    massiv_lat[12]="M";
    massiv_lat[13]="N";
    massiv_lat[14]="O";
    massiv_lat[15]="P";
    massiv_lat[16]="R";
    massiv_lat[17]="S";
    massiv_lat[18]="T";
    massiv_lat[19]="U";
    massiv_lat[20]="F";
    massiv_lat[21]="H";
    massiv_lat[22]="C";
    massiv_lat[23]="Ö";
    massiv_lat[24]="CH";
    massiv_lat[25]="Q";
    massiv_lat[26]="Ñ";
    massiv_lat[27]="Y";
    massiv_lat[28]="X";
    massiv_lat[29]="É";
    massiv_lat[30]="Ü";
    massiv_lat[31]="Ä";
    
    
    massiv_num_sym[32]="1"; /* Задаём элементы массива цифр и специальных символов */
    massiv_num_sym[33]="2";
    massiv_num_sym[34]="3";
    massiv_num_sym[35]="4";
    massiv_num_sym[36]="5";
    massiv_num_sym[37]="6";
    massiv_num_sym[38]="7";
    massiv_num_sym[39]="8";
    massiv_num_sym[40]="9";
    massiv_num_sym[41]="0";
    massiv_num_sym[42]=".";
    massiv_num_sym[43]=",";
    massiv_num_sym[44]=":";
    massiv_num_sym[45]=";";
    massiv_num_sym[46]="(";
    massiv_num_sym[47]="'";
    massiv_num_sym[48]="\"";
    massiv_num_sym[49]="—";
    massiv_num_sym[50]="/";
    massiv_num_sym[51]="?";
    massiv_num_sym[52]="!";
    massiv_num_sym[53]="=";
    massiv_num_sym[54]="Error";
    massiv_num_sym[55]="@";
    massiv_num_sym[56]="End contact";
    massiv_num_sym[57]=" ";
    massiv_num_sym[58]=")";
    massiv_num_sym[59]="&";
    massiv_num_sym[60]="+";
    massiv_num_sym[61]="_";
    massiv_num_sym[62]="$";
    massiv_num_sym[63]="-";
    massiv_num_sym[64]="\n";
    
    massiv_morze[0]="•−"; /* Задаём элементы массива азбуки Морзе */
    massiv_morze[1]="−•••";
    massiv_morze[2]="•−−";
    massiv_morze[3]="−−•";
    massiv_morze[4]="−••";
    massiv_morze[5]="•";
    massiv_morze[6]="•••−";
    massiv_morze[7]="−−••";
    massiv_morze[8]="••";
    massiv_morze[9]="•−−−";
    massiv_morze[10]="−•−";
    massiv_morze[11]="•−••";
    massiv_morze[12]="−−";
    massiv_morze[13]="−•";
    massiv_morze[14]="−−−";
    massiv_morze[15]="•−−•";
    massiv_morze[16]="•−•";
    massiv_morze[17]="•••";
    massiv_morze[18]="−";
    massiv_morze[19]="••−";
    massiv_morze[20]="••−•";
    massiv_morze[21]="••••";
    massiv_morze[22]="−•−•";
    massiv_morze[23]="−−−•";
    massiv_morze[24]="−−−−";
    massiv_morze[25]="−−•−";
    massiv_morze[26]="−−•−−";
    massiv_morze[27]="−•−−";
    massiv_morze[28]="−••−";
    massiv_morze[29]="••−••";
    massiv_morze[30]="••−−";
    massiv_morze[31]="•−•−";
    massiv_morze[32]="•−−−−";
    massiv_morze[33]="••−−−";
    massiv_morze[34]="•••−−";
    massiv_morze[35]="••••−";
    massiv_morze[36]="•••••";
    massiv_morze[37]="−••••";
    massiv_morze[38]="−−•••";
    massiv_morze[39]="−−−••";
    massiv_morze[40]="−−−−•";
    massiv_morze[41]="−−−−−";
    massiv_morze[42]="••••••";
    massiv_morze[43]="•−•−•−";
    massiv_morze[44]="−−−•••";
    massiv_morze[45]="−•−•−•";
    massiv_morze[46]="−•−−•";
    massiv_morze[47]="•−−−−•";
    massiv_morze[48]="•−••−•";
    massiv_morze[49]="−••••−";
    massiv_morze[50]="−••−•";
    massiv_morze[51]="••−−••";
    massiv_morze[52]="−−••−−";
    massiv_morze[53]="−•••−";
    massiv_morze[54]="••••••••";
    massiv_morze[55]="•−−•−•";
    massiv_morze[56]="••−•−";
    massiv_morze[57]=" ";
    massiv_morze[58]="−•−−•−";
    massiv_morze[59]="•−•••";
    massiv_morze[60]="•−•−•";
    massiv_morze[61]="••−−•−";
    massiv_morze[62]="•••−••−";
    massiv_morze[63]="−••••−";
    massiv_morze[64]="\n";
    