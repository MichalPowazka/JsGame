const playerImg = document.querySelector('.playerImg')
const computerImg = document.querySelector('.computerImg')
const resultOfBattle = document.querySelector('.resultOfBattle')
const playerPoints = document.querySelector('.playerPoints')
const computerPoints = document.querySelector('.computerPoints')
const rockChoice = document.querySelector('#rock')
const paperChoice = document.querySelector('#paper')
const scissorsChoice = document.querySelector('#scissors')
const allBtn = document.querySelectorAll('button')


let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const start = (e) => {
    
    choice = e.target.id
    chosedOption(choice)
    animation()
    allBtn.forEach( element => {
        element.disabled = 'true'
    })
}

const animation = () => {
    playerImg.classList.add('shakeAnimation')
    computerImg.classList.add('shakeAnimation')

    setTimeout(()=>{
    playerImg.classList.remove('shakeAnimation')
    computerImg.classList.remove('shakeAnimation')
    },1000);

    
}

const chosedOption = (choice) => {

    
    setTimeout(()=>{
    if(rockChoice.id === choice) {
        playerImg.src = "../images/rock.png";
        playerChoice = 'rock'
    }

    if(paperChoice.id === choice) {
        playerImg.src = "./images/paper.png"
        playerChoice = 'paper'
    }

    if(scissorsChoice.id === choice) {
        playerImg.src = "./images/sic.png"
        playerChoice = 'scissors'
    }
    randomizeEnemyMove()
    showResult()
    
        },1000)
    

}

const randomizeEnemyMove = () => {
    
    const options = [rock,paper,scissors]

    let result = (options[Math.floor(Math.random() * 10)%3])   
    
    if(result.id === rock.id) {
        computerImg.src = "./images/rock.png"
        computerChoice = 'rock'
    }
    if(result.id == paper.id) {
        computerImg.src = "./images/paper.png"
        computerChoice = 'paper'
    }
    if(result.id == scissors.id) {
        computerImg.src = "./images/sic.png"
        computerChoice = 'scissors'
    }

}

const showResult = () => {
    
    

    if(playerChoice == computerChoice) {
        resultOfBattle.style.color = "white"
        resultOfBattle.innerHTML = 'Draw'
    }
    if(playerChoice === 'rock' && computerChoice ==='paper' || playerChoice === 'paper' && computerChoice ==='scissors' || playerChoice === 'scissors' && computerChoice ==='rock') {
        computerScore++;
        resultOfBattle.style.color = "tomato"
        resultOfBattle.innerHTML = 'Computer Win'
        computerPoints.innerHTML = `${computerScore}`
        computer.classList.toggle("changes")
        setTimeout(()=> {
            computer.classList.toggle("changes")    
        },1000)
        
    }

    if(playerChoice === 'rock' && computerChoice ==='scissors' || playerChoice === 'paper' && computerChoice ==='rock' || playerChoice === 'scissors' && computerChoice ==='paper') {
        playerScore++;
        resultOfBattle.style.color = "lime"
        resultOfBattle.innerHTML = `Player Win`
        playerPoints.innerHTML = `${playerScore}`
        playerPoints.classList.toggle("changes")
        setTimeout(()=> {
            playerPoints.classList.toggle("changes")
        },1000)
        
    }

    allBtn.forEach( element => {
        element.disabled = false;
    })
   
    
    
}


rockChoice.addEventListener("click",start)
paperChoice.addEventListener("click",start)
scissorsChoice.addEventListener("click",start)