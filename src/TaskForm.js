import { useState } from "react";
import "./TaskForm.css";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function handleSubmit() {
    if (task.trim() === "") return;

    if (editIndex === -1) {
      setTasks([...tasks, task]);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;

      setTasks(updatedTasks);
      setEditIndex(-1);
    }

    setTask("");
  }

  function handleEdit(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));

    if (editIndex === index) {
      setTask("");
      setEditIndex(-1);
    }
  }

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task Manager</h1>

        <p className="subtitle">
          Keep track of your daily tasks
        </p>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />

          <button className="add-button" onClick={handleSubmit}>
            {editIndex === -1 ? "Add Task" : "Update Task"}
          </button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">
              No tasks yet. Add your first task!
            </p>
          ) : (
            tasks.map((task, index) => (
              <div className="task-item" key={index}>
                <span>{task}</span>

                <div className="task-buttons">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="task-count">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </div>
      </div>
    </div>
  );
}

export default TaskForm;