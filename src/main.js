import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';


//USER
import manageState from './vdom/manageState'
import tModel from './directives/tModel'

const createVApp = (state) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: state.count,
  },
  children: [
    createElement('input', {
      attrs:{
        value: state.name,
        name: 'inpName',
        tModel: 'inpName'
      }
    }),
    String(state.name),
    String(state.count),
    ...Array.from({ length: state.count }, () => createElement('p', {
      children:[
        "aaaa"
      ]
    })),
  ],
});


let vApp = createVApp(manageState.getState());
const $app = render(vApp);

const elementAppId = document.getElementById('app')
let $rootEl = mount($app, elementAppId);
let count = 0
generateApp;
setInterval(() => {
  manageState.setState('count', manageState.getState().count + 1) 
  count++;
  generateApp();
}, 1000);

const generateApp = () => {
  manageState.createState('count', 0);
  manageState.createState('name', 'henrique');
  manageState.setState('name', 'Futema');
  manageState.setState('count', count);
  const vNewApp = createVApp(manageState.getState())
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}

generateApp();
