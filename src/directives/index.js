import tModel from './tModel';
import tClick from './tClick';
import tIf from './tIf';

//All Directives
function callDirectives(k, v, $el){
    
    const directive = {
        'tModel': () => tModel(v),
        'tClick': () => tClick(v),
        'tIf': () => tIf(v, $el),
        'default': () => console.error('Error directive')
    }
    return (directive[k] || directive['default'])();
}

export default callDirectives