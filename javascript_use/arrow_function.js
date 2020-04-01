let test1 = () =>{
	console.log("test1")
}

test1()


let test2 = (arg) =>{
	console.log("test2"+arg)

}

test2(" t1")


// => means return
let test3 = arg =>console.log("test3"+arg)

test3(" t11")

// if want to return object put into ()
let test4 = (arg1, arg2)=>(
		{
			x:arg1,
			y:arg2
		}
	)
console.log(test4("t111","t222"))


let test5 = (x,y=5,z) =>{
	return {
		a:x,
		b:y,
		c:z
	}
}

console.log(test5("haha",undefined,"hehehe"))

