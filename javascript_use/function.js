

//es5 function

function f (x,y,z){
   if(y === undefined){
       y = 7
   }
   if(z === undefined){
       z = 48
   }
   return x+y+z
} 


console.log(f(15))


//es6 function

function f_e6(x,y=15,z=28){
    return x+y+z
}

console.log(f_e6(3,undefined,17))


function f_e6_2(x, y=16, z=x+y){
    return x+z
}

//console.log(f_e6_2(4))
console.log(f_e6_2(4,undefined,6))


//arguments length 

function test_arguments(a, b=1, c=2){
    console.log(arguments.length) // this is show the arguments from outside
    console.log(test_arguments.length) // this is show the agruments already there

    return 2
}

test_arguments(1,2,3)



function test_arguments2(a, b=1, c=2){
    let num = 0
    // get input value 1
    for (a in arguments){
        console.log(arguments[a])
    }
    //get input value 2 with array
    console.log(Array.from(arguments))
    Array.from(arguments).forEach(function(i){
        console.log(i)
        num += i*1
    })

    // get input value 3 
    Array.prototype.forEach.call(arguments, function(i){
        console.log(i)
    })

    return num
}

console.log(test_arguments2(1,2,3))