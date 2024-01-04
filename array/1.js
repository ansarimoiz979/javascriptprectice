//is file me ham array me member add krne ke tareke dekhenge
/*
is file me ham sirf numeric value add krenge array me
*/
let arr = [];
//print whole array
console.log(arr);
//output : []


//add new member to array
arr[0] = 10;
console.log(arr);
//output : 
//[ 10 ]

//array ka size print krwana
console.log("size of array is  [1 ] : " + arr.length);
//output : 
// size of array is  : 1

//array me ek or member add krna 1 index pr
arr[1] = 20;
console.log(arr);
//output : 
//[ 10, 20 ]

//array ka size print krwana
console.log("size of array is [2] : " + arr.length);
//output : 
// size of array is  : 1


// add many members to array
arr[2] = 0;
console.log("1->" , arr);
console.log("1 length->" + arr.length);

arr[3] = 0;
console.log("2->" , arr);
console.log("2 length->" + arr.length);

arr[4] = 0;
console.log("3->" , arr);
console.log("3 length->" + arr.length);

arr[5] = 0;
console.log("4->" , arr);
console.log("4 length->" + arr.length);

arr[6] = 0;
console.log("5->" , arr);
console.log("5 length->" + arr.length);




console.log("\n\n\n");
//---------------------------------------------------
//use of push() method with array
// push() method add krty he new member array ke last me or array ki length bdaty he jitne member add krte he
let arr1 = []
console.log("1->",arr1)
console.log("length 1->",arr1.length)

//add new member at last of array with push() method
arr1.push(200);
console.log("2->",arr1)
console.log("length 2->",arr1.length)


//add new member at last of array with push() method
arr1.push(300);
console.log("3->",arr1)
console.log("length 3->",arr1.length)


//add new member at last of array with push() method
arr1.push(400);
console.log("4->",arr1)
console.log("length 4->",arr1.length)


//add new member at last of array with push() method
arr1.push(500);
console.log("5->",arr1)
console.log("length 5->",arr1.length)



//add new member at last of array with push() method
arr1.push(600);
console.log("6->",arr1)
console.log("length 6->",arr1.length)



//add new member at last of array with push() method
arr1.push(700);
console.log("7->",arr1)
console.log("length 7->",arr1.length)






console.log("\n\n\n");
//---------------------------------------------------
//use of unshift() method with array
// unshift() method add krty he new member array ke last me or array ki length bdaty he jitne member add krte he
let arr2 = []
console.log("1->",arr2)
console.log("length 1->",arr2.length)


//add new member at start of array with unshift() method
arr2.unshift(11);
console.log("1->",arr2)
console.log("length 1->",arr2.length)

//add new member at start of array with unshift() method
arr2.unshift(12);
console.log("2->",arr2)
console.log("length 2->",arr2.length)

//add new member at start of array with unshift() method
arr2.unshift(13);
console.log("3->",arr2)
console.log("length 3->",arr2.length)


//add new member at start of array with unshift() method
arr2.unshift(14);
console.log("4->",arr2)
console.log("length 4->",arr2.length)
