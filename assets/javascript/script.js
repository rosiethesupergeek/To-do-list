// Wait for the DOM to finish loading before running the game
// Get the Add button element and add event listeners to it


document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-button");

    addButton.addEventListener("click", createTask)
})

let allTasks = [];

/**Adds tasks to the list */
function createTask() {
    let taskText = document.getElementById("task-text").value;
    let taskDate = new Date(document.getElementById("date-input").value);
    let isImportant = document.getElementById('important').value;

    let newTask = {
        task: taskText,
        date: taskDate,
        taskImportant: isImportant
    }

    allTasks.push(newTask);
    buildTaskLists();
}

// function dayOfYear(year, month, day) {
//     let now = new Date();
//     let daysInMs = new Date(year, month - 1, day) - new Date(now.getFullYear(), 0, 0);
//     let oneDay = 1000 * 60 * 60 * 24;
//     let days = (daysInMs / oneDay);
//     return (days);
// }



function buildTaskLists() {

    let todayList = document.getElementById("today-table");
    let nextWeekList = document.getElementById("week-table");
    let futureList = document.getElementById("future-table");

    todayList.innerHTML = "";
    nextWeekList.innerHTML = "";
    futureList.innerHTML = "";

    let now = new Date();
    let endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59);
    let oneWeekAhead = new Date(new Date().setDate(endOfToday.getDate() + 7));
    oneWeekAhead = new Date(oneWeekAhead.setHours(23));
    oneWeekAhead = new Date(oneWeekAhead.setMinutes(59));
    
        allTasks.forEach(function(task,i){
        let taskHtml = `<tr>
    <td>${task.task}</td>
    <td>${task.date}</td>
    <td>${task.taskImportant}</td>
    <button class="btn btn-info" onclick= "completeTask(${i})">Complete</button>
    </tr>`;

        if (task.date<=endOfToday){
            todayList.innerHTML+=taskHtml;
        }
        else if (task.date>endOfToday&&task.date<=oneWeekAhead)
         {
            nextWeekList.innerHTML+=taskHtml;
        }
        else {
            futureList.innerHTML+=taskHtml;
        }
        // setUpCompleteButton(i);
    })
}



function changePriorityStatus() {

}



/**Edits each task */
function completeTask(i) {
    allTasks.splice(i,1);
    buildTaskLists();
}



/**remove the task */
function removeTask() {

}