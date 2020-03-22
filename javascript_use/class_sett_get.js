// get and set. make attrs not function.
// get and set can make logic in the attrs. but must return otherwise undefined

let _age = 4

class Animal_2 {
    constructor(type, age2){
        this.type = type
        this.age2 = age2
    }
    get age(){
        console.log(_age)
        return _age
    }
    set age(val){
        _age = val 

    }
    get agein(){
        console.log(this.age2)
        return this.age2
    }
    set agein(val){
        this.age2 = val 

    }


    eat(){
        console.log("i am eating class")
    }
}


cat_t = new Animal_2("Cat", 2)
console.log(cat_t)

console.log(cat_t.age)
cat_t.age = 88
console.log(cat_t.age)

console.log(cat_t.agein)
cat_t.agein = 99
console.log(cat_t.agein)