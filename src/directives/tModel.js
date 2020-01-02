import manageState from '../vdom/manageState'


const tModel = (el) =>{
    window.onload = function(){
        
        let $el = document.getElementById(el)
        
        function changeInput(){
            manageState.setState(el, $el.value)
            $el.value = manageState.setState(el, $el.value)
        }
        $el.addEventListener('change', changeInput)
    }
}


export default tModel