// Immediately Invoked Function Expression

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //add the semicolon explicitely

( (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('suman')