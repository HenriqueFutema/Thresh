import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';


//USER
import manageState from './vdom/manageState'
import tModel from './directives/tModel'

let methods = {

  test: () =>{
    console.log("dfdf")
  }

}

const createVApp = (state, methods) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: state.count,
  },
  children: [
    createElement('input', {
      attrs:{
        value: state.name,
        id: 'inpName',
        tModel: 'inpName'
      }
    }),
    createElement('button', {
      attrs:{
        id: "btn",
        tClick: "methods.test"
      },
      children:["Button"]
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
let count = 0;

setInterval(() => {
  manageState.setState('count', manageState.getState().count + 1) 
  count++;
  generateApp();
}, 10000);


let arrMethods = {}
for(const m of Object.values(methods)){
  const _methods = m.toString().replace(/^[^{]*{\s*/,'').replace(/\s*}[^}]*$/,'');
  console.log(_methods);
  
}

manageState.createState('count', 0);
manageState.createState('name', 'henrique');
manageState.setState('count', count);

const generateApp = () => {
  console.log(arrMethods)
  const vNewApp = createVApp(manageState.getState(), arrMethods)
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp; 
}

generateApp();

export default generateApp;
