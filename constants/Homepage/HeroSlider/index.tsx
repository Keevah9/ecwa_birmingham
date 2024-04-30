
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { curve, heroBackground, robot } from "@/assets";
import { heroIcons } from "@/constants";
// import { BackgroundCircles } from "@/components/design/hero";
import Notification from "@/components/Notification";
import Generating from "@/components/Generating";
import React, { useContext } from "react";
import "@splidejs/react-splide/css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import Shadow from "../../../../public/img/Rectangle.png";

//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//@ts-ignore

import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';


import ReactMarkdown from "react-markdown";

import { motion } from "framer-motion";

// import Generating from "./Generating";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";


interface HeroSliderProps {
  HeroSlider: [];
}

const HeroSlider = (props:  HeroSliderProps) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className=" bg-ecwadarkblue"
     
    >
      <div className=" relative" ref={parallaxRef}>
        <div className="relative z-  bg-ecwadarkblu mx-auto text-center mb-[3.875rem md:mb- lg:mb-[6.25rem">
          <div className="xs:mx-auto z-10 heroslider   ">
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
                  // console.log(`${getStrapiMedia(data.Image.data.attributes.url)}`)
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
                                {/* <span className="inline-block relative">
                                 
                                  
                                </span> */}
                              
                              <h1 className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] text-white text-center mb-1 xs:leading-tight font-black"> {data.Title} </h1>
                                <Image
                                  src={curve}
                                  className="absolute top-full left-0 w-full xl:-mt-2"
                                  width={624}
                                  height={28}
                                  alt="Curve"
                                />
                                <div className="max-w-2xl h-[3rem] mt-10 mb-20" ><ReactMarkdown >{data.Content}</ReactMarkdown></div>
                              <div className="flex justify-center text-center mt-12 gap-8">
                                {data.ButtonLabel != null && (
                                <><Button type={"button"} title={data.ButtonLabel} link={data.ButtonLink} variant={"btn_orange"} /><Button type={"button"} title={'Contact Us'} link={`/contact-us`}  /></>
                                )}
                              </div>

                            </div>

                          </motion.div>
                          {/* <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="col-span-4 place-self-center mt-4 lg:mt-0"
                          >
                            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                              <Image
                                src="/images/hero-image.png"
                                alt="hero image"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={300}
                                height={300}
                              />
                            </div>
                          </motion.div> */}
                        </div>
                      </SplideSlide>
                 
                  </React.Fragment>
                ))}
              </SplideTrack>
              {/* <ul className="drop-shadow-xl splide__pagination mb-10"></ul> */}
            </Splide>
            </div>
 
            
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" /> */}


              <div className="">
                {/* <Image
                  src={'/church8.jpg'}
                  className="w-full scale-[1.7]  md:scale-[1] "
                  width={1024}
                  height={950}
                  alt="AI"
                /> */}

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[10rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
                    {/* {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))} */}
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

            {/* <Gradient /> */}
            {/* <BackgroundCircles parallaxRef={undefined} /> */}
          </div>
      

          {/* <BackgroundCircles parallaxRef={undefined} /> */}
          
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default HeroSlider;