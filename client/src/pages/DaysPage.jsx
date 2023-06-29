import React from "react";
import HeadingWithDelete from "../components/HeadingWithDelete";
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
                <HeadingWithDelete task={item.task} />
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
                <HeadingWithDelete task={item.task} />
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
                <HeadingWithDelete task={item.task} />
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
                <HeadingWithDelete task={item.task} />
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
                <HeadingWithDelete task={item.task} />
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
                <HeadingWithDelete task={item.task} />
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
                <HeadingWithDelete task={item.task} />
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
