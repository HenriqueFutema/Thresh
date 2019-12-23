let state = {}

const createState = (_key, value) => {
    state = {...state, [_key]: value}
}

const getState = () =>{
    return state
}

export default { createState, getState }