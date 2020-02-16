const tIf = (v, $el) =>{
    const _v = v.toString()
    const conditional = {
        'true': () => _v === 'true' ? $el.style.display = "" : $el.style.display = "none",
        "error": () => console.error("Error test")
    }
    return  (conditional[_v] || conditional['error'])();
}

export default tIf;