// internet explore 낮은 버전에서도 immer 지원하게 함

import {produce } from 'immer';

export default (...args) => {
    
    return produce(...args);
};