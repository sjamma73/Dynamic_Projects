document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskFrame = document.getElementById("task-frame");

    // Create 16 task links dynamically
    for (let i = 1; i <= 13; i++) {
        let taskItem = document.createElement("li");
        let taskLink = document.createElement("a");
        let taskNumber = i.toString().padStart(2, '0'); // Format to 2 digits
        taskLink.textContent = `TASK_${taskNumber}`;
        taskLink.href = `Task_${taskNumber}.html`;
        taskLink.target = "task-frame";

        taskLink.addEventListener("click", function (event) {
            event.preventDefault();
            taskFrame.src = taskLink.href;
        });

        taskItem.appendChild(taskLink);
        taskList.appendChild(taskItem);
    }
});
