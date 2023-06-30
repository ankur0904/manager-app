import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddPage(props) {
    const navigate = useNavigate();
  function handleAddButton(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById("task");
    const task = taskInput.value;
    axios({
      method: "post",
      url: `http://localhost:3001/api/new/task/${props.day}`,
      headers: {
        id: "ankur136",
      },
      data: {
        task: task,
      },
    })
      .then(function (response) {
        // Handle successful addition (e.g., show a success message or update the state)
        console.log("Task added successfully");
        taskInput.value = ""; // Clear the input field
        navigate('/weekly-planner');
      })
      .catch(function (error) {
        // Handle error (e.g., show an error message or handle the error state)
        console.error("Error adding task:", error);
      });
  }

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input type="text" className="form-control" id="task" />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPage;
