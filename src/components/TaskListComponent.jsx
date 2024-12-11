import React from "react";
import tasks from "../data/tasks";

const TaskListComponent = () => {
    const backlogOrProgress = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
    const completed = tasks.filter(task => task.state === "completed");

    const backlogOrProgressList = backlogOrProgress.map(task => (
        <li key={task.id}>
            <strong>{task.title}</strong> - Priority: {task.priority}, Estimated Time: {task.estimatedTime} mins
        </li>
    ));
    const completedList = completed.map(task => (
        <li key={task.id}>
            <strong>{task.title}</strong> - Priority: {task.priority}, Estimated Time: {task.estimatedTime} mins
        </li>
    ));

    return (
        <div>
            <h1>Task Manager</h1>
            <div>
                <h2>Current Tasks ({backlogOrProgress.length})</h2>
                <ul>
                    {backlogOrProgressList}
                </ul>
            </div>
            <div>
                <h2>Completed Tasks ({completed.length})</h2>
                <ul>
                    {completedList}
                </ul>
            </div>
        </div>
    );
}

export default TaskListComponent;