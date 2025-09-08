# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-pd9z8uqj?file=index.html)

# Solution code

## Project 1 Solution

```javascript
console.log("suman")
const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  //Each button we add event listener
  button.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);  //which target this event will come
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    } 
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    } 
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    } 
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    } 
    // if(e.target.id === 'purple'){
    //   body.style.backgroundColor = e.target.id
    // } 
  })
});

```


## Project 2 Solution

```javascript
const form = document.querySelector('form')
//this usecase will give you empty value when page refresh
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  //The parseInt() function tries to extract a number from the beginning of a string.
  //If the string starts with digits, it reads those digits until it finds a non-digit character, then stops.
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  // results.innerHTML = `${height}`  //for check
  else if(weight === '' || weight < 0 || isNaN(weight))
  {
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${BMI}</span>`
    if(BMI < 18.6 || BMI < 0 ){
      results.innerHTML = `Under Weight ${BMI}`
    }else if(BMI>=18.6 || BMI<=24.9){
      results.innerHTML = `Normal Range ${BMI}`
    } else if(BMI>=24.9){
      results.innerHTML = `Over Weight ${BMI}`
    }
  }
})

```


## Project 3 Solution

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// The setInterval() method in JavaScript is used to repeatedly execute a function at a specified time interval (in milliseconds)
setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4 Solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')



let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()  //stop the automatic action happening like prevent form submit when page loads
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

//this method check user enter the valid value or not
function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if( guess < 1){
    alert("Please enter a number more than 1")
  } else if( guess > 100){
    alert("Please enter a number less than 100")
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

// this method used to print a message that value is equal or value is high or value is low
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`)
  }else if (guess > randomNumber) {
    displayMessage(`Number is too high`)
  }
}

//this method is used to clean value because enter next value, previous guess update as a array format, guess remaining also update
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},       `
  numGuess++
  remaining.innerHTML = `${(11 - numGuess) + 1}`
}

//this method direct intract with dom
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    newGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${(11 - numGuess) + 1}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```


## Project 5 Solution

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})

```


## Project 6 Solution

```javascript  
//generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for( let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId  = setInterval(changeBgColor, 1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function (){
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```