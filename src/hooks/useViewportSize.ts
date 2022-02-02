import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";

function getWindowWidth(){
    const {innerWidth} = window;
    return innerWidth;
}

export function useViewportSize(){
    const [viewPort,setViewport] = useState(getWindowWidth());

    useEffect(() => {
        function resizeHandler(){
            setViewport(getWindowWidth());
        }

        window.addEventListener('resize',resizeHandler);

        return () => window.removeEventListener('resize',resizeHandler);
    },[]);

    return viewPort
}

export function useMobileStatus():boolean{
    const viewPortSize = useViewportSize();
    const themeContext = useContext(ThemeContext);

    return themeContext.viewPort['mobile'] >= viewPortSize;
}