import tModel from './tModel'
import tClick from './tClick'

//All Directives
const callDirectives = (k, v) =>{
    k === 'tModel' ? tModel(v) : () => {return}
    k === 'tClick' ? tClick(v) : () => {return}
}
export default callDirectives