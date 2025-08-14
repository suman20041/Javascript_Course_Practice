const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc + currval
// }, 3)


// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 12999
    }
]

//inside the shoppingcard all the price we need to add here we use reduce method
//item denote each object inside array
//in advance concept we varify item price is number or not
const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);
