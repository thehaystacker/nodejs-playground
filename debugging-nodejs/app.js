// 1. METHODS TO DEBUGGING
// A. USING CONSOLE.LOG

// B. USING DEBUGGER

const tasks = [{
    name: 'Task 1',
    completed: false
},{
    name: 'Task 2',
    completed: true
},{
    name: 'Task 3',
    completed: false
},]

var getIncompletedTasks = () => {
    return tasks.filter(function (task) {
        debugger;
        return task.completed === false;
    });
}

console.log(getIncompletedTasks(tasks));

// RUN restart AGAINS

// 3. ERROR MESSAGES