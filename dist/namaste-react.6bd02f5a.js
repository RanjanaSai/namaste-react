// reactElement(object) =>HTML browser understand
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "I'm h1 tag"),
        React.createElement("h2", {
            id: "heading"
        }, "I'm h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "I'm h1 tag"),
        React.createElement("h2", {
            id: "heading"
        }, "I'm h2 tag")
    ])
]);
root.render(parent);

//# sourceMappingURL=namaste-react.6bd02f5a.js.map
