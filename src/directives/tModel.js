import manageState from '../state/manageState'


const tModel = (el) =>{
    window.onload = function(){
        
        let $el = document.getElementById(el)
        
        function changeInput(){
            manageState.setState(el, $el.value)
        }
        $el.addEventListener('input', changeInput)
    }
}


export default tModel