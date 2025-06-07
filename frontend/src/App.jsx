import { useState, useEffect } from 'react'

import './App.css'

function App() {

  //state variables
  //newTask is the input field
  const [newTask, setNewTask] = useState('');

  //taskList is the array of tasks
  const [taskList, setTaskList] = useState([]);

  //editing state variables
  //editingTaskId tracks which task is being edited (null = no task being edited)
  const [editingTaskId, setEditingTaskId] = useState(null);
  
  //editingTaskText is what the user types in the edit form
  const [editingTaskText, setEditingTaskText] = useState('');

  //sending task to backend
  const handleAddTask = async () => {
    if (newTask.trim() === "") {
      return;
    }
    //send the task to the backend
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newTask }),
      });

      if (response.ok) {
        // After successfully adding task to backend, refresh the task list
        fetchTasks();
      }

    } catch (error) {
      console.error('Error sending task to backend:', error);
    }
    //clear the input field
    setNewTask('');
  }

  //fetching tasks from backend
  const fetchTasks = async () => {
    try{
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();
      setTaskList(data);
    }catch(error){
      console.error('Error fetching tasks from backend:', error);
    }

  }

  //deleting a task from backend
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // After successfully deleting task from backend, refresh the task list
        fetchTasks();
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  //start editing a task
  const handleEditTask = (taskId, currentText) => {
    setEditingTaskId(taskId);        // Mark this task as being edited
    setEditingTaskText(currentText); // Pre-fill the edit form with current text
  }

  //save the edited task
  const handleSaveTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editingTaskText })
      });

      if (response.ok) {
        setEditingTaskId(null);      // Exit edit mode
        setEditingTaskText('');      // Clear edit form
        fetchTasks();                // Refresh the task list
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }

  //cancel editing (don't save changes)
  const handleCancelEdit = () => {
    setEditingTaskId(null);      // Exit edit mode
    setEditingTaskText('');      // Clear edit form
  }

  //fetching tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h1>Task Manager</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder='Add a new task'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        {/* display the task list */}
        <div>
          <ul>
            {taskList.map(
              (task, i) =>
              (
                <li key={i}>
                  {editingTaskId === task._id ? (
                    // Edit mode: show input form and save/cancel buttons
                    <div>
                      <input 
                        type="text"
                        value={editingTaskText}
                        onChange={(e) => setEditingTaskText(e.target.value)}
                      />
                      <button onClick={() => handleSaveTask(task._id)}>Save</button>
                      <button onClick={() => handleCancelEdit()}>Cancel</button>
                    </div>
                  ) : (
                    // View mode: show task text and edit/delete buttons
                    <div>
                      {task.name}
                      <button onClick={() => handleEditTask(task._id, task.name)}>Edit</button>
                      <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                    </div>
                  )}
                </li>
              )

            )}
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
