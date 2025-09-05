import React from "react"
import ReactDOM from "react-dom/client"


// const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//   <div id = "parent">
//     <div id= "child">
//     <h1>I am H1 tag</h1>
//     <h1>I am H2 tag</h1>

//     <div>
//   </div>

// const parent = React.createElement("div", {id:"parent"},React.createElement("div", {id:"child"},React.createElement("h1", {},"I am h1 tag")));

const parent = React.createElement(
    "div",
    { id: "parent", key: "1" },
    [React.createElement("div", { key: "2", id: "child" }, [
        React.createElement("h1", { key: "3" }, "I am h1 tag"),
        React.createElement("h3", { key: "4" }, "I am  bold h2 tag"),
    ]),
    React.createElement("div", { key: "5", id: "child" }, [
        React.createElement("h1", { key: "6" }, "I am h1 tag"),
        React.createElement("h3", { key: "7" }, "I am h2 tag"),
    ])]
);
root.render(parent);
