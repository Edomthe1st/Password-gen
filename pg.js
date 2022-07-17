const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const span1 = document.getElementById("span-1")
const span2 = document.getElementById("span-2")

function btn(){
    span1.textContent = ""
    span2.textContent = ""
    for(i=0; i< 15; i++){
        const randomIndex1 = Math.floor(Math.random()*characters.length)
        const randomIndex2 = Math.floor(Math.random()*characters.length)
        span1.textContent += characters[randomIndex1]
        span2.textContent += characters[randomIndex2]    
    }
}