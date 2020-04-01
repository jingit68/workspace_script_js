//es5 this always folow the object. 谁调用 this就是睡
let a_this  = {
	name : "jin",
	do_this : function(){
		console.log(this.name)
	}
}

a_this.do_this()



// es6 this only follow one level up top level is window. es6的this往上一层找。 最高层是window
class bb{
	 name = "jinpengwu"
	 b_this  = {
		name : "jin",
		do_this : () => {
			console.log(this.name, this)
		}
	}

}

b_b = new bb()
b_b.name = "vicky"
b_b.b_this.do_this()


// this.name no change
class cc{
	 name = "jinpengwu"
	 c_this  = {
		name : "jin",		
		do_this : function() {
		  let s = () => console.log(this.name, this)
		  return s
			
		}
	}

}

c_c = new cc()
c_c.name = "vicky"
console.log(c_c.c_this.name)
c_c.c_this.do_this()()


