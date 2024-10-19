function randomText(){
    let text=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklm
    nopqrstuvwxyz0123456789.,;:!?'"+-_/()[]{}<>@#$%^&*~`;
    
    let letter=text[Math.floor(Math.random() * text.length)];
    console.log(letter);
    return letter;
}
function rain(){
    let cloud=document.querySelector(".cloud");
    let e=document.createElement("div");
    let left=Math.floor(Math.random() * 300) + 10;
    let size= Math.random *3;
    e.classList.add("text");
    cloud.appendChild(e);
    e.innerText=randomText();
    e.style.left=left+"px";
    e.style.fontSize=0.5 + size +"em";
    setTimeout(()=>{
        cloud.removeChild(e);
    },2000);
}
setInterval(()=>{
    rain();
},100)