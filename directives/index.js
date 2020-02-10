import tModel from './tModel';
import tClick from './tClick';

//All Directives
function callDirectives(k, v){
    
    const directive = {
        'tModel': () => tModel(v),
        'tClick': () => tClick(v),
        'default': () => console.error('Error directive')
    }
    return (directive[k] || directive['default'])();
}

export default callDirectives