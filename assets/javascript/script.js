// Wait for the DOM to finish loading before running the game
// Get the Add button element and add event listeners to it


document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-button");

    addButton.addEventListener("click", createTask)
})


const date = new Date();
const todayDay = date.getDate();
const todayMonth = date.getMonth();
const todayYear = date.getFullYear();

let allTasks = [];
let todaysTasks = [];
let thisWeeksTasks = [];
let futureTasks = [];


/**Adds tasks to the list */
function createTask() {
    let taskText = document.getElementById("task-text").value;
    let taskDate = document.getElementById("date-input").value;
    let isImportant = document.getElementById('important').value;

    let newTask = {
        task: taskText,
        date: taskDate,
        taskImportant: isImportant
    }

    allTasks.push(newTask);
    putInTheTable();
}


function putInTheTable() {

    let task = allTasks.slice(-1)[0];
    var taskHtml = `<tr>
    <td>${task.task}</td>
    <td>${task.date}</td>
    <td>${task.taskImportant}</td>
    </tr>`;

    let taskDate = new Date(task.date);
 
    let taskDay = taskDate.getDate();
    let taskMonth = taskDate.getMonth();
    let taskYear = taskDate.getFullYear();

    if (
        (todayDay == taskDay) &&
        (todayMonth == taskMonth) &&
        (todayYear == taskYear)
    ) {
        alert('help me god');
        let tableBodyContents = document.getElementById("today-table").innerHTML;
        alert(tableBodyContents);
        tableBodyContents = tableBodyContents + taskHtml;
        document.getElementById("today-table").innerHTML = tableBodyContents;
    }
}




//     alert(date);





//     // This arrangement can be altered based on how we want the date's format to appear.
//     let currentDate = `${day}-${month}-${year}`;
//     console.log(currentDate); // "17-6-2022"

//     document.getElementById("today-table").innerHTML = taskhtml;
// }



function changePriorityStatus() {

}



/**Edits each task */
function editTask() {

}

/**remove the task */
function removeTask() {

}