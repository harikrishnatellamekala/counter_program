let count=0;
document.getElementById("decbtn").onclick=function(){
    count=count-1;
    document.getElementById("clabel").innerHTML=count;
}
document.getElementById("resetbtn").onclick=function(){
    count=0;
    document.getElementById("clabel").innerHTML=count;
}
document.getElementById("incbtn").onclick=function(){
    count=count+1;
    document.getElementById("clabel").innerHTML=count;
}