const tClick = (_function) =>{

    window.addEventListener('load', () => {
        const btn = document.getElementById(_function.id)
        btn.addEventListener('click', _function.method)
    })

}


export default tClick