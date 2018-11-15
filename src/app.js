console.log("App.js is running!");

// JSX - JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer!"
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Jason Metten",
  age: 42,
  location: "Des Moines"
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    <p>{user.location}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
