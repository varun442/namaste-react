import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Title component</h1>;
};

const HeaderComp = () => {
  return (
    <div>
      {Title()}
      {/* <Title/> */}
      {/* <Title></Title> */}
      <h1>Header Component</h1>
      <h2>h2 tag </h2>
    </div>
  );
};
const head = <h1>Hello React</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComp />);

//render() - converts the heading object to respective tag and put it in the DOM
//Modify the DOM
//Override not append

/**
 *
 *  <div id="parent">
 *      <div id="child">
 *          <p></p>
 *          <h1></h1>
 *      </div>
 *  </div>
 *
 */

// const paragraph = React.createElement("p", {}, "Paragraph");

// const heading = React.createElement("h1", {}, "Hello From React!! :fire");

// const child = React.createElement("div", { id: "child" }, heading, paragraph);

// const parent = React.createElement("div", { id: "parent" }, child);

// console.log(heading); returns object

// React.createElement => returns object => HTMl => puts it upon DOM

// we add the tags into the root using REACT DOM not the REACT
