const logo = React.createElement(
  "img",
  { src: "./assets/logo.svg", alt: "logo", className: "logo" },
  null
);

const navItems = React.createElement(
  "div",
  {
    className: "nav-items",
  },
  React.createElement("div", null, "About Me"),
  React.createElement("div", null, "Portfolio"),
  React.createElement("div", null, "Services"),
  React.createElement("div", null, "Blog")
);

const nav = React.createElement(
  "nav",
  null,
  logo,
  React.createElement(
    "div",
    null,
    navItems,
    React.createElement("button", { className: "bookacall" }, "Book a call")
  )
);

const stats = React.createElement(
  "div",
  { className: "stats" },
  React.createElement(
    "div",
    null,
    React.createElement("div", { className: "stats-num" }, "200"),
    React.createElement("div", null, "Projects completed")
  ),
  React.createElement(
    "div",
    null,
    React.createElement("div", { className: "stats-num" }, "50"),
    React.createElement("div", null, "Startup raised")
  )
);

const hello = React.createElement(
  "div",
  { className: "hello" },
  React.createElement("h1", null, "hello"),
  React.createElement("p", null, "— It's D.Nova a design wizard")
);

const sideline = React.createElement(
  "div",
  { className: "sideline" },
  React.createElement("div", null, "2024"),
  React.createElement("div", null, ""),
  React.createElement("div", null, "Product designer")
);

const scrollDown = React.createElement("div", {className: "scroll-down"}, "Scroll down")

const main = React.createElement("main", null, stats, hello);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  React.createElement("div", { className: "container" }, nav, main, sideline, scrollDown)
);
