// const coding = ["js", "ruby", "java", "python", "cpp"]

//store one variable
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);  //foreach loop always return value undefined



// sometimes we want to operation in each values , sometimes i want to return values or sometimes i want to check values conditionally.... in this case the above code is not working

//implicit return
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)   //When we don't use scope then do not need to write return keyword
// console.log(newNums);

//Explicit return
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => {  //when we open scope then must have to use return keyword
//     return num > 4
// })
// console.log(newNums);


//Use of filter method we don't want to return values... Only use of foreach method we want to return values... Then follow below code
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//These type of values come from database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //inside array each object will be come and this objects we called bk.
  // const userBooks = books.filter((bk) => bk.genre === 'History')

  // userBooks = books.filter((bk) => {
  //   return bk.publish >= 1995 
  // })

  userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
  })

  console.log(userBooks);