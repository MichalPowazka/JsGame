const playerImg = document.querySelector('.playerImg')
const computerImg = document.querySelector('.computerImg')
const resultOfBattle = document.querySelector('.resultOfBattle')
const playerPoints = document.querySelector('.playerPoints')
const computerPoints = document.querySelector('.computerPoints')
const rockChoice = document.querySelector('#rock')
const paperChoice = document.querySelector('#paper')
const scissorsChoice = document.querySelector('#scissors')
const btn = document.querySelector('button') 

const options = [rock,paper,scissors]
let result = (options[Math.floor(Math.random() * 10)%3])

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

    randomizeEnemyMove()
    setTimeout(()=>{
    if(rockChoice.id === choice) {
        playerImg.src = "/images/rock.png"
    }

    if(paperChoice.id === choice) {
        playerImg.src = "/images/paper.png"
    }

    if(scissorsChoice.id === choice) {
        playerImg.src = "/images/sic.png"
    }

    
        },700)
    }

const randomizeEnemyMove = () => {
    
    
    if(result.id === rock.id) {
        computerImg.src = "/images/rock.png"
    }
    if(result.id == paper.id) {
        computerImg.src = "/images/paper.png"
    }
    if(result.id == scissors.id) {
        computerImg.src = "/images/sic.png"
    }

}

const testing = () => {
    
}



rockChoice.addEventListener("click",start)
paperChoice.addEventListener("click",start)
scissorsChoice.addEventListener("click",start)