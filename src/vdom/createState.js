let state = {}

export default createState = (key, value) => {
    state = {...state, key: value}
}

export default getState = () =>{
    return state
}