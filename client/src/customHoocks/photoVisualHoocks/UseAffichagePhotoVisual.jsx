import { useEffect } from "react";

export default function UseAffichagePhotoVisual(paraVisual,paraPhotoVisual,paraUn,paraDeux,paraTrois,paraBtn){
    useEffect(() => {
      paraVisual.current.style.transform = "translateY(0%)";
      paraVisual.current.style.opacity = "1";
      paraPhotoVisual.current.style.transform = "translateY(0%)";
      paraPhotoVisual.current.style.opacity = "1";
      paraUn.current.style.transform = "translateY(0%)";
      paraDeux.current.style.transform = "translateY(0%)";
      paraTrois.current.style.transform = "translateY(0%)";
      paraBtn.current.style.transform = "translateY(0%)";
    
     
    }, [paraVisual,paraPhotoVisual,paraUn,paraDeux,paraTrois,paraBtn])
}