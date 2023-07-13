var ButtonPressed=document.querySelectorAll("button");
var audioElement;

for(var i=0;i<ButtonPressed.length;i++)
{
    ButtonPressed[i].addEventListener("click",function(){
        playInstrument(this.classList[0]);
    });
};

document.addEventListener("keydown",function(e){

    playInstrument(e.key);

});

function playInstrument(word){

   switch(word)
    {
        case 'w':
            audioElement = new Audio("./sounds/tom-1.mp3");
            audioElement.play();
            glow("w");
            break;
        case 'a':
            audioElement = new Audio("./sounds/tom-2.mp3");
            audioElement.play();
            glow("a");
            break;
        case 's':
            audioElement = new Audio("./sounds/tom-3.mp3");
            audioElement.play();
            glow("s");
            break;
        case 'd':
            audioElement = new Audio("./sounds/tom-4.mp3");
            audioElement.play();
            glow("d");
            break;
        case 'j':
            audioElement = new Audio("./sounds/crash.mp3");
            audioElement.play();
            glow("j");
            break;
        case 'k':
            audioElement = new Audio("./sounds/kick-bass.mp3");
            audioElement.play();
            glow("k");
            break;
        case 'l':
            audioElement = new Audio("./sounds/snare.mp3");
            audioElement.play();
            glow("l");
            break;

        default:
            console.log(word);
    }

};

function glow(word){

    let temp=document.querySelector("." + word);

    temp.classList.add("glowBorder");

    setTimeout(function()  {
    temp.classList.remove("glowBorder");
    }, 100);

};