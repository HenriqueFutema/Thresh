import manageState from '../vdom/manageState'

const tClick = (_function) =>{
    window.onload = function(){
        const btn = document.getElementById(_function.id)
        btn.addEventListener('click', ()=>console.log("aaaaa"))
    }

}


export default tClick