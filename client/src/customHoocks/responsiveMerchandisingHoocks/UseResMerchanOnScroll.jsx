import { useRef } from "react";
import { useScroll } from "framer-motion"

export default function UseResMerchanOnScroll(){
    const target = useRef();

    const {scrollYProgress} = useScroll({
        target:target,
        offset:["0 1","1 1"],
    })

    return {target,scrollYProgress};
}