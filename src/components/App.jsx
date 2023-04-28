import React from "react";
import Login from "./Login";

// var online = true;
const currentDate = new Date().getHours();
console.log(currentDate);
const userIsRegister = true;

function App() {
  return (
    <div className="container">
      {/* {currentDate < 12 ? <h1>Good Morning</h1> : <h1>Good afternoon</h1>} */}
      <Login isRegiter={userIsRegister} />
    </div>
  );
}

export default App;
