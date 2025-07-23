import { useRef } from "react";
import {  useScroll} from "framer-motion"

export default function UseResDefPersoOnScroll(){
    const ref=useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1 1"],
        })

    return {ref,scrollYProgress}
}