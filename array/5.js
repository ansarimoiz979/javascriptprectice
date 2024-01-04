/*
is file me ham array ke middile me ya any specific index pr single element or multiple element remove krenge
*/
//case-1
//neeche wale example me array ke specific me new element add krne ka code he

let arr = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109 ]
console.log("1-> arr",arr);
console.log("1-> length of the array ", arr.length)


//case-1 remove only one member from array
//remove element to specific index in array
// uske liye hame splice() method ke first parameter pr index dena hoga or second Parameter pr 1(kyuki ham ek element remove krna chahte h)
//thired parameter pass krne ki need nhy h
// remove element from 2 index
arr.splice(2, 1);
console.log("\n 2-> arr",arr);

// remove element from 2 index
arr.splice(4, 0, 200);
console.log("\n 3-> arr",arr);

// remove element from 2 index
arr.splice(6, 0, 300);
console.log("\n 4-> arr",arr);

//case-2 remove two member from array

let arr1 = [ 11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]
console.log("1-> arr1",arr1);
console.log("1-> length of the array ", arr1.length)

//remove two element to specific index from array
// add element to 2 index
arr1.splice(1, 2);//TWO element remove krna he 1 index se 
console.log("\n 2-> arr1",arr1);

//remove two element to specific index from array
// add element to 2 index
arr1.splice(5, 2);//TWO element remove krna he 5 index se 
console.log("\n 3-> arr1",arr1);

//remove three element to specific index from array
// add element to 2 index
arr1.splice(7, 3);//3 element remove krna he 7 index se 
console.log("\n 4-> arr1",arr1);


//remove two element to specific index from array
// add element to 2 index
arr1.splice(1, 1);//1 element remove krna he 1 index se 
console.log("\n 5-> arr1",arr1);