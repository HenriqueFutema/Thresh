import manageState from '../vdom/manageState'

const tClick = (_function) =>{
    window.onload = function(){
        const btn = document.getElementById(_function.id)
        btn.addEventListener('click', _function.method)
    }

}


export default tClick