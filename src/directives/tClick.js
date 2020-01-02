import manageState from '../vdom/manageState'
import generateApp from '../main'

const tClick = (_function) =>{

    window.addEventListener('load', function(){
        const btn = document.getElementById(_function.id)
        btn.addEventListener('click', _function.method)
        generateApp()
    })

}


export default tClick