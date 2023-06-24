import React from "react";

function HomePage() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="https://picsum.photos/200"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="display-5 fw-bold text-body-emphasis">Manage yourself here...</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Believe or not but a managed day is more productive than unmanaged.
          Manage your day and track your performance here
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
