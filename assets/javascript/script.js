// Wait for the DOM to finish loading before running the game
// Get the Add button element and add event listeners to it


document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-button");

    addButton.addEventListener("click", createTask);
    load();
    buildTaskLists();

})

let allTasks = [];

/**Adds tasks to the list */
function createTask() {
    let taskText = document.getElementById("task-text").value;
    let dateValue = document.getElementById("date-input").value;

    if (taskText === "" || dateValue === "") {
        alert("Task needs description, date and time!");
        return
    }

    let taskDate = new Date(dateValue);
    let newTask = {
        task: taskText,
        date: taskDate,
        priorityStatus: "green"
    }

    allTasks.push(newTask);
    buildTaskLists();
    save();
}


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


    let todayCount = 0;
    let thisWeekCount= 0;
    let futureCount = 0;

    for (i=0; i<allTasks.length; i++) {

        let task = allTasks[i];

        let className = "bg-success";
        if (task.priorityStatus == "amber") {
            className = "bg-warning"
        } else if (task.priorityStatus == "red") {
            className = "bg-danger"
        }
        let taskHtml = `<tr onclick= "changePriorityStatus(${i})" class="${className}">
    <td>${task.task}</td>
    <td>${task.date.toLocaleDateString("en-GB")} ${task.date.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}</td>
    <td><button class="btn btn-info" onclick= "completeTask(${i});event.stopPropagation()">Complete</button></td>
    </tr>`;

        if (task.date <= endOfToday) {
            todayList.innerHTML += taskHtml;
            todayCount ++;
        } else if (task.date > endOfToday && task.date <= oneWeekAhead) {
            nextWeekList.innerHTML += taskHtml;
            thisWeekCount ++;
        } else {
            futureList.innerHTML += taskHtml;
            futureCount ++;
        }
    }
    document.getElementById("today-count").innerText= `Total tasks : ${todayCount}`;
    document.getElementById("this-week-count").innerText = `Total tasks : ${thisWeekCount}`;
    document.getElementById("future-count").innerText = `Total tasks : ${futureCount}`;

}



function changePriorityStatus(i) {
    let task = allTasks[i];
    if (task.priorityStatus == "green") {
        task.priorityStatus = "amber";
    } else if (task.priorityStatus == "amber") {
        task.priorityStatus = "red";
    } else {
        task.priorityStatus = "green";
    }
    buildTaskLists();
    save();

}



/**Completes a task */
function completeTask(i) {

    allTasks.splice(i, 1);
    buildTaskLists();
    save();
}


/**retrieves from local storage */
function load() {
    let loadedTasks = localStorage.getItem("savedTasks");
    allTasks = JSON.parse(loadedTasks);
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].date = new Date(allTasks[i].date);
    }
}

/**saves to local storage */
function save() {
    const tasksJSON = JSON.stringify(allTasks);
    localStorage.setItem("savedTasks", tasksJSON);
}