const descripter = Object.getOwnPropertyDescriptor(Math, "PI");  //math module we want pi value

// console.log(descripter);   


// console.log(Math.PI);
// Math.PI = 5   
// console.log(Math.PI);   //Math.PI value can't be changed


// const mynewObject = Object.create(null)
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));  



//we can also change our own property but not in all place only limited place

Object.defineProperty(chai, 'name', {
    // writable: false,
    //enumerable: false, // when we write enumerable: false then stop to happen enumaration or iteration
    enumerable: true,  //when we write enumerable: true then start to happen enumaration or iteration
}) //we can change property by using definePropery method
console.log(Object.getOwnPropertyDescriptor(chai, "name"));  

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { //agar hai tho enumearte karege agar nehi hai tho hamara code nehi phatege
        console.log(`${key}: ${value}`);
    }
}

// use defineProperties method
const chai2 = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nhi bni");
    }
};

// Before changing descriptors
console.log("Before:", Object.getOwnPropertyDescriptor(chai2, "name"));

// Using defineProperties to modify multiple properties
Object.defineProperties(chai2, {
    name: {
        writable: false,     // cannot change name
        enumerable: true,    // can show in iteration
        configurable: true   // can redefine later
    },
    price: {
        writable: true,      // can change price
        enumerable: true,    // will show in iteration
        configurable: true
    },
    isAvailable: {
        writable: true,      
        enumerable: false,   // will NOT show in iteration
        configurable: true
    }
});

// After changing descriptors
console.log("After:", Object.getOwnPropertyDescriptor(chai2, "name"));
console.log("After:", Object.getOwnPropertyDescriptor(chai2, "price"));
console.log("After:", Object.getOwnPropertyDescriptor(chai2, "isAvailable"));

// Iterating to check enumerable properties
for (let key in chai2) {
    console.log(key, ":", chai2[key]);
}
