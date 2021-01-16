const text = document.querySelector(".fancy");
const strText = text.textContent;
const spliText = strText.split("");
text.textContent = "";
for(let i=0; i < spliText.length; i++){
    text.innerHTML += "<span>" + spliText[i] + "</span>"+"<br/>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === spliText.length){
        
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}