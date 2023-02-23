// Wait for the DOM to finish loading before running the game
// Get the Add button element and add event listeners to it


document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-button");

    addButton.addEventListener("click", createTask)
})

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

function dayOfYear(year, month, day) {
    let now = new Date();
    let daysInMs = new Date(year, month - 1, day) - new Date(now.getFullYear(), 0, 0);
    let oneDay = 1000 * 60 * 60 * 24;
    let days = (daysInMs / oneDay);
    return (days);
}


function putInTheTable() {

    let task = allTasks.slice(-1)[0];

    let taskDate = new Date(task.date);

    let taskYear = taskDate.getFullYear();
    let taskMonth = (taskDate.getMonth());
    let taskDay = taskDate.getDate();

    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth();
    let todayDay = now.getDate();  

    let a = dayOfYear(taskYear, taskMonth+1, taskDay);
    let b = dayOfYear(todayYear, todayMonth+1, todayDay);
    let differenceInDays = a-b;

    let taskHtml = `<tr>
    <td>${task.task}</td>
    <td>${task.date}</td>
    <td>${task.taskImportant}</td>
    </tr>`;

    if (
        (todayDay == taskDay) &&
        (todayMonth == taskMonth) &&
        (todayYear == taskYear)
    ) {
        let tableBodyContents = document.getElementById("today-table").innerHTML;
        alert(tableBodyContents);
        tableBodyContents = tableBodyContents + taskHtml;
        document.getElementById("today-table").innerHTML = tableBodyContents;
    } else if ( differenceInDays > 0 && differenceInDays < 8)
        {
        let tableBodyContents = document.getElementById("week-table").innerHTML;
        tableBodyContents = tableBodyContents + taskHtml;
        document.getElementById("week-table").innerHTML = tableBodyContents;
    } else {
        let tableBodyContents = document.getElementById("future-table").innerHTML;
        tableBodyContents = tableBodyContents + taskHtml;
        document.getElementById("future-table").innerHTML = tableBodyContents;
    }
}


function changePriorityStatus() {

}



/**Edits each task */
function editTask() {

}

/**remove the task */
function removeTask() {

}