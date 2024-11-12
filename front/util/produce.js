// internet explore 낮은 버전에서도 immer 지원하게 함

import produce, {enableES5} from 'immer';

export default (...args) => {
    enableES5();
    return produce(...args);
};