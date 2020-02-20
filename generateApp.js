import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

import manageState from './state/manageState'

export default function generateApp(vApp, createVApp, $app, $rootEl,elementAppId, _oldState){
    let oldState = _oldState
    const newState = manageState.getState()
    render(vApp);
    mount($app, elementAppId)
    const vNewApp = createVApp(manageState.getState())
    const patch = oldState && newState !== undefined ? diff(vApp, vNewApp, oldState, newState) : diff(vApp, vNewApp);
    $rootEl = patch($rootEl);
    vApp = vNewApp;
    oldState = newState;
}