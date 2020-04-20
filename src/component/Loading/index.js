import React from 'react';
import { LoadingStyle } from './sytle';
function Loading(){
    return (
        <LoadingStyle>
            <div className="loader-inner ball-clip-rotate">
                <div></div>
            </div>
        </LoadingStyle>
    )
}

export default Loading;