import React from "react";
import ReactDOM from "react-dom/client"; // both of them comes from node modules

// React Element is an object not html Element when we render it on to the DOM it convert it into html tag;
// React.createElement => ReactElement- JS Object => HTMLELEMENT (rendr)
const heading = React.createElement(
  "h1",
  { id: "heading", style: { color: "blue" } },
  "Namaste React by Harpreet"
);
console.log(heading);

// JSX -is not HTML in js || HTML OR XML like syntax
//when this peice of code is executed <h1></h1>, it becomes a react element.
// jsx (transpiled before it reaches the js engine) - parcel can do it for us with the help of babel
//** JSX => babel transpiles it to react.createElement =>  ReactElement- JS Object => HTMLELEMENT (rendr)*/
const jsxHeading = <h1 id="headingg">Namaste react using jsx</h1>;

let number = 10000; 
const jsxHeading2 = <h1 id="headingg" tabIndex="5">Namaste react using jsx2</h1>;
// {can write any js code inside these curly braces}
console.log(jsxHeading); // check in console also line no 8 output both are same

// React Functional Component
const HeadingComponent = () => {
  return  <div>{number} <h1>Namaste React Functional Compoenent1</h1></div>;
};
const HeadingComponent2 = () => <h1>Namaste React Functional Compoenent2</h1>;

// component composition
const HeadingComponent3 = () => (
  <>
    <HeadingComponent2 />
    {console.log(number = 19999)}
    {number = 19999}
    {HeadingComponent2()}
    {<h1 style={{color:'green', border:'2px solid red'}}>here i am using another way to call component please check it in the code line no between 30 to 40</h1>}
    <HeadingComponent2></HeadingComponent2>
    <h1>Namaste React functional 3 </h1>
    {<h1>{number= 199484}</h1>}
    <h1>{number= 122 + 500}</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {heading} {jsxHeading} <HeadingComponent /> <HeadingComponent3 />
    {jsxHeading2}
  </>
);
