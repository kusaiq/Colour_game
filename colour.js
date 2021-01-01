numsquares=6;
var colur =gencolourarr(numsquares);
var correct=colur[random()];
var square=document.querySelectorAll(".square");
var displayguess =document.querySelector("#guess")
var direct=document.querySelector("#direct")
var reset =document.querySelector("#reset")
var h1 =document.querySelector("h1")
var easy =document.querySelector("#Easy")
var hard =document.querySelector("#Hard")
easy.addEventListener("click",ez);
hard.addEventListener("click",hd);
reset.addEventListener("click",res);
displayguess.textContent=correct;

for(var i=0;i<colur.length;i++){
square[i].style.backgroundColor=colur[i];
square[i].addEventListener("click",check);
 function check() {
if(this.style.backgroundColor ===correct){
	direct.textContent="correct"
	h1.style.backgroundColor=correct;
	for(var i=0;i<colur.length;i++){
		square[i].style.backgroundColor=correct;

	}

}
else{
	direct.textContent="try gain"
	this.style.backgroundColor="#232323";
}
}
 }

 function random (){
 var num =Math.floor(Math.random() *colur.length)
 return num
 }
 
 function generator(){
 	var gen =Math.floor(Math.random() *256)
 	return gen;


 }
 function gencolourarr(num) {
 	var col =[];
 for(var i=0;i<num;i++){
 col[i] ="rgb(" + generator() +", " + generator() + ", " + generator() +")";
}
return col;
}

function res(){
	 colur =gencolourarr(numsquares);
 correct=colur[random()];
 displayguess.textContent=correct;
 h1.style.backgroundColor="steelblue";

 for(var i=0;i<colur.length;i++){
square[i].style.backgroundColor=colur[i];
square[i].addEventListener("click",check);
}

}
function ez (){
easy.classList.add("mod")
hard.classList.remove("mod")
	numsquares=3;
colur =gencolourarr(numsquares);
 correct=colur[random()];
 displayguess.textContent=correct;
 h1.style.backgroundColor="steelblue";
 for(var i=0;i<square.length;i++){
 	if(colur[i]){
square[i].style.backgroundColor=colur[i];
}
else {
	square[i].style.display="none";
}	
}
}
function hd (){
hard.classList.add("mod")
easy.classList.remove("mod")
	numsquares=6;
colur =gencolourarr(numsquares);
 correct=colur[random()];
 displayguess.textContent=correct;
 h1.style.backgroundColor="steelblue";
 for(var i=0;i<square.length;i++){
 	
square[i].style.backgroundColor=colur[i];
square[i].style.display="block";


}
}


	
