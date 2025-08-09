import { useEffect } from "react";
import { useRef } from "react";


export default function UseLoadLeftVisual(){
    const paraVisual = useRef();
    const paraUn = useRef();
    const paraDeux = useRef();
    const paraTrois = useRef();
    const paraBtn = useRef();
    const textInvisibleBtnOrange = useRef();
    const textVisibleBtnOrange = useRef();

    useEffect(() => {
      paraVisual.current.style.transform = "translateY(0%)";
      paraVisual.current.style.opacity = "1";
      paraUn.current.style.transform = "translateY(0%)";
      paraDeux.current.style.transform = "translateY(0%)";
      paraTrois.current.style.transform = "translateY(0%)";
      paraBtn.current.style.transform = "translateY(0%)"; 
    }, [])
    return {paraVisual,paraUn,paraDeux,paraTrois,paraBtn,textInvisibleBtnOrange,textVisibleBtnOrange};
}