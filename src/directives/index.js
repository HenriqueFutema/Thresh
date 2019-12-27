import tModel from './tModel'

//All Directives
const callDirectives = (k, v) =>{
    k === 'tModel' ? tModel(v) : () => {return}
}
export default callDirectives