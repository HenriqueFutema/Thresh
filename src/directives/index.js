import tModel from './tModel'
import tClick from './tClick'

//All Directives
function callDirectives(k, v){
    
    const directive = {
        'tModel': () => tModel(v),
        'tClick': () => tClick(v),
        'default': () => console.log('Error directive')
    }
    return (directive[k] || directive['default'])();
}
export default callDirectives