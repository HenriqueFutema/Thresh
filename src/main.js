import createElement from "./vdom/createElement";

const vApp = createElement("div", {
  attrs: {
    id: "app"
  },
  children: []
});

console.log(vApp);
