# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-cxdhaaee?file=index.html)

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