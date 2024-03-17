// frontend/src/pages/TaskDetailPage.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTask } from '../actions/taskActions';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import TaskDetail from '../components/task/TaskDetail';

const TaskDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.selectedTask);
  const loading = useSelector(state => state.tasks.loading);
  const error = useSelector(state => state.tasks.error);

  useEffect(() => {
    // Fetch task detail when component mounts
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>Task Detail</h2>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {task && <TaskDetail task={task} />}
    </div>
  );
};

export default TaskDetailPage;
