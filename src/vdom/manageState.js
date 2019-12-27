let state = {}

const createState = (_key, value) => {
    return state = {...state, [_key]: value}
}

const getState = () =>{
    return state
}

const setState = (_key, value) =>{
    console.log(state);
    console.log(value);
    
    
    return state[_key] = value
}

export default { createState, getState, setState }