const templateTask = {
	id : -1,
	description : "",
	completed : false
}

const taskManagement = {
	countID : 0,
	listTask : Array(),

	addTask(description, isCompleted = false){

		task = Object.create(templateTask);
		task.id = this.countID;
		task.description = description;
		task.completed = isCompleted;

		this.listTask.push(task);
		this.countID++;
		return task;
	},

	completeTask(taskId){
		let index = this.listTask.findIndex((ele) => ele.id == taskId);

		if(index == -1){
			console.log("Task not found.");
			return false;
		}

		return this.listTask[index].completed = true;
	},

	displayTasks(){
		console.log(`Display list tasks:`, this.listTask);
		return this.listTask;
	},

	displayCompletedTasks(){
		result = this.listTask.filter((ele) => ele.completed == true);
		console.log(`Display tasks completed: `, result);
		return result
	},

	displayPendingTasks(){
		result = this.listTask.filter((ele) => ele.completed == false);
		console.log(`Display pending tasks: `, result);
		return result;
	},

	filterTasks(condition, func){
		const newArray = [];
		for(let i = 0; i < this.listTask.length; i++) {
			if( func(String(condition).toLowerCase(), this.listTask[i]) ){
				newArray.push(this.listTask[i]);
			}
		}
		console.log(`Display filter tasks : `, newArray);
  		return newArray;
	}
}

function createTaskManager(){
	return Object.create(taskManagement);
}

function seach(str, task) {
	return String(task.id).toLowerCase().includes(str) || String(task.description).toLowerCase().includes(str) || String(task.completed).toLowerCase().includes(str);
}

manager = createTaskManager();

manager.addTask("Test");
manager.addTask("Test2", true);
manager.displayTasks();
manager.displayCompletedTasks();
manager.filterTasks("TEST", seach);

// console.log(manager);