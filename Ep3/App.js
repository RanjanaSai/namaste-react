import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     { id: "parent", key: "1" },
//     [React.createElement("div", { key: "2", id: "child" }, [
//         React.createElement("h1", { key: "3" }, "I am h1 tag"),
//         React.createElement("h3", { key: "4" }, "I am  bold h2 tag"),
//     ]),
//     React.createElement("div", { key: "5", id: "child" }, [
//         React.createElement("h1", { key: "6" }, "I am h1 tag"),
//         React.createElement("h3", { key: "7" }, "I am h2 tag"),
//     ])]
// );

const Title = () => {
    return <h1> Namaste React using JSX</h1>
}
const elem = <h2>React Element</h2>
const HeadingComponent = () => {
    return (<div>
        {elem}
        <Title />
        <h3> Functional component using JSX</h3>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
