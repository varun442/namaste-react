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
const paragraph = React.createElement("p", {}, "Paragraph");

const heading = React.createElement("h1", {}, "Hello From React!!");

const child = React.createElement("div", { id: "child" }, heading, paragraph);

const parent = React.createElement("div", { id: "parent" }, child);

console.log(heading); //returns object

// we add the tags into the root using REACT DOM not the REACT

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(parent);

//render() - converts the heading object to respective tag and put it in the DOM
