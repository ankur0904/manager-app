import React from "react";

function LoginPage() {
  console.log(process.env.REACT_APP_appId);
  return <passage-auth app-id={process.env.REACT_APP_appId}></passage-auth>;
}

export default LoginPage;
