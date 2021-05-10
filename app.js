let game = () =>{
    let playerScore = 0;
    let computerScore = 0;
    

    let startGame = () =>{
        let playbtn = document.getElementById("btnplay")
        let intro = document.getElementById("intro1")
        let match = document.getElementById("match1")

        playbtn.addEventListener("click", ()=>{
            console.log("hello")
            intro.classList.add("fadeout");
            match.classList.add("fadein");
            
            // Math.floor((Math.random()*3))
        });

    }
// play the match 
    let playmatch = ()=>{

        let buttonsOpt = document.querySelectorAll(".butn button")
        let playerHand = document.querySelector(".player-img")
        let computerHand = document.querySelector(".computer-img")

        let hands = document.querySelectorAll(".img")


            hands.forEach(hands=>{
                hands.addEventListener("animationend",function(){
                   
                    this.style.animation = ""
                })
            })



        let computerOption = ["rock", "paper", "scissors"]
        buttonsOpt.forEach(buttonsOpt=>{
            buttonsOpt.addEventListener("click" , function(){

                let computerNum = Math.floor((Math.random()*3));
                let computerChoice = computerOption[computerNum]
                
              setTimeout(() => {
                    // compare function will call here 
                compare(this.textContent, computerChoice)

                // update images for both player and computer
                playerHand.src = `assets/${this.textContent}.png`
                computerHand.src = `assets/${computerChoice}.png`
              }, 2000);

                playerHand.style.animation = "shakeplayer 2s ease"
                computerHand.style.animation = "shakecomputer 2s ease"
            })

        })

    }

    let updateScore = ()=>{
        let playS = document.getElementById("playerS")
        let ComS = document.getElementById("computerS")
        playS.textContent = playerScore
        ComS.textContent = computerScore


    }
    // compare 

    let compare = (playerChoice,computerChoice) =>{
        let winner = document.querySelector(".h1-text")
        // check for tie 
        if(playerChoice === computerChoice){
            winner.textContent = "This is a tie"
            return
        }
        // check for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins"
                playerScore++
                updateScore()
                console.log(playerScore+computerScore)
                gameOver()
                return
            }else{
                winner.textContent = "Computer Wins"
                computerScore++
                updateScore()
                console.log(playerScore+computerScore)
                gameOver()
                return
            }
        }
// ceck for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins"
                computerScore++
                updateScore()
                console.log(playerScore+computerScore)
                gameOver()
                return
            }else{
                winner.textContent = "Player Wins"
                playerScore++
                updateScore()
                console.log(playerScore+computerScore)
                gameOver()
                return
            }
        }
// chcek for scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins"
                computerScore++
                updateScore()
                console.log(playerScore+computerScore)
                gameOver()
                return
            }else{
                winner.textContent = "Player Wins"
                playerScore++
                updateScore()
                console.log(playerScore+computerScore)
                gameOver()
                return
            }
        }

    }
    let gameOver = ()=>{
        if(playerScore+computerScore == 10){
            let div = document.getElementById("gameov")
            div.classList.add("gameOver");
            div.removeAttribute('id')
            let sec = document.getElementById("section")
            sec.style.display ="none"
            let winOp = document.getElementById("winOp")
            if(playerScore>computerScore){
                winOp.textContent= "You Win...! Hurrey..!"
            }else{
                winOp.textContent= "You Lost.!Better luck Next time."
            }
        }
    }

    
   
    startGame()
    playmatch()
}

game()
