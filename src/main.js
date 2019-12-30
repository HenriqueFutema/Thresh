import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';


//USER
import manageState from './vdom/manageState'


manageState.createState('count', 0);
manageState.createState('name', 'henrique');

let data = manageState.getState()
console.log(data)
let methods = {
  test: function() {
    
    console.log(data)
  }

}

const createVApp = (state, arrMethods) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: state.count,
  },
  children: [
    createElement('input', {
      attrs:{
        value: state.name,
        id: 'name',
        tModel: 'name'
      }
    }),
    createElement('button', {
      attrs:{
        id: "btn",
        onClick: arrMethods.test
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

let arrMethods = {}

for(const m of Object.values(methods)){
  const _method = m.toString()
    .replace(/^[^{]*{\s*/,'')
    .replace(/\s*}[^}]*$/,'')
    .replace(/_/g, "")
    .replace('default.', '')

  console.log(_method)
  for(const k of Object.keys(methods)){
    arrMethods[k] = _method
  }
}

//DATA TEST
let count = 0

let vApp = createVApp(manageState.getState(), arrMethods);
const $app = render(vApp);

const elementAppId = document.getElementById('app')
let $rootEl = mount($app, elementAppId);


setInterval(() => {
  manageState.setState('count', manageState.getState().count + 1) 
  count++;
  generateApp();
}, 10000);


const generateApp = () => {
  const vNewApp = createVApp(manageState.getState(), arrMethods)
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp; 
}

generateApp();
