{/* <div id="parent">
    <div id= "child">
        <h1>i'm h1 tag</h1>
    </div>
</div> */}
// reactElement(object) =>HTML browser understand

const root = ReactDOM.createRoot(document.getElementById("root"));

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