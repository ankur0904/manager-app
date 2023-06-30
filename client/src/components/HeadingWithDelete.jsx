import React from "react";
import axios from "axios";

function HeadingWithDelete(props) {
  function handleDelete() {
    const { task, day } = props; // Destructure the task and day from props

    axios({
      method: "delete",
      url: `http://localhost:3001/api/delete/task/${day}/${task}`,
      headers: {
        id: "ankur136",
      },
    })
      .then(function (response) {
        // Handle successful deletion (e.g., show a success message or update the state)
        console.log("Task deleted successfully");
        window.location.reload();
      })
      .catch(function (error) {
        // Handle error (e.g., show an error message or handle the error state)
        console.error("Error deleting task:", error);
      });
  }

  return (
    <>
      <p className="card-text d-flex justify-content-left">
        {props.task}
        <svg
          onClick={handleDelete}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          fill="currentColor"
          className="bi bi-trash mx-4"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
      </p>
    </>
  );
}

export default HeadingWithDelete;
