import { useEffect } from "react";
import { useRef } from "react";


export default function UseLoadRightVisual(){
    const paraPhotoVisual = useRef();
    const imgRotate = useRef();

    useEffect(() => {
        paraPhotoVisual.current.style.transform = "translateY(0%)";
        paraPhotoVisual.current.style.opacity = "1";
    }, [])
    return {paraPhotoVisual,imgRotate};
}