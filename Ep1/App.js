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
    { id: "parent" },
    [React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h3", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h3", {}, "I am h2 tag"),
    ])]
);
root.render(parent);
