import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

//USER
import manageState from './vdom/manageState'

manageState.createState('count', 0);
manageState.createState('name', 'henrique');

const test = () =>{
  manageState.setState('name', 'futema') 
  console.log(manageState.getState())
}


const createVApp = (state) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: state.count,
  },
  children: [
    createElement('input', {
      attrs:{
        id: 'name',
        tModel: 'name'
      }
    }),
    createElement('button', {
      attrs:{
        id: "btn",
        tClick: {
          method: test,
          id: 'btn'
        }
      },
      children:["Button {{ state.name }} "]
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


//DATA TEST
let count = 0

let vApp = createVApp(manageState.getState());
const $app = render(vApp);

const elementAppId = document.getElementById('app')
let $rootEl = mount($app, elementAppId);


setInterval(() => {
  manageState.setState('count', manageState.getState().count + 1) 
  count++;
  generateApp();
}, 3000);

const generateApp = () =>{
  console.log("aaa")
  const vNewApp = createVApp(manageState.getState())
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp; 
}

generateApp();

export default generateApp