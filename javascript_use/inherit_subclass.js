
// subclass and inhert in es5
Animal =  function(type){

    this.type = type
}
Animal.prototype.eat = function(){
    Animal.run()
    console.log("I am eating...")

}
//create static class
Animal.run = function(){
    console.log("runing....")
}

//create inhret class

Dog = function(){
    Animal.call(this,'dog') // like super running parent constructor
    this.run = function(){
        console.log("I am runing like dog")
    }
}
Dog.prototype = Animal.prototype// link to Animal prototype

let dogg = new Dog()
dogg.run()
dogg.eat()






//subclass and inhert in es6

class Animal_2 {
    constructor(type){
        this.type = type
    }
    eat(){
        Animal_2.run() // run static using class name to get run()
        this.run2() // run normal funtion using this to get run2()
        console.log("i am eating class")
    }
    static run(){
        console.log("I am running....")
    }
    run2(){
        console.log("i am running.. but i am not static")
    }
}

//inherit class to inherit Animal_2
class Dog2 extends Animal_2{
    constructor(){
        super('dog')// means Animal_2 constrator runing.
        //this.dog_type = "aaa"        
    }
}


Dog2 = new Dog2()
console.log(Dog2)

Dog2.eat()
//console.log(Dog2.dog_type)
