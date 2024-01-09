//filter method
/*

filter method ka use array me se members ko filter krkr new array me nikalne ke liye hote he
iske liye hme condition likni pdty he
*/
//case -1 , filter value which is greater then 3
let arr1 =[10, 20, 30, 40, 50, 60,]
let filterArray1 = []
console.log("before filter array arr1 ", arr1)
console.log("before filter array filterArray1 ", filterArray1)

filterArray1 = arr1.filter( 
    //callback function start as parameter
    (num) =>{
       return num > 30;// condition with return keyword
}
//callback function end
)

console.log("after filter array arr1 ", arr1)
console.log("after filter array filterArray1 ", filterArray1)
console.log("\n\n");



//case -1 , filter value which is less then 30
let arr2 =[10, 20, 30, 40, 50, 60,]
let filterArray2 = []
console.log("before filter array arr2 ", arr2)
console.log("before filter array filterArray2 ", filterArray2)

filterArray2 = arr2.filter( 
    //callback function start as parameter
    (element) =>{
       return element < 30;// condition with return keyword
}
//callback function end
)

console.log("after filter array arr2 ", arr2)
console.log("after filter array filterArray2 ", filterArray2)
console.log("\n\n");



//case -3 , filter value which is even number
let arr3 =[1,2,3,4,5,6,7,8,9,10]
let filterArray3 = []
console.log("before filter array arr3 ", arr3)
console.log("before filter array filterArray3 ", filterArray3)

filterArray3 = arr3.filter( 
    //callback function start as parameter
    (element) =>{
       return (element%2) == 0;// condition with return keyword
}
//callback function end
)

console.log("after filter array arr3 ", arr3)
console.log("after filter array filterArray3 ", filterArray3)
console.log("\n\n");


//case -4 , filter array member which belongs to ujjain city
let arr4 =[{name : "tom", city : "ujjain"},
{name : "vinston", city : "indore"},
{name : "john", city : "ujjain"},
{name : "jenny", city : "dewas"},
{name : "dom", city : "ujjain"}
]
let filterArray4 = []
console.log("before filter array arr4 ", arr4)
console.log("before filter array filterArray4 ", filterArray4)

filterArray4 = arr4.filter( 
    //callback function start as parameter
    (user) =>{
       return user.city == "ujjain";// condition with return keyword
}
//callback function end
)

console.log("after filter array arr4 ", arr4)
console.log("after filter array filterArray4 ", filterArray4)
console.log("\n\n");



//case -5 , filter array member which age is less or equal to 30
let arr5 =[{name : "tom", city : "ujjain",age : 20},
{name : "vinston", city : "indore",age : 25},
{name : "john", city : "ujjain",age : 30},
{name : "jenny", city : "dewas",age : 35},
{name : "dom", city : "ujjain",age : 36}
]
let filterArray5 = []
console.log("before filter array arr5 ", arr5)
console.log("before filter array filterArray5 ", filterArray5)

filterArray5 = arr5.filter( 
    //callback function start as parameter
    (user) =>{
       return user.age <= 30 ;// condition with return keyword
}
//callback function end
)

console.log("after filter array arr5 ", arr5)
console.log("after filter array filterArray5 ", filterArray5)
console.log("\n\n");

