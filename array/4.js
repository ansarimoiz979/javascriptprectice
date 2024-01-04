/*
is file me ham array ke middile me ya any specific index pr single element or multiple element add krenge
*/
//case-1
//neeche wale example me array ke specific me new element add krne ka code he

let arr = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
console.log("1-> arr",arr);
console.log("1-> length of the array ", arr.length)


//case-1 add only one new member
//add element to specific index in array
// uske liye hame splice() method ke first parameter pr index dena hoga or second Parameter pr 0 denge kyuki hame new member add krna he
// add element to 2 index
arr.splice(2, 0, 100);
console.log("\n 2-> arr",arr);

//add element to 4 index
arr.splice(4, 0, 200);
console.log("\n 3-> arr",arr);

//add element to 6 index
arr.splice(6, 0, 300);
console.log("\n 4-> arr",arr);

//case-2 add two new member new members to array

let arr1 = [ 11,12,13,14,15,16,17,18,19,20 ]
console.log("1-> arr1",arr1);
console.log("1-> length of the array ", arr1.length)

//add two element to specific index in array
// uske liye hame splice() method ke first parameter pr index dena hoga or second Parameter pr 0 denge kyuki hame new member add krna he
// add element to 2 index
arr1.splice(2, 0, 20,30);//20 or 30 ko array ke 2 index pr add krenge
console.log("\n 2-> arr1",arr1);

//add element to 4 index
arr1.splice(4, 0, 40,50);//40 or 50 ko array ke 4 index pr add krenge
console.log("\n 3-> arr1",arr1);

//add element to 6 index
arr1.splice(6, 0, 60,70);//60 or 70 ko array ke 6 index pr add krenge
console.log("\n 4-> arr1",arr1);

//add three element to 8 index
arr1.splice(8, 0, 66,77,88);//66,77,88 ko array ke 6 index pr add krenge
console.log("\n 5-> arr1",arr1);
