// global / window  全局作用域
//function 函数作用域
//{} 块状作用域
// this 动态作用域

var carName = " Volvo";
// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}

function myFunction() {
     carName = "Volvo";
    // 此处可调用 carName 变量
}

function bar() {
  var testValue = 'inner';
}
console.log(testValue);   // 报错：ReferenceError: testValue is not defined


//如果想读取函数内的变量，必须借助 return 或者闭包。

function bar(value) {
  var testValue = 'inner';

  return testValue + value;
}

console.log(bar('fun'));    // "innerfun"


//这是借助 return 的方式，下面是闭包的方式：

function bar(value) {
  var testValue = 'inner';

  var rusult = testValue + value;

  function innser() {
     return rusult;
  };

  return innser();
}

console.log(bar('fun'));    // "innerfun"

function foo() {
  console.log(a); // 2  (不是 3!)
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar(); // "2"