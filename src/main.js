import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";

const createVApp = count =>
  createElement("div", {
    attrs: {
      id: "app",
      dataCount: count
    },
    children: [createElement("input"), String(count)]
  });

let count = 0;
const vApp = createVApp(count);
const $app = render(vApp);

let $rootEl = mount($app, document.getElementById("app"));

setInterval(() => {
  count++;
  generateApp()
}, 1000);


const generateApp = () => {
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}

console.log($app);
