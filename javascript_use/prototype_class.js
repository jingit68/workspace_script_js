
// es5 how to build class

Animal =  function(type){

    this.type = type
    // don't write function inside here. unless it is function you will no eidt.
}
Animal.prototype.eat = function(){
    console.log("I am eating...")
}


dog_t = new Animal('dog')
console.log(dog_t)
// to change prototype :

dog_t.constructor.prototype.eat = function(){
    console.log("i am changed for all the objects")
}

dog_t.eat()

// es 6 how to build class

class Animal_2 {
    constructor(type){
        this.type = type
    }
    eat(){
        console.log("i am eating class")
    }
}


cat_t = new Animal_2("Cat")
console.log(cat_t)


// if you want to change class prototype function it is the same like es5

cat_t.constructor.prototype.eat = ()=>{
    console.log("this is class function been changed for all...")
}

cat_t.eat()
// es5 and es6 build class it the same way all the function type and create class in classname.prototype.funcname = function(){}
//