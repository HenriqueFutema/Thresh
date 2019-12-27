import manageState from '../vdom/manageState'


const tModel = (el) =>{
    window.onload = function(){
        console.log(el)
        console.log(document.getElementById(el))
        let $el = document.getElementById(el)
        
        function changeInput(){
            manageState.setState(el, $el.value)
        }
        $el.addEventListener('change', changeInput)
    }
}


export default tModel