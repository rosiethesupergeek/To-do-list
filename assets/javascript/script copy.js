
// Wait for the DOM to finish loading before running the game
// Get the Add button element and add event listeners to it


document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("add-button");

    addButton.addEventListener("click", createTask)
})




let allTasks = [
     {
task: "wash dishes",
date: new Date(),
priorityStatus: "red, amber, green",
taskCompleted: true
    },

    {
task: "",
date:new Date(),
priorityStatus: "red, amber, green",
taskCompleted: true
    },
];


/**Adds tasks to the list */
function createTask () {
    let taskText = document.getElementById("task-text").value;
    let taskDate = document.getElementById("date-input").value;
    
    let newTask = {
        task: taskText,
        date: taskDate,
        taskCompleted: false,
        priorityStatus: "amber"
    }

    allTasks.push(newTask)

}

 
//**Adds new row to the table in html */

// function loadTableRow () {

//     let numberOfTasks = allTasks.length;
//     for (i=0; i<numberOfTasks; i++)
//         if {

//     }

    
// }






/**Changes the priority of the tasks on the list */
function changePriorityStatus () {

}

/**Sorts tasks by date and puts them in the appropriate list */
function dateSort () {

}

/**Edits each task */
function editTask () {

}

/**remove the task */
function removeTask () {

}
