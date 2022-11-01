// ES6
import React from "react";
import ReactDOM from "react-dom";

const theDate = new Date(2023, 1, 1, 8);
const thisYear = theDate.getFullYear();

const thisTime = new Date().getHours();
let timeOfDay =
  thisTime < 12
    ? "Morning"
    : thisTime > 12 && thisTime < 18
    ? "Afternoon"
    : "Evening";
let ourColor =
  thisTime < 12 ? "Green" : thisTime > 12 && thisTime < 18 ? "red" : "blue";

// (thisTime<12) ? (timeOfDay="Morning", ourColor="Green") : (thisTime>12)&&(thisTime<18)? (timeofDay="Afternoon", ourColor="Green") : (timeofDay="Evening", ourColor="Green");

const heading = {
  color: ourColor
};

ReactDOM.render(Stuff(), document.getElementById("root"));

function Stuff() {
  return (
    //React styling Practice
    //Goal is to display Good Morning/Afternoon/Evening
    //Using Single h1 and if color greed/red/blue respectively
    //while also style.css using className

    <div>
      <h1 className="heading" style={heading}>
        {thisTime} Good {timeOfDay}
      </h1>
      <p>Copyright © {thisYear}</p>
    </div>
  );
}
