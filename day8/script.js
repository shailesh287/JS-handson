let str = "askdasmsxsldfldkfa";
console.log("Length of the String");
console.log(str.length);

//charAt
//If we want to find the characters of a string with the help of indexes we will use charAt()

let str1 = "askdasmsxsldfldkfa";
let res = str1.charAt(9);
console.log(`character at index 9 = ${res}`);

//indexof
//Space is also counted in our strings for indexes

let str2 = "askdasmsxsldfldkfa";
let res2 = str2.charAt("m");
console.log(` index of m is : ${res2}`);

//Split
//Split method is used to convert string to an Array , split method returns the new array, does not change the original array(" ")

let text = "ShaileshBind";
var res3 = text.split("");
console.log(`Slpit:
      text: ${text},  after using Split: ${res3}`);

//reverse
//join: it will convert an Array into String
let text2 = "ShaileshBind";
var res4 = text2.split("").reverse().join("");
console.log(`Reverse & Join:
      text: ${text2} , After using reverse and join : ${res4}`);

//Trim
//Trim is used to remove white spaces

let text3 = "      Shailesh        ";
var res5 = text3.trim();
console.log(`Trim:
   text =${text3} length =${text3.length} 
    after using trim : text=${res5} length =${res5.length}`);

//Slice:
//It is used to extract data , it will not modify the original

var str3 = ["hi", "hello", "shailesh", "how", "are", "you"];

const res6 = str3.slice(0, 3);
console.log("Slice:");
console.log(res6);

var str4 = "Shailesh,Prepbytes,elevation";
const sl = str4.slice(0, -4);
console.log(sl);

//Splice : Which is used for extraction and adding the elements and it will modify the original

var user = ["hi", "hello", "shailesh", "how", "are", "you"];
//            0      1          2         3      4      5

const res7 = user.splice(3, 5);
console.log("Splice:");
console.log(res7);

//concat

var t1 = "Shailesh";
var t2 = "Bind";
console.log("Concat:");
console.log(t1.concat(t2));

//replace

let r = "Welcome Elevation ";
const resl = r.replace("Elevetion ", "Prepbytes");
console.log(resl);
