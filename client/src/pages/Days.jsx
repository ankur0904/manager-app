import React from "react";
// import { mondayTaskSchema } from "../config/Schema";
// import { Monday } from "../config/Models";

function Days() {
  const items = [
    {
      _id: "649a9aeb624d3969e73283cc",
      userId: "ankur136",
      task: "No task for Sunday",
      __v: 0,
    },
    {
      _id: "649a9f9e46a320e5db6d0412",
      userId: "ankur136",
      task: "No task for Sunday 1",
      __v: 0,
    },
    {
      _id: "649aa2a3e6ab63c079ccdbb0",
      userId: "ankur136",
      task: "No task for Sunday 1",
      __v: 0,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sunday</h5>
              
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}

              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Monday</h5>
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}
              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tuesday</h5>
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}
              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wednesday</h5>
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}
              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thursday</h5>
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}
              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Friday</h5>
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}
              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Saturday</h5>
              {items.map((item) => (
                <p className="card-text d-flex justify-content-left">
                  {item.task}
                  <svg
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
              ))}
              <div className="d-flex justify-content-center">
                <a href="/#" className="btn btn-success mx-2">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Days;
