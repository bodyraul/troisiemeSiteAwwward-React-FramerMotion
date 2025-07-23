import { useEffect } from "react";
import { useRef } from "react";

export default function UseInitialiseNav(){
    const nav = useRef();
    
    useEffect(() => {
    nav.current.style.transform ="translateY(0%)";
    }, [])

    return nav;
}