const playerImg = document.querySelector('.playerImg')
const computerImg = document.querySelector('.computerImg')
const resultOfBattle = document.querySelector('.resultOfBattle')
const playerPoints = document.querySelector('.playerPoints')
const computerPoints = document.querySelector('.computerPoints')
const rockChoice = document.querySelector('#rock')
const paperChoice = document.querySelector('#paper')
const scissorsChoice = document.querySelector('#scissors')


let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
const start = (e) => {
    
    choice = e.target.id
    chosedOption(choice)
    animation()
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
        playerImg.src = "/images/rock.png"
        playerChoice = 'rock'
    }

    if(paperChoice.id === choice) {
        playerImg.src = "/images/paper.png"
        playerChoice = 'paper'
    }

    if(scissorsChoice.id === choice) {
        playerImg.src = "/images/sic.png"
        playerChoice = 'scissors'
    }
    randomizeEnemyMove()
    showResult()
        },700)

}

const randomizeEnemyMove = () => {
    
    const options = [rock,paper,scissors]

    let result = (options[Math.floor(Math.random() * 10)%3])   
    
    if(result.id === rock.id) {
        computerImg.src = "/images/rock.png"
        computerChoice = 'rock'
    }
    if(result.id == paper.id) {
        computerImg.src = "/images/paper.png"
        computerChoice = 'paper'
    }
    if(result.id == scissors.id) {
        computerImg.src = "/images/sic.png"
        computerChoice = 'scissors'
    }

}

const showResult = () => {
    // resultOfBattle.innerHTML = ` Elo`
    

    if(playerChoice == computerChoice) {
        resultOfBattle.innerHTML = 'Draw'
    }
    if(playerChoice === 'rock' && computerChoice ==='paper' || playerChoice === 'paper' && computerChoice ==='scissors' || playerChoice === 'scissors' && computerChoice ==='rock') {
        computerScore++;
        resultOfBattle.innerHTML = 'Computer Win'
        computerPoints.innerHTML = `${computerScore}`
    }

    if(playerChoice === 'rock' && computerChoice ==='scissors' || playerChoice === 'paper' && computerChoice ==='rock' || playerChoice === 'scissors' && computerChoice ==='paper') {
        playerScore++;
        resultOfBattle.innerHTML = `Player Win`
        playerPoints.innerHTML = `${playerScore}`
    }
   
    
    
}




rockChoice.addEventListener("click",start)
paperChoice.addEventListener("click",start)
scissorsChoice.addEventListener("click",start)