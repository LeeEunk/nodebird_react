import React, { useCallback, useState } from 'react'

// 평소에 중복되는 부분은 커스텀 훅으로 만들어서 사용
export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);

    const handler = useCallback((e) => {
        setValue(e.target.value);
    },[]);

    return [value, handler, setValue];
}