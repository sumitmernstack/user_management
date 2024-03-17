// frontend/src/components/task/TaskItem.js

import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
      {task.dueDate && <p>Due Date: {task.dueDate}</p>}
    </li>
  );
};

export default TaskItem;
