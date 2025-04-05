import { useMotionValueEvent } from "framer-motion";

const useSetColor = (scrollYProgress,setcolor,latestUn,colorUne,latestDeux,colorDeux,latestTrois,colorTrois,lateQuatre,colorQuatre)=>{
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if(latest<latestUn){
          setcolor(colorUne);
        }
        if(latest>=latestUn && latest<= latestDeux){
          setcolor(colorDeux);
        }
        if(latest>=latestTrois && latest<= lateQuatre){
          setcolor(colorTrois);
        }
        if(latest>lateQuatre){
          setcolor(colorQuatre);
        }
      })
}

export default  useSetColor;
