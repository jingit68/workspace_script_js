 // these are some for loop in javascript

// 4 main things for array 
// 1 for loop a array
// 2 change arrylike to array 
//  - 2.1 arraylike must have index and length like {a:3,length:1}
// 3 generate the array
// 4 find array

// let's talk about Array frist 

test = [1,2,3,4,5]

// for ... of the  (try to no using)

for (var i = 0; i<test.length; i++){
  console.log(test[i])
}


// forEach (try using this one for all loop)
// forEach only can return, can not using break, continue

test.forEach((i)=>{
  console.log(i)
})

//every this is only show frist elements if want to loop using return true
//means return true is continue 
//return false is break

test.every(i=>{
  if(i == 3){
    return false
  }
  else{
    console.log(i)
    return true
  }
  
})

// for .. in ...
// for in design for ojects with attrs.. so use for objects
// no noramll array loop don't need to using for in

for (let a in test){
  console.log(a+" --s "+test[a])
}

// for of 
// loop for iterable
// noramlly we using

let price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}

for (let a in price)
{
  console.log(a+"--"+price[a])
  for (let b of price[a]){
    console.log( b)
  }
}

for (let a of test){
  console.log(a)
}

// change arry like array

// // t[!TIP]
// 伪数组具备两个特征，1. 按索引方式储存数据 2. 具有length属性；如：
// let arrLike = {
// 0: ‘a’,
// 1: ‘b’,
// 2: ‘c’,
// length: 3
// }


// 1. Array map
// array map =  something.map something putin (function(somethings))
//  


let numbers = [4, 9, 16, 25]
//tt = numbers.map(myFunction)
tt = numbers.map(myFunction_args)
console.log(tt)

function myFunction() {
  return 10;
}

function myFunction_args(num){
  return num * 10
}

var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}

new_p = persons.map(getFullName)

console.log(new_p)


// 2 Array.prototype.from()

test_a_f = Array.from("abdcdef134s")
console.log(test_a_f)
test_a_f = Array.from(test,()=>{return 2})
console.log(test_a_f)
test_a_f = Array.from({length:7},()=>{return 2})
console.log(test_a_f)

//Array(6) is object to biuld  6 empaty array
let arr = Array(6).join(" ").split(" ").map(()=>1)
console.log(arr)

// Array.prototype.of()
// Array and Array of different is  Array(7) build 7 ["","","","","","",""] but Array.of(7) only bulid one array [7]

//Array.prototype.fill()
let arraytest = Array(5)
let arraytest2 = [1,2,3,4,5,6]
let newarray = arraytest.fill(8)
let newarray2 = arraytest2.fill(8)
//arr.fill(value[, start[, end]])
let newarray3 = arraytest2.fill(9,1,4)
console.log(newarray)
console.log(newarray2)
console.log(newarray3)


// 4. find

// for find there are 2 function to do 

// 1. filter. filter run throught all the array filter the avaiable value

// get all the 9
console.log(newarray3.filter(item => item === 9))

// 2 find and findIndext , find find value findIndex find index
console.log(newarray3.find(item => item === 9)) //value
console.log(newarray3.findIndex(item => item === 9)) //index

