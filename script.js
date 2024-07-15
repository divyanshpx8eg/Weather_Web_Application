

//For New Game Button....
let newGame=document.querySelector(".newgame");

newGame.addEventListener("click",()=>{
    alert("New Game is Starting");
    location.reload();
})

////////////////////////////////////////////////////////////////////////////////////////
//Random Variable 
function getRandomValue() {
    return ( Math.floor(Math.random() * 3)); // Generates a random integer between 0 and 2
}

////////////////////////////////////////////////////////////////////////////////////////
//at 0 index means rock will loses to 1 means paper.....and same goes on
let arr=[1,2,0];

let options=document.querySelectorAll(".icons img");
let myScore=document.querySelector("#yourscore h1");
let botScore=document.querySelector("#pcscore h1");
let total=document.querySelector("#totalscore h1");
let botImage=document.querySelector("#choice img");
let result=document.querySelector(".result");
let resultText=document.querySelector(".result h2");

options.forEach((option)=>{
    option.addEventListener("click", ()=>{
        
        botImage.style.visibility="visible";
        let bot=getRandomValue();
        if(bot===0){
            botImage.src="images/rock.png";
            
        }
        else if(bot===1){
            botImage.src="images/paper.png";
        }
        else {
            botImage.src="images/scissor.png";
        }
        console.log(bot);
        let myoption =parseInt(option.alt,10);
        result.style.visibility="visible";
        if(bot===myoption) {
            console.log("Draw");
            result.style.backgroundColor="#000";
            resultText.style.color="rgb(237, 237, 237)";
            resultText.innerText="Draw";
            
        }
        else if(arr[myoption]===bot) {
            console.log("Bot wins");

            botScore.textContent = `${parseInt(botScore.textContent, 10)+1}`;
            total.textContent = `${parseInt(total.textContent, 10)+1}`;

            result.style.backgroundColor="#f74b4b";
            resultText.style.color="#000";
            resultText.innerText="Lose";
        }
        else {
            console.log("You won");
            myScore.textContent=`${parseInt(myScore.textContent,10)+1}`;
            total.textContent = `${parseInt(total.textContent, 10)+1}`;

            result.style.backgroundColor="#5faf94";
            resultText.style.color="#000";
            resultText.innerText="Won";
        }
        
        
        
    })
})