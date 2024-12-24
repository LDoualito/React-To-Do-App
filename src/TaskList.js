import React from "react";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <span
            onClick={() => onToggleTask(task.id)}
            style={{ cursor: "pointer" }}
          >
            {task.text}
          </span>
          <button onClick={() => onDeleteTask(task.id)} style={{ marginLeft: "10px" }}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

