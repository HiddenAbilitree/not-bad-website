import { useRef } from "react";
import { Header } from "../components/Header";
import { Big } from "../components/Big";
import { ProgressBar } from "../components/ProgressBar";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export const Page = (props:any) => {
    const bodyRef = useRef(null);
    const isVisible = useInView(bodyRef, {
        amount: 1,
        margin: "-300px 0px -300px 0px",
    })
    return (<>   
        <ProgressBar />
        <Header refDiv={bodyRef} props={props} />
        <Big text="Hello There" />
        <Big text="" />
    
        <motion.div
            ref={bodyRef}  
            className="flex h-screen items-center justify-center text-white"
            style={{
                transform: isVisible ? "none" : "translateX(-200px)", 
                opacity: isVisible ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
        >
            <span className="text-foreground">Bodys</span>
        </motion.div></>);   
}