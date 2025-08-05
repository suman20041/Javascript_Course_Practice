// const tinderUser = new Object() //singleton object
const tinderUser = {}  //non singleton object

// const tinderUser.id = ""  //Here we not write const because we already declare tinderUser
tinderUser.id = "123abc"
tinderUser.name = "suman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Object inside another object-nested object
const regularUser = {
    email: "some@gmail.com",
    fullname:{  
        userfullname:{
            firstname: "suman",
            lastname: "panda"
        }
    }
}

// Access the nested object
// console.log(regularUser.fullname); //{  
                                               // userfullname:{
                                                      // firstname: "suman",
                                                       // lastname: "panda"
                                               // }
                                       // } This must object store in variable
// console.log(regularUser.fullname.userfullname.firstname);


//merge the object
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)  //returns the object so we store it in obj3.
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} it is a optional parameter, It don't  make any effect either it is present or absent. But if we give it is good. All values will be combine and compulsory this type of result will come.
const obj3 = {...obj1, ...obj2}  //merge multile object. 1st i spread all value and combine obj3.
// console.log(obj3);

const obj6 = Object.assign(obj1, obj2, obj4)
// console.log(obj6 === obj1);


// come value from database that in the form of array of object
const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]

users[1].email  // 1 means access the 1st value of the array which is object.
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//which object we need run this keys method
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //array inside another array[['id','123abc']]. 1st property(id) which is key and 2nd(123abc) which is value.Each key value make in array.

// //inside the object we do loop through. That the time of looping we get one value. Somtimes this value is note exist . If value is not exist then chances for crash. we check manually or we follow the below process

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // If this property is present return true and this property is absent return false. So 1st check that property is available or not before use it.




// Object de-structure
const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "suman"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

// const {courseInstructor: instructor} = course  //courseInstructor name convert to short name instructor
// console.log(instructor);  //call instructor . Whatever value is present courseInstructor same value will be execute instructor.


// JSON API in form of object
// {
//     "name":"suman",
//     "coursename": "js in hindi";
//     "price":"free"
// }


// API in the form of array
[
    {},
    {},
    {}
]




// Take response of randomuser me api then put it json formatter to understand the api
// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }


// Reactjs De-structure- When we see curley braces syntax then do de-structuring




// Reactjs de-structuring
const navbar = ({company}) => {

}

navbar(company = "suman")

//Array de-structing we can also do.