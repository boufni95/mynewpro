var menuItem=document.getElementById("menu").getElementsByTagName("li")
var btn=document.getElementById("bt")
var headline=document.getElementById("demo");
menuItem[0].innerHTML = "hello world"
for(i=0;i<3;i++){
    menuItem[i].addEventListener("click",selectItem);
}
function selectItem(){
   headline.innerHTML=this.innerHTML;
}
btn.addEventListener("click",newItem)
function newItem(){
    headline.innerHTML="hello world";
    btn.innerHTML="safi baraka"
}