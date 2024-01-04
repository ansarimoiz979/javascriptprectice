//ghumna->travel krna array ke start se end tak-> TRAVERSE KRNA ARRAY PR -> LOOP OVER ARRAY
/*
There are following ways to traverse over array
1-> for loop with index
2-> while loop with index
3-> for of loop without index
3-> forEach() method with callback function
4-> map() method with callback function
*/

//way-1 for loop
let arr = [ 1,2,3,4,5,6,7,8,9 ];
for(let index = 0; index<arr.length; index++)
{
    console.log("value at index "+ index + " is : " + arr[index])
}

//way-2 while loop
let arr1 = [ 11,12,13,14,15,16,17,18,19 ]
let i = 0;
while( i<arr1.length)
{
    console.log("value at index "+ i + " is : " + arr1[i]);
    i++;
}


//way-3 for of loop [ is loop me index ka variable nhy bnana pdta]
let arr2 = [ 21,22,23,24,25,26,27,28,29 ]
for(let element of arr2)
{
    console.log("value at index "+ i + " is : " + element);
}
//but if want index in forof loop then 
let arr3 = [ 31,32,33,34,35,36,37,38,39 ]
for (const [index, element] of arr3.entries()) {
  console.log(`Index: ${index}, Value: ${element}`);
}


//way-4 forEach() method with callback function
let arr4 = [ 41,42,43,44,45,46,47,48,49 ]
arr4.forEach((element)=>{
    console.log("value is : "+ element)
})
//way-4 forEach() method with callback function and index
let arr5 = [ 51,52,53,54,55,56,57,58,59 ]
arr5.forEach((element, index)=>{
    console.log("value is : "+ element + " at index : "+ index)
})


//way-5 map() method with callback function [ map method array ke harek element ko modify krne ke liye use hoty he ]
let arr6 = [ 61,62,63,64,65,66,67,68,69 ]
arr6.map((element)=>{
    console.log("value is : "+ element)
})


//way-6 map() method with callback function [ map method array ke harek element ko modify krne ke liye use hoty he ] with index
let arr7 = [ 71,72,73,74,75,76,77,78,79 ]
arr7.map((value, i)=>{
    console.log("value is : "+ value + " at index : " + i)
})