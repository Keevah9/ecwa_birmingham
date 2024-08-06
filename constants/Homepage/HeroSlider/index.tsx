
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { curve, heroBackground, robot } from "@/assets";
import Notification from "@/components/Notification";
import Generating from "@/components/Generating";
import React, { useContext } from "react";
import "@splidejs/react-splide/css";

//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//@ts-ignore
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

interface HeroSliderProps {
  HeroSlider: [];
}

const HeroSlider = (props:  HeroSliderProps) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className=" bg-ecwadarkblue"
    >
      <div className="lg:h-[700px] relative" ref={parallaxRef}>
        <div className="relative mx-auto text-center" >
          <div className="xs:mx-auto max-containe  z-10 heroslider ">
            <Splide
              hasTrack={false}
              options={{
                type: "fade",
                speed: 1500,
                easing: "linear",
                interval: 7000,
                rewind: true,
                autoplay: true,
                arrows: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                pagination: false,
                breakpoints: {
                  1110: {
                    speed: 500,
                    interval: 6000,
                  },
                  768: {
                    speed: 500,
                    interval: 6000,
                  },
                  540: {
                    speed: 500,
                    interval: 6000,
                  },
                },
              }}
            >
              <SplideTrack>
                {props.HeroSlider.map((data: any, index: number) => (
                  <React.Fragment key={index}>
                   
                      <SplideSlide key={index}>
                      <div className={`${data.VimeoLink != null ? 'hidden' : ''}  xs:w-full xs:bg-no-repeat flex-col justify-center items-center max-h-[560px max-container px-6 min-h-[560px] lg:min-h-[700px] xs:bg-cover xs:bg-bottom md:px-[5%] flex flex-col py-] lg:px-[10%] text-center  `}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="col-span- place-self-center text-center "
                          >
                            <div className=" md:container text-center text-white ">
                              <span className=" text-[24px]">{data.SubTitle}</span>
                              
                              <h1 className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] text-white text-center mb-1 xs:leading-tight font-black"> {data.Title} </h1>
                                <Image
                                  src={curve}
                                  className="absolute top-full left-0 w-full xl:-mt-2"
                                  width={624}
                                  height={28}
                                  alt="Curve"
                                />
                            <div className="max-w-2xl h-[3rem] drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]  mt-10 mb-20" ><ReactMarkdown >{data.Content}</ReactMarkdown></div>
                              <div className="flex justify-center text-center mt-12 gap-8">
                                {data.ButtonLabel && (
                                <><Button type={"button"} title={data.ButtonLabel} link={`/${data.ButtonUrl}`} variant={"btn_orange"} /><Button type={"button"} title={'Contact Us'} link={`/contact-us`}  /></>
                                )}
                              </div>

                            </div>

                          </motion.div>
                        </div>
                      </SplideSlide>
                 
                  </React.Fragment>
                ))}
              </SplideTrack>
            </Splide>
            </div>
 
            
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[10rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
                    <li className="p-5">Jesus Christ is the TRUTH, WAY & LIFE</li>
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[1rem] w-[18rem] lg:flex"
                    title="ECWA Birmingham"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </Section>
  );
};

export default HeroSlider;