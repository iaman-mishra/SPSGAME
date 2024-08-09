let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscore=document.querySelector("#uscore");
let cscore=document.querySelector("#cscore");

const compChoice=()=>{
    let choices=["rock","paper","scissor"];
    let randomChoice=choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

const draw=()=>{
    msg.textContent="It's a Tie! Try Again";
    msg.style.backgroundColor = "";
    
}

const showWinner = (userWin) => {
    if (userWin === true) {
      msg.textContent = "You Win!";
      msg.style.backgroundColor = "green"; // Add this line
      uscore.textContent = parseInt(uscore.textContent) + 1;
    } else {
      msg.textContent = "Computer Wins!";
      msg.style.backgroundColor = "red"; // Add this line
      cscore.textContent = parseInt(cscore.textContent) + 1;
    }
  }

const playGame=(userChoice)=>{
    let computerChoice=compChoice();
    console.log(userChoice);
    console.log(computerChoice);

    if(userChoice===computerChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor" ? false : true;
        }
        else{
            userWin=computerChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach(
    (choice)=>{
        choice.addEventListener("click",()=>{
            const userChoice=choice.id;
            playGame(userChoice);

        })
    }
)
