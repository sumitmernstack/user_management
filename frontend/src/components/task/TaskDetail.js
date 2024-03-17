// frontend/src/components/task/TaskDetail.js

import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div>
      <h2>Task Detail</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      {task.dueDate && <p><strong>Due Date:</strong> {task.dueDate}</p>}
    </div>
  );
};

export default TaskDetail;
