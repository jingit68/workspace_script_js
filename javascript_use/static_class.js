
// static class only showing in class not out of class
//es5 static class



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


dog_t = new Animal('dog')
console.log(dog_t)
dog_t.eat()



//es6 static class

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


cat_t = new Animal_2("Cat")
console.log(cat_t)

cat_t.eat()
// es5 and es6 build class it the same way all the function type and create class in classname.prototype.funcname = function(){}
//