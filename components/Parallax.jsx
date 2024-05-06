import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
       <div className="bg-ecwadarkblue">
            <div
                className="parallax"
                ref={ref}
            >
               
                <div className="text-center max-container"> 
                {/* <motion.h2 className="text-white" style={{ y: yText }}>
                    {type === "services" ? "What We Do?" : "How we serve God?"}
                </motion.h2> */}
                    <motion.h2 className="text-white" style={{ y: yText }}>
                        ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.
                    </motion.h2>
                    {/* <p className="text-white max-w-xl mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.

                    </p> */}
                    </div>
              
                <motion.div className="mountains"></motion.div>
                <motion.div
                    className="planets"
                    style={{
                        y: yBg,
                        backgroundImage: `url(${type === "services" ? "/planets.png" : "/dust.webp"
                            })`,
                    }}
                ></motion.div>
                <motion.div style={{ x: yBg }} className="stars"></motion.div>
            </div>
       </div>
    );
};

export default Parallax;