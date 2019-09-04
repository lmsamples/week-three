
document.querySelector("#mirror-text").addEventListener("keyup", function(){

console.log("you typed here")

const mirrorText = document.querySelector("#mirror-text").value

const rightMirror = document.querySelector("#right")
rightMirror.innerHTML = mirrorText;

const leftMirror = document.querySelector("#left")
leftMirror.innerHTML = mirrorText;
    })

