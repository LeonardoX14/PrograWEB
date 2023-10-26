
window.onload = function(){
    /************ALERTA EN LA IMAGEN *************************/
/* document.getElementById("logo").onmouseover= function(){alert('VENTA DE BOCINAS MEJOR CALIDAD');} */


function onMouseOver(btn1){
    btn1.style.color="red";
    btn1.style.textShadow=".2rem .2rem .2rem #333";
 }
 function onMouseOut(btn1){
    btn1.style.color="#333";
    btn1.style.textShadow="none";
 }
 function onMouseDown(btn1){
    btn1.style.color="blue";
    btn1.style.textShadow=".2rem .2rem .2rem #000";
 }
 let btn1=document.getElementById("bto1");
 btn1.addEventListener("mouseover",function(){onMouseOver(btn1)});
 btn1.addEventListener("mouseout",function(){onMouseOut(btn1)});
 btn1.addEventListener("mousedown",function(){onMouseDown(btn1)});


 let btn2=document.getElementById("bto2");
 btn2.addEventListener("mouseover",function(){onMouseOver(btn2)});
 btn2.addEventListener("mouseout",function(){onMouseOut(btn2)});
 btn2.addEventListener("mousedown",function(){onMouseDown(btn2)});


 let btn3=document.getElementById("bto3");
 btn3.addEventListener("mouseover",function(){onMouseOver(btn3)});
 btn3.addEventListener("mouseout",function(){onMouseOut(btn3)});
 btn3.addEventListener("mousedown",function(){onMouseDown(btn3)});

 searchItem= document.getElementById("searchDIV");
 avisos=document.getElementById("avisos");
 btn1.onclick=function(){
    if(searchItem.style.display=="none" || searchItem.style.display==""){
        searchItem.style.display="flex";
        avisos.style.display="block";
    }else{
        searchItem.style.display="none";
      avisos.style.display="none";
    }
   closeBto= document.getElementById("closeBto");
   closeBto.onclick=function(){
    searchItem.style.display="none";
    avisos.style.display="none";
   }
 }
  document.getElementsByClassName("close")[0].onclick=function(){
    document.getElementById('loginForm').style.display='none';
  }
 btn2.onclick=function(){
  document.getElementById('loginForm').style.display='block';
 }
}

