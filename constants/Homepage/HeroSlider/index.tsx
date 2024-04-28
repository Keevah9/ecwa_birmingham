// import React, { useContext } from "react";
// import "@splidejs/react-splide/css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
// import Shadow from "../../../../public/img/Rectangle.png";
// import Image from "next/image";
// //@ts-ignore
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// //@ts-ignore
// import { Video } from '@splidejs/splide-extension-video';
// import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
// import { ModalContext } from "@/constants/lib/context/demo-modal";
// import { getStrapiMedia } from "@/constants/lib/util/media";
// import Button from "@/components/Button";
// import ArticleCard from "@/components/article-card";
// import ReactMarkdown from "react-markdown";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";


// interface HeroSliderProps {
//   HeroSlider: [];
// }

// export default function HeroSlider(props: HeroSliderProps) {
//   const { setQuoteModalVisible } = useContext(ModalContext);
//   // const detectMobile = useMobileDetect();
//   // console.log(props.He)
//   return (
  
//     <div className="relative mb-60">
      // <div className="xs:mx-auto z-10 heroslider max-h-[560px] md:min-h-[440px] lg:min-h-[650px] min-h-[370px] bg-ecwadarkblue">
      //   <Splide
      //     hasTrack={false}
      //     options={{
      //       arrows: true,
      //       type: "fade",
      //       speed: 1500,
      //       easing: "linear",
      //       interval: 7000,
      //       rewind: true,
      //       autoplay: true,
      //       pauseOnFocus: false,
      //       pauseOnHover: false,
      //       breakpoints: {
      //         1110: {
      //           speed: 500,
      //           interval: 6000,
      //         },
      //         768: {
      //           speed: 500,
      //           interval: 6000,
      //         },
      //         540: {
      //           speed: 500,
      //           interval: 6000,
      //         },
      //       },
      //     }}
      //   >
      //     <SplideTrack>
      //       {props.HeroSlider.map((data: any, index: number) => (
      //         // console.log(`${getStrapiMedia(data.Image.data.attributes.url)}`)
      //         <React.Fragment key={index}>
      //           {data.VimeoLink ? (
      //             <SplideSlide>
      //               <div className="relative max-h-[560px] min-h-[370px] md:min-h-[440px] lg:min-h-[560px] overflow-hidden">
      //                 <video autoPlay loop playsInline muted preload="auto" poster="" className="absolute lg:static top-0 left-0 right-0 bottom-0 min-h-[370px] lg:min-h-[560px] w-full h-full scale-[1.7] lg:scale-100">
      //                   <source src={data.VimeoLink} />
      //                 </video>
      //                 <div className="absolute top-0 left-0 right-0 bottom-0 flex items-cente justify-center flex-col xs:pt-[80px] xs:pb-[60px] md:container text-cente text-white min-h-[370px] md:min-h-[440px] lg:min-h-[560px]">
      //                   <h2 className="xs:text-[33px] xs:leading-tight xs:p-2 md:text-[45px] lg:text-[60px] font-bold drop-shadow-[0_15px_15px_rgba(0,0,0,1)]"> {data.Title} </h2>
      //                   {data.ButtonLabel != null && (
      //                     <Button type={"button"} title={""} variant={""} />
      //                   )}
      //                 </div>
      //               </div>
      //             </SplideSlide>

      //           ) : (
      //             <SplideSlide key={index}>
      //                 <div className={`${data.VimeoLink != null ? 'hidden' : ''} grid grid-cols-1 sm:grid-cols-12 xs:w-full xs:bg-no-repeat xs:bg-cover xs:bg-bottom md:px-[5%] lg:px-[10%] lg:py-[6%] min-h-[370px] md:min-h-[440px] lg:min-h-[650px] max-h-[650px]`}>
      //                   <motion.div
      //                     initial={{ opacity: 0, scale: 0.5 }}
      //                     animate={{ opacity: 1, scale: 1 }}
      //                     transition={{ duration: 0.5 }}
      //                     className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      //                   >
      //                 <div className="xs:pt-[80px] xs:pb-[60px] md:container text-cente text-white ">
      //                   <span className=" text-[24px]">text {data.Subtitle}</span>
      //                       {/* <TypeAnimation
      //                         sequence={[
      //                           data.Title, 1000
      //                         ]}
      //                         wrapper="span"
      //                         speed={50}
      //                         // repeat={Infinity}
      //                       /> */}
      //                   <h1 className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] text-white mb-12 xs:leading-tight font-black"> {data.Title} </h1>
      //                   <ReactMarkdown>{data.Content}</ReactMarkdown>
      //                   <div className="flex gap-8">
      //                     {data.ButtonLabel != null && (
      //                       <><Button type={"button"} title={data.ButtonLabel} link={`/${data.ButtonUrl}`} variant={"btn_orange"} /><Button type={"button"} title={'Contact Us'} link={`/contact-us`} variant={"btn text-white"} /></>
      //                     )}
      //                   </div>

      //                 </div>

      //                   </motion.div>
      //                   <motion.div
      //                     initial={{ opacity: 0, scale: 0.5 }}
      //                     animate={{ opacity: 1, scale: 1 }}
      //                     transition={{ duration: 0.5 }}
      //                     className="col-span-4 place-self-center mt-4 lg:mt-0"
      //                   >
      //                     <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
      //                       <Image
      //                         src="/images/hero-image.png"
      //                         alt="hero image"
      //                         className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      //                         width={300}
      //                         height={300}
      //                       />
      //                     </div>
      //                   </motion.div>
      //               </div>
      //             </SplideSlide>
      //           )}
      //         </React.Fragment>
      //       ))}
      //     </SplideTrack>
      //     {/* <ul className="drop-shadow-xl splide__pagination mb-10"></ul> */}
      //   </Splide>

//         <div className="max-container">
//           <div className="grid sm:grid-cols-3 grid-cols-1 z-20 grid-cols-3 items-center justify-center absolute gap-6 mx-auto w-full -bottom-36 right-0 left-0 max-container ">
//             <ArticleCard date={undefined} title={"test"} content={"text"} imgSize={""} ImageProps={'/ecwa-logo.png'} />
//             <ArticleCard date={undefined} title={"test"} content={"text"} imgSize={""} ImageProps={'/ecwa-logo.png'} />
//             <ArticleCard date={undefined} title={"test"} content={"text"} imgSize={""} ImageProps={'/ecwa-logo.png'} />
//           </div>
//         </div>
//         {/* <Image src={'/pppointed.svg'} width={200} height={200} /> */}
//       </div>
//     </div>
//   );
// }




// import { curve, heroBackground, robot } from "../assets";
// import Button from "./Button";
// import Section from "./Section";
// import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { curve, heroBackground, robot } from "@/assets";
import { heroIcons } from "@/constants";
import { BackgroundCircles, BottomLine, Gradient } from "@/components/design/hero";
import Notification from "@/components/Notification";
import Generating from "@/components/Generating";
import React, { useContext } from "react";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
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
      className="pt-[12rem] -mt-[5.25rem] bg-ecwadarkblue"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className=" relative" ref={parallaxRef}>
        <div className="relative z-  bg-ecwadarkblu mx-auto text-center mb-[3.875rem md:mb- lg:mb-[6.25rem">
          <div className="xs:mx-auto z-10 heroslider max-h-[560px] md:min-h-[440px] lg:min-h-[700px] min-h-[370px] bg-ecwadarkblu">
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
                        <div className={`${data.VimeoLink != null ? 'hidden' : ''}  xs:w-full xs:bg-no-repeat xs:bg-cover xs:bg-bottom md:px-[5%] flex flex-col py-[3%] lg:px-[10%] text-center max-container min-h-[370px md:min-h-[440px lg:h-[690px `}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="col-span-8 place-self-center text-center "
                          >
                            <div className="xs:pt-[80px] xs:pb-[60px] md:container text-center text-white ">
                              <span className=" text-[24px]">text {data.Subtitle}</span>
                                <span className="inline-block relative">
                                 
                                  
                                </span>
                              
                              <h1 className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] text-white text-center mb-1 xs:leading-tight font-black"> {data.Title} </h1>
                                <Image
                                  src={curve}
                                  className="absolute top-full left-0 w-full xl:-mt-2"
                                  width={624}
                                  height={28}
                                  alt="Curve"
                                />
                                <div className="max-w-2xl h-[4rem] mt-10 mb-20" ><ReactMarkdown >{data.Content}</ReactMarkdown></div>
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
                  <ul className="hidden absolute -left-[10rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[1rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            {/* <Gradient /> */}
            {/* <BackgroundCircles parallaxRef={undefined} /> */}
          </div>
      

          <BackgroundCircles parallaxRef={undefined} />
          
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default HeroSlider;