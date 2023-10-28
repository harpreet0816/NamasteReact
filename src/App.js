import React from "react";
import ReactDOM from "react-dom/client"  // both of them comes from node modules

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "This is namaste React in h1 tag "), 
        React.createElement("h2", {}, "I am an h2 Tag"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 Tag"),
    ]),
]);
console.log("parent creat element >>...",parent); // it is a object react dom convert it into a html tags
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);