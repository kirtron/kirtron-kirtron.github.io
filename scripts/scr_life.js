var gFieldL=[]; // gFieldL[w][h]
var gFieldK=[]; // cashe number of near

var gFWidth=8,gFHeight=8; // game field size
var intervalGameID = -1; // for timer

// shift around cell
var vokrugCellX = [ -1, 0, 1, -1, 1, -1, 0 ,1 ];
var vokrugCellY = [ -1,-1,-1,  0, 0,  1, 1 ,1 ];

function createKField(w,h){
	var newKF=new Array(w);
	for (var i=0;i<w;i++) {
		newKF[i]=new Array(h); // 2d array.
		for (var j=0;j<h;j++) newKF[i][j]=0;
	}
	return newKF;
}
function cloneKField(sKF){
	var newKF=new Array(sKF.length);
	for (var i=0;i<sKF.length;i++) {
		newKF[i]=new Array(sKF[i].length); // 2d array.
		newKF[i] = sKF[i].slice(0); //  for (var j=0;j<sKF[i].length;j++) newKF[i][j]=sKF[i][j];
	}
	return newKF;
}
function createField(w,h){ // Set size of game table, init field.
	gFWidth = w; gFHeight=h;
	gFieldK = createKField(gFWidth,gFHeight);
	gFieldL=new Array(w);
	for (var i=0;i<w;i++) {
		gFieldL[i]=new Array(h); // 2d array.
		for (var j=0;j<h;j++) gFieldL[i][j]=false;
	}
	var hT="<table cellpadding='0' cellspacing='0'>";
	for (var j=0;j<h;j++) {
		hT+="<tr>";
		for (var i=0;i<w;i++) {
			hT+="<td id='c"+i+"_"+j+"' "+"onclick='onCellClk("+i+","+j+");'>";
			hT+="</td>";
		}
		hT+="</tr>";
	}
	document.getElementById('game').innerHTML = hT+"</table>";
}

// for border coordinates
function getVirtualX(x) {
	if ( x<0 ) return gFWidth-1;
	if ( x>=gFWidth ) return 0;
	return x;
}
function getVirtualY(y) {
	if ( y<0 ) return gFHeight-1;
	if ( y>=gFHeight ) return 0;
	return y;
}
function changeCellState(x,y,newState) {
	if (gFieldL[x][y]==newState) return;
	gFieldL[x][y]=newState;
	var chK= newState ? 1 : -1; //if (newState) chK=1; else chK=-1;
	for (var i=0; i<vokrugCellX.length; i++) {
		var rX=getVirtualX(x+vokrugCellX[i]);
		var rY=getVirtualY(y+vokrugCellY[i]);
		gFieldK[rX][rY] += chK;
	}
	// showing
	var oName="c"+x+"_"+y;
	if ( newState ) document.getElementById(oName).className="life";
	else document.getElementById(oName).className="";
//document.getElementById(oName).style.backgroundColor = "#FFF";
}
function processLife() {
	var lastFK = cloneKField(gFieldK);
	for (var i=0;i<gFWidth;i++) for (var j=0;j<gFHeight;j++) {
		if ( lastFK[i][j]==3 ) changeCellState(i,j, true);
		if ( lastFK[i][j]<2 || lastFK[i][j]>3 ) changeCellState(i,j, false);
	}
}

function onCellClk(x,y) { // On click on game cell
	x=parseInt(x); y=parseInt(y);
	changeCellState(x,y, !gFieldL[x][y]);
}
function startAndStop() {
	if (intervalGameID==-1) intervalGameID = setInterval('processLife()', 100);
	else {
		clearInterval(intervalGameID);
		intervalGameID=-1;
	}
}
function fillWithRandom(){
  for (var i=0;i<gFWidth;i++) for (var j=0;j<gFHeight;j++) if (Math.random()*100>70+18*Math.cos(i/10)*Math.sin(j/10)) changeCellState(i,j, true);
}


function clkGameButton(){
    if (isNaN(frmGame.nCells.value)||isNaN(frmGame.nCells2.value)) {
        alert("Введите число клеток.");
        return;
    }
    var n=parseInt(frmGame.nCells.value);
    var m=parseInt(frmGame.nCells2.value);
    createField(n,m);
}

function initGame(){
    createField(32,28);
    fillWithRandom();
    startAndStop();
}

let ident = 1

but.addEventListener('click', function(){
if (ident==1){
    but.value = "Пауза"
    ident=0
} else 	if (ident==0){
    but.value = "Продолжить"
    ident=1
    
}
})