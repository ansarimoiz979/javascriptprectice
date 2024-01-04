/*
abtak hmne array ke start or end me new member add or remove kiye he 

ab ham array ke middile me new member add or remove krenge 
ham is file me single member add or remove krenge
next file me multiple member add or delete krenge

splice() method ka use hoga

splice method me teen parameter hote he
1-> start : index jha se hame value insert krna start krni he
2-> deletecount :  jitne element htane/replace krne he
3-> new elements : elements saprated by comme 

splice(startindex)
splice(startindex, deletecount )
splice(startindex, deletecount, item1)
splice(startindex, deletecount, item1, item2)
splice(startindex, deletecount, item1, item2, item3, ----- , item-N )

*/
//case-1
//neeche wale example me array ke start me new element add krne ka code he
//yeh code unshift() method ki trh kam krega
let arr = []
console.log("1-> arr",arr);
console.log("1-> length of the array ", arr.length)

arr.splice(0, 0, 100);
console.log("\n2-> arr",arr);
console.log("2-> length of the array ", arr.length)


arr.splice(0, 0, 200);
console.log("\n3-> arr",arr);
console.log("3-> length of the array ", arr.length)



arr.splice(0, 0, 300);
console.log("\n4-> arr",arr);
console.log("4-> length of the array ", arr.length)



arr.splice(0, 0, 400);
console.log("\n5-> arr",arr);
console.log("5-> length of the array ", arr.length)



arr.splice(0, 0, 500);
console.log("\n6-> arr",arr);
console.log("6-> length of the array ", arr.length)


//case-2
//neeche wale example me array ke end me new element add krne ka code he
/*
last me element add krne ke liye negative number dena hota he
yeh tareeka pop() method ki trh kam krenga
*/
let arr1 = []
console.log("1-> arr",arr1);
console.log("1-> length of the array ", arr1.length)

arr1.splice(-1, 0, 100);
console.log("\n2-> arr",arr1);
console.log("2-> length of the array ", arr1.length)


arr1.splice(-1, 0, 200);
console.log("\n3-> arr",arr1);
console.log("3-> length of the array ", arr1.length)



arr1.splice(-1, 0, 300);
console.log("\n4-> arr",arr1);
console.log("4-> length of the array ", arr1.length)



arr1.splice(-1, 0, 400);
console.log("\n5-> arr",arr1);
console.log("5-> length of the array ", arr1.length)



arr1.splice(-1, 0, 500);
console.log("\n6-> arr",arr1);
console.log("6-> length of the array ", arr1.length)
