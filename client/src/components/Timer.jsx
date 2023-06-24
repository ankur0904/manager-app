import React, { useEffect, useState } from "react";

function Timer() {
  const [progressValue, setProgressValue] = useState("0%");

  useEffect(() => {
    const startTime = new Date().getTime();
    const duration = 30 * 60 * 1000; // 30 minutes in milliseconds

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime / duration) * 100;

      if (progress >= 100) {
        clearInterval(timer);
        setProgressValue("100%");
      } else {
        setProgressValue(`${Math.ceil(progress)}%`);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container">
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">
          Your time start now 🥳 for 30 minutes 🚀
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
          ⚠️ Don't refresh the page, time will restart 😧
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          </div>
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: progressValue }}></div>
      </div>
    </div>
  );
}

export default Timer;
