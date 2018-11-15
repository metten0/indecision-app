"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer!"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: "Jason Metten",
  age: 42,
  location: "Des Moines"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    user.age
  ),
  React.createElement(
    "p",
    null,
    user.location
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
