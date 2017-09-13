class Student {
	constructor(name, age, id){
		this.name = name;
		this.age = age;
		this.id = id;
	}

	getStudentName() {
		return this.name;
	}

	getStudentAge() {
		return this.age;
	}

	getStudentId() { 
		return this.id;
	}

	//@Override

	toString(){
		console.log("Your information :\n" + 
					"\tName : " + this.name +
					"\n\tAge : " + this.age +
					"\n\tId : " + this.id);
	}
}

var  stu = new Student("Duong Tan", 22, 13020370);

stu.toString();