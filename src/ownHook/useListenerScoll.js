import {  useEffect,useCallback } from 'react';

function Index(requestDatas, clearData) {
    
    const  requestDatasCallback = useCallback(requestDatas,[]);
    const clearDataCallback = useCallback(clearData,[]);
    
    useEffect(() => {
        requestDatasCallback();
    },[requestDatasCallback])

    useEffect(() => {
        const loadMoreEvent = () => {
            if (document.documentElement.scrollTop + 50 >=
                document.documentElement.scrollHeight - document.documentElement.clientHeight) {
                    requestDatasCallback()
            }
        }
        window.addEventListener('scroll', loadMoreEvent);
        return () => {
            clearDataCallback();
            window.removeEventListener('scroll', loadMoreEvent);
        }
    }, [requestDatasCallback,clearDataCallback])

    return null;
}

export default Index;