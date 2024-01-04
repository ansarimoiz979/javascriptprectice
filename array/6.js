/*
UPDATE
is file me ham array  ya any specific index pr single element or multiple element update krenge
*/
//case-1
//neeche wale example me array ke specific INDEX  ko update krenge

let arr = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109 ]
console.log("1-> arr",arr);
console.log("1-> length of the array ", arr.length)


//case-1 update one element of specific index
//pehle parameter me index jhase modify krna he
//second parameter me ham number of element modify krne he woh pass krenge
//third parameter me hame new element pass krna he
arr.splice(2, 1, 444);
console.log("\n 2-> arr",arr);

// update element at 4 index
arr.splice(4, 1, 666);
console.log("\n 3-> arr",arr);

// update element at 6 index
arr.splice(6, 1, 888);
console.log("\n 4-> arr",arr);

//case-2 update two nearby element in array
let arr1 = [ 11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]
console.log("1-> arr1",arr1);
console.log("1-> length of the array ", arr1.length)

// 1 index pr next do element update krne he
arr1.splice(1, 2, 999, 9999);
console.log("\n 2-> arr1",arr1);

// 5 index pr next do element update krne he
arr1.splice(5, 2, 900, 800);
console.log("\n 3-> arr1",arr1);



// last index pr previous 3 element update krne he
arr1.splice(-1, 3, 900, 800, 700);
console.log("\n 3-> arr1",arr1);
