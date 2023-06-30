import React, { useEffect } from "react";
import axios from "axios";
import HeadingWithDelete from "../components/HeadingWithDelete";
import { useState } from "react";

function Days() {
    
  const [mondayItem, setMondayItem] = useState([]);
  const [tuesdayItem, setTuesdayItem] = useState([]);
  const [wednesdayItem, setWednesdayItem] = useState([]);
  const [thursdayItem, setThursdayItem] = useState([]);
  const [fridayItem, setFridayItem] = useState([]);
  const [saturdayItem, setSaturdayItem] = useState([]);
  const [sundayItem, setSundayItem] = useState([]);

  const fetchTaskData = (url, setState) => {
    axios({
      method: "get",
      url: url,
      responseType: "json",
      headers: {
        id: "ankur136",
      },
    })
      .then(function (response) {
        setState(response.data);
      })
      .catch(function (error) {
        setState([{ task: "No task found" }]);
      });
  };
  
  useEffect(() => {
    fetchTaskData("http://localhost:3001/api/get/task/monday", setMondayItem);
    fetchTaskData("http://localhost:3001/api/get/task/tuesday", setTuesdayItem);
    fetchTaskData("http://localhost:3001/api/get/task/wednesday", setWednesdayItem);
    fetchTaskData("http://localhost:3001/api/get/task/thursday", setThursdayItem);
    fetchTaskData("http://localhost:3001/api/get/task/friday", setFridayItem);
    fetchTaskData("http://localhost:3001/api/get/task/saturday", setSaturdayItem);
    fetchTaskData("http://localhost:3001/api/get/task/sunday", setSundayItem);
  }, []);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0 my-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sunday</h5>

              {sundayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="sunday"/>
              ))}

              <div className="d-flex justify-content-center">
                <a href="/add/sunday/task" className="btn btn-success mx-2">
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
              {mondayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="monday"/>
              ))}
              <div className="d-flex justify-content-center">
                <a href="/add/monday/task" className="btn btn-success mx-2">
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
              {tuesdayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="tuesday"/>
              ))}
              <div className="d-flex justify-content-center">
                <a href="/add/tuesday/task" className="btn btn-success mx-2">
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
              {wednesdayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="wednesday"/>
              ))}
              <div className="d-flex justify-content-center">
                <a href="/add/wednesday/task" className="btn btn-success mx-2">
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
              {thursdayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="thursday"/>
              ))}
              <div className="d-flex justify-content-center">
                <a href="/add/thursday/task" className="btn btn-success mx-2">
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
              {fridayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="friday"/>
              ))}
              <div className="d-flex justify-content-center">
                <a href="/add/friday/task" className="btn btn-success mx-2">
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
              {saturdayItem.map((item) => (
                <HeadingWithDelete task={item.task} key={item.task} day="saturday"/>
              ))}
              <div className="d-flex justify-content-center">
                <a href="/add/saturday/task" className="btn btn-success mx-2">
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
