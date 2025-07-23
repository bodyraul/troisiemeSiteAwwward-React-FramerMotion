import { useEffect } from "react";
import { useRef } from "react";

export default function UseInitialiseBar(){
    const refBar = useRef();
    const bar = useRef();

    useEffect(() => {;
        bar.current.style.transform ="translateY(0%)";
    }, [])

    return {refBar,bar}
}