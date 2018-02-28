class MATR {
    constructor(people, money){
    this.money=money
    this.people=people
    }
    
}


    raschit.addEventListener('click', function(){
    dji=1.0
    let mas=myIndji.value.split(/\s+/)
    for (let i=0; i<mas.length; ++i) mas[i]=parseFloat(mas[i])
    let masMATR=[]
    for (let i=0; i<mas.length; i+=2){
        let mon=mas[i+1]
        let peop = mas[i]
       if (i!=0) masMATR[parseInt(i/2)] = new MATR(peop+masMATR[parseInt(i/2)-1].people, mon + masMATR[parseInt(i/2)-1].money)
       else masMATR[parseInt(i/2)] = new MATR(peop, mon)
    }
    
    let sum=0.0
    
    for (let i=0; i<masMATR.length; ++i){

        if (i==0) sum+=masMATR[i].money*masMATR[i].people*0.5
        else
        sum+=0.5*(masMATR[i].money+masMATR[i-1].money)*(masMATR[i].people-masMATR[i-1].people)
    }
    dji-=sum*2
myOutdji.value=dji
})