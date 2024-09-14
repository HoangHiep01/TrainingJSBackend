function addStudent(id, name, age) {
	
	// Nếu id đã tồn tại.
	if(students.some((ele) => ele.id == id)){
		console.log("Id already exists.");
		return -1;
	}

	// Nếu id chưa tồn tại thì thêm sinh viên.
	let student = {};
	student.id = id;
	student.name = name;
	student.age = age;
	student.grade = Array();
	students.push(student);
	return students.length;
}


function removeStudent(id) {

	let index = students.findIndex((ele) => ele.id == id);

	if(index == -1){
		console.log("Id not found.");
		return -1;
	}

	students.splice(index,1);
	console.log("Delete succeseful.");
	return students.length;
	
	
}

function addGrade(id, grade) {

	let index = students.findIndex((ele) => ele.id == id);
	
	if(index == -1){
		console.log("Id not found.");
		return -1;
	}


	switch(typeof(grade)){
		case 'number':
			students[index].grade.push(grade);
			break;
		case 'object':
			if(Array.isArray(grade)){
				students[index].grade = students[index].grade.concat(grade);
			}
			break;
		case 'string':
			if(typeof(grade*1) == 'number' && !Number.isNaN(grade*1)){
				students[index].grade.push(grade*1);
			}
			break
		default:
			console.log("Cannot determine value type.");
			return -1;
	}
	return students[index].grade.length;
}

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

function getAverageGrade(id) {
	
	let index = students.findIndex((ele) => ele.id == id);
	
	if(index == -1){
		console.log("Id not found.");
		return -1;
	}
	let result = 0;
	if(students[index].grade.length == 0){
		
		console.log("Array's length is 0.");
		result = 0;
	}else{

		result = average(students[index].grade);
	}

	console.log("Average grade: ", result);
	return result;
}

function getTopStudent() {
	let student = {}
	let highestAvgGrade = 0;
	for(let s of students){
		let avgGrade = average(s.grade);
		if(highestAvgGrade < avgGrade){
			highestAvgGrade = avgGrade;
			student = s;
		}
	}
	student.avgGrade = highestAvgGrade;
	return student;
}


var students = Array();


console.log(students);

addStudent("1", "Joh",8);
console.log(students);

addStudent("2", "Julie",8);
console.log(students);

removeStudent("1");
console.log(students);

addGrade("2", 5);
console.log(students);

addGrade("2", [6,9]);
console.log(students);

addGrade("2", '10');
console.log(students);

addGrade("2", "abc");
console.log(students);

getAverageGrade(2);

console.log("Top student: ");
console.log(getTopStudent());




