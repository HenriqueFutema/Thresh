import manageState from '../vdom/manageState'

const tModel = (el) =>{
    window.onload = function(){
        console.log(el)
        console.log(document.getElementById(el))
        let $el = document.getElementById(el)
        
        function changeInput(){

            console.log("asasasas");
        }
        $el.addEventListener('change', () => console.log("test"))

    }
}


export default tModel