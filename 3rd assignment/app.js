//  Answer No-01  //

// function print (abc) {
//     return function (def) {
//         console.log(abc + def)
//     }
// }

// let innerFunction = print(3);
// innerFunction(7);

//  Answer No-02  //

// function searchArray(arr, value) {
//   if (arr.length === 0) {
//       return false;
//   }
//   if (arr[0] === value) {
//       return true;
//   }
//   return searchArray(arr.slice(1), value);
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(searchArray(myArray, 1));
// searchArray(myArray, 1);


//  Answer No-03  //

// function addPara1(text){
//   let addPara2 = document.createElement("p");
//   let textNode = document.createTextNode(text);
//   addPara2.appendChild(textNode);
//   document.body.appendChild(addPara2);
// }
// addPara1("This is new paragraph.");
// console.log();

//  Answer No-04  //

// function addListItem(text) {
//     let ul = document.querySelector("ul");
//     let li = document.createElement("li");
//     li.textContent = text;
//     ul.appendChild(li);
//   }

//   addListItem("New list item");


//  Answer No-05  //

// function call(){
// let work = document.getElementById("my-para");
// work.innerHTML="<h1>Hello World</h1>";
// work.style.backgroundColor = "black";
// work.style.color = "white";
// }
// call();

//  Answer No-06  //

// function data(){
//     let studentdData = {
//                 name: prompt("Enter Your Name :"),
//                 rollno: +prompt("Enter Your roll number :"),
//                 className: prompt("Enter Your course Name :"),
//                 subject: prompt("Enter Your teacher Name :"),
//     };
//     students.push(studentdData);
//   let stringfiy = JSON.stringify(students);
//   localStorage.setItem("students",stringfiy);
//   }
//   let previous = localStorage.getItem("students");
//   let students = [];

//  Answer No-07  //

// function data(){
//     let studentdData = {
//                 name: prompt("Enter Your Name :"),
//                 rollno: +prompt("Enter Your roll number :"),
//                 className: prompt("Enter Your course Name :"),
//                 subject: prompt("Enter Your teacher Name :"),
//     };
//     students.push(studentdData);
//   console.log(students);
//   let stringfiy = JSON.stringify(students);
//   localStorage.setItem("students",stringfiy);
//   }
//   let previous = localStorage.getItem("students");
//   let students = previous ?  JSON.parse(previous) : [];

//  Answer No-08  //

// function saveObjectToLocalStorage(obj) {
//     Object.keys(obj).forEach(key => {
//         localStorage.setItem(key, JSON.stringify(obj[key]));
//     });

//     let newObj = {};
//     Object.keys(obj).forEach(key => {
//         newObj[key] = JSON.parse(localStorage.getItem(key));
//     });
//     return newObj;
// }

// let myObj = { name: 'Ahmed', age: 18, class: 'Java script', Gender: 'Male'};
// let savedObj = saveObjectToLocalStorage(myObj);
// console.log(savedObj);