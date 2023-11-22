


//                             array rendom

let arr = [
    "fine",
    "html",
    "css",
    "php",
    "python",
    "hello",
    "programing",
    "good",
    "great",
    "linkedin",
    "Muslim",
    "error",
    "github",
    "bootsrap",
    "beautiful",
    "Hello word",
    "English",
    "Arabic",
    "devlopment",
    "coding"
]
//                               levels
const lvls = {
    "Normal":6,
}

//                           default level

let defaultLevelName = "Normal" // shange level from here
let defaultLevelSecond = lvls[defaultLevelName]

let restart = document.getElementById("restart")
let startBtn = document.querySelector(".start")
let lvlNameSpan = document.querySelector(".message .lvl")
let secondsSpan = document.querySelector(".message .seconds")
let theWord = document.querySelector(".theword")
let upcomingWords = document.querySelector(".upcoming-words")
let input = document.querySelector(".input")
let timeLeftSpan = document.querySelector(".time span")
let scoreGot = document.querySelector(".score .got")
let scoreTotal = document.querySelector(".score .total")
let finishMessage = document.querySelector(".finish")

// setting level name + seconds + score

secondsSpan.innerHTML = defaultLevelSecond
timeLeftSpan.innerHTML = defaultLevelSecond
scoreTotal.innerHTML = arr.length

// disable past event

input.onpaste = function(){
    return false
}

// Start game 

startBtn.onclick = function(){
    this.remove()
    input.focus()

    //  generat  word function
    genWord()
}

restart.onclick = ()=>{
    location.reload()
}

function genWord() {
    //  random word from arr
    let randomWord = arr[Math.floor(Math.random() * arr.length)]
    
    // get word index
    let wordIndex = arr.indexOf(randomWord)
    
    // remove word from arr
    arr.splice(wordIndex, 1)
    
    // show the random word
    theWord.innerHTML = randomWord
    
    // empty upcoming Words
    upcomingWords.innerHTML = ""

    // generate word
    for (let i = 0 ; i < arr.length ; i++ ){

        // creat div elements
        let div = document.createElement("div")
        let txt = document.createTextNode(arr[i])
        div.appendChild(txt);

        upcomingWords.appendChild(div)
    }

    //Call start play function
    startplay()
}

function startplay() {
    timeLeftSpan.innerHTML = defaultLevelSecond
    let start  = setInterval(()=>{
        timeLeftSpan.innerHTML--
        if (timeLeftSpan.innerHTML === "0") {
            // stop time
            clearInterval(start)
            // compare words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                // empty input 
                input.value = ''
                // increase score
                scoreGot.innerHTML++
                if (arr.length > 0) {
                    // call generat word function
                    genWord()
                }
                else{
                    let span =document.createElement("span")
                    span.className = "good"
                    spantxt = document.createTextNode("Congratulation")
                    span.appendChild(spantxt)
                    finishMessage.append(span)
                    upcomingWords.remove()
                    restart.style.display = "block"

                }
            }else{
                let span = document.createElement("span")
                span.className = 'bad'
                let spantxt = document.createTextNode("Game over")
                span.appendChild(spantxt)
                finishMessage.appendChild(span)
                restart.style.display = "block"
            }
        }
    },1000)
}

// console.log(restart);


























