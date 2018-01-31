function dec_to_bin(n, mas){
    for (let i=7; i>=0; i--){
        mas[i]=n%2;
        n=Math.floor(n/2);
    }
}

function dec_to_dec(kvadrant, n){
    let sum=0;
    let st=n-1;
    for (let i=0; i<n; i++){
        sum += kvadrant[i]* Math.pow(2, st--);
    }
    return sum;
}

function del_zero(hos){
for (let i=0; i<32; i++){
    hos[i]=0;
}
}

function tet_a_tet(k1, k2, k3, k4, mask){
    for (let i=0; ; ){
        for (let y=0; y<8; y++){
            k1[y]=mask[i++];

        }
        for (let y=0; y<8; y++){
            k2[y]=mask[i++];

        }
        for (let y=0; y<8; y++){
            k3[y]=mask[i++];

        }
        for (let y=0; y<8; y++){
            k4[y]=mask[i++];

        }
        break;
    }
}


starti.addEventListener('click', function(){


        let a, b, c, d, cidr;
        let clas;
        let kvadrant1=new Array(8), ip=new Array(32), mask=new Array(32), hos=new Array(32), net=new Array(32), host=new Array(32), kvadrant2=new Array(8), kvadrant3=new Array(8), kvadrant4=new Array(8), k1=new Array(8), k2=new Array(8), k3=new Array(8), k4=new Array(8);
        a=aq.value
        console.log(a)
        b=bq.value
        c=cq.value
        d=dq.value
        cidr=cidrq.value
        dec_to_bin(a, kvadrant1);
        dec_to_bin(b, kvadrant2);
        dec_to_bin(c, kvadrant3);
        dec_to_bin(d, kvadrant4);
        if (cidr==0){
            if (a<128) {
                clas='A';
                cidr=8;
            }
        else
        if (a<192) {
            clas='B';
            cidr=16;
        }
        else
        if (a<224) {
            clas='C';
            cidr=24;
        }
        else
        if (a<240) clas='D';
        else clas='E';
        }
        else clas='-';


        for (let i=0; ; ){
            for (let y=0; y<8; y++){
                ip[i++]=kvadrant1[y];
            }

            for (let y=0; y<8; y++){
                ip[i++]=kvadrant2[y];
            }

            for (let y=0; y<8; y++){
                ip[i++]=kvadrant3[y];
            }

            for (let y=0; y<8; y++){
                ip[i++]=kvadrant4[y];
            }

            break;
        }

for (let i=0; i<32; i++){
    net[i]=ip[i];
    host[i]=ip[i];
}

for (let i=0; i<32; i++){
    if (i<cidr) {
        host[i]=0;
        net[i]=ip[i];
    }
    if (i>=cidr) {
        net[i]=0;
        host[i]=ip[i];
    }
}


tet_a_tet(kvadrant1, kvadrant2, kvadrant3, kvadrant4, net);



tet_a_tet(k1, k2, k3, k4, host);


let str=''
        for (let i=0; i<32; i++){
            str+=ip[i];
            if (i%8==7 && i!=31) str+=".";
        }
        bin.value = str
        str=''
classs.value = clas
capas.value =  Math.pow(2, 32 - cidr) - 2;

for (let i=0; i<32; i++){
    if (i<cidr) {
        str+="1";
        mask[i]=1;
    }
    else {
        str+="0";
        mask[i]=0;
    }
    if (i%8==7 && i!=31) str+=".";
}
maskbin.value=str
str=''
for (let i=0; i<32; i++){
    str+=net[i];
    if (i%8==7 && i!=31) str+=".";
}
netidbin.value = str
str=''

for (let i=0; i<32; i++){
    str+=host[i];
    if (i%8==7 && i!=31) str+=".";
}
hostidbin.value = str
str=''

str += dec_to_dec(kvadrant1, 8) +"." + dec_to_dec(kvadrant2, 8) +"." + dec_to_dec(kvadrant3, 8) +"." + dec_to_dec(kvadrant4, 8);
netid.value = str
str=''

str+= dec_to_dec(k1, 8) +"." + dec_to_dec(k2, 8) +"." + dec_to_dec(k3, 8) +"." + dec_to_dec(k4, 8);
hostid.value=str
str=''


tet_a_tet(k1, k2, k3, k4, mask);


str+= dec_to_dec(k1, 8) +"." + dec_to_dec(k2, 8) +"." + dec_to_dec(k3, 8) +"." + dec_to_dec(k4, 8);
maskk.value=str
str=''

let y=0;
for (let i=cidr; i<32; i++){
    hos[y++]=ip[i];
}



str += dec_to_dec(hos, y);
hostt.value = str
str=''
del_zero(hos);
y=0;
for (let i=0;i<32; i++){
       if (i>=cidr) hos[y++]=1;
       else hos[y++]=ip[i];
}

tet_a_tet(k1, k2, k3, k4, hos);


str += dec_to_dec(k1, 8) +"." + dec_to_dec(k2, 8) +"." + dec_to_dec(k3, 8) +"." + dec_to_dec(k4, 8);
broadcast.value = str
str=''

del_zero(hos);
y=0;
for (let i=0;i<32; i++){
           if (i>=cidr && i!=31) hos[y++]=0;
       else
           if (i==31) hos[y++]=1;
       else hos[y++]=ip[i];
}

tet_a_tet(k1, k2, k3, k4, hos);


str += dec_to_dec(k1, 8) +"." + dec_to_dec(k2, 8) +"." + dec_to_dec(k3, 8) +"." + dec_to_dec(k4, 8);
first.value = str
str=''

del_zero(hos);
y=0;
for (let i=0;i<32; i++){
           if (i>=cidr && i!=31) hos[y++]=1;
       else
           if (i==31) hos[y++]=0;
       else hos[y++]=ip[i];
}

tet_a_tet(k1, k2, k3, k4, hos);


str += dec_to_dec(k1, 8) +"." + dec_to_dec(k2, 8) +"." + dec_to_dec(k3, 8) +"." + dec_to_dec(k4, 8);
latest.value = str
str=''
})