// ES6
import React from "react";
import ReactDOM from "react-dom";

const fName = "Rojan";
//const lName = "LastName";
const thisYear = new Date().getFullYear();

ReactDOM.render(Stuff(), document.getElementById("root"));

function Stuff() {
  return (
    //JS Expressions in JSX Practice
    <div>
      <h1 className="redHeading">Created by {fName}</h1>
      <p>Copyright © {thisYear}</p>
    </div>
  );
}
