import manageState from '../state/manageState'

const bindText = (textValue) =>{
    const text = textValue.split(/(\{\{[^}]+\}\})/g).filter(x => x !== '')
    const neededBind = text.map((_textValue) => _textValue.match(/^\{\{[^}]+\}\}$/) ? binding(_textValue) : _textValue)

    function binding(textToBind){
        const _textToBind = textToBind.replace(/^\{\{([^}]+)\}\}$/, '$1').trim()
        const index = _textToBind.split('.')[1]
        const state = manageState.getState()
        return state[index]
    }
    return neededBind.join('')

}


export default bindText