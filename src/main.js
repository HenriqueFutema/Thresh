import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = (count) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: count,
  },
  children: [
    createElement('input'),
    String(count),
    ...Array.from({ length: count }, () => createElement('p', {
      children:[
        "aaaa"
      ]
    })),
  ],
});

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

const elementAppId = document.getElementById('app')
let $rootEl = mount($app, elementAppId);

setInterval(() => {
  count++;
  generateApp()
}, 10000);

const generateApp = () => {
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}

console.log($app);
