# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-cxdhaaee?file=index.html)

# Solution code

## project 1

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