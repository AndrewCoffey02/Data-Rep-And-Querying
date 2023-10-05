//empty map
const myArray = [];

//addTask to add a string to map
const addTask = (task)=>{
    myArray.push(task);
    console.log("\nAdded a task!");
    console.log("List amount:"+myArray.length);

}

//list of tasks in array
const listAllTasks = ()=> {
    console.log("\n");
    myArray.forEach((item) => {
        console.log(item);
    })
}


//delete tasks
const deleteTasks = (task)=> {
    let x = myArray.indexOf(task);
    if(x > -1){
    myArray.splice(x, 1);
    console.log("Task "+task+" deleted from list!");
    }
    else {
        console.log("Task "+task+" not in list!");
    }
}

//output 
addTask("blue");
addTask("red");
listAllTasks();
deleteTasks("red");
deleteTasks(" green ");
