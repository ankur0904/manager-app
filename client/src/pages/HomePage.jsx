import React from "react";

function HomePage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src="https://picsum.photos/200"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        Manage yourself here...
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Believe or not but a managed day is more productive than unmanaged.
          Manage your day and track your performance here
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
