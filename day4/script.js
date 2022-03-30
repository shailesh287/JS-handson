// //USING IF ELSE CONDITION
// const age=30;

// if(age<30)
// {
//     console.log("Adult");
// }
// else
// {
//     console.log("OLD");
// }

// // USING TERNARY OPERATOR

// console.log(age>30?"Adult":"OLD");

// // ELSE IF LADDER

// const ageofperson=28;

// if(ageofperson<15)
// {
//     console.log("Young");
// }

// else if(ageofperson>15&&ageofperson<30)
// {
//     console.log("Adult");
// }

// else{
//     console.log("OLD");
// }

// // SWITCH CASE

// let day = 3;
// let dayName;

// switch (day) {
//   case 0:
//     dayName = 'Monday';
//     break;

//   case 1:
//     dayName = 'Tuesday';
//     break;
//   case 2:
//     dayName = 'Wednesday';
//     break;
//   case 3:
//     dayName = 'Thursday';
//     break;
//   case 4:
//     dayName = 'Friday';
//     break;
//   case 5:
//     dayName = 'Saturday';
//     break;
//     case 6:
//         dayName = 'Sunday';
//         break;

//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName);

// //FOR LOOP TO PRINT 13 TABLE

// for(var i=1;i<11;i++)
// {
//     console.log("13","*",i,"=",13*i);
// }

// setTimeout(()=>
// {
//   console.log("hey");
// },1000)

// function p(name,age)
// {
//     this.name=name;
//     this.age=age;
// }

// const person= new p("sridhar",21);
// const person2=new p("madhav",26)

// console.log(person);
// console.log(person2);

// (()=>
// {
//   console.log("hello");
// })()

// function weight(...Weight)
// {
//   console.log(Weight);
// }

// weight(12,23,43,4,55,6)

// let arr=[1,2,3,4,5];
// let e=arr.forEach((x)=>console.log(x));
let array = [1, 2, 3, 4, 5];
array.splice(0, array.length);
console.log(array);
