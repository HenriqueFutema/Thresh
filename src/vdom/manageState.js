let state = {}

const createState = (_key, value) => {
    state = {...state, [_key]: value}
}

const getState = () =>{
    return state
}

const setState = (_key, value) =>{
    state[_key] = value
}

export default { createState, getState, setState }