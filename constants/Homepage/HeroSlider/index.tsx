import React, { useContext } from "react";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import Shadow from "../../../../public/img/Rectangle.png";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//@ts-ignore
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import { ModalContext } from "@/constants/lib/context/demo-modal";
import { getStrapiMedia } from "@/constants/lib/util/media";
import Button from "@/components/Button";

interface HeroSliderProps {
  HeroSlider: [];
}

export default function HeroSlider(props: HeroSliderProps) {
  const { setQuoteModalVisible } = useContext(ModalContext);
  // const detectMobile = useMobileDetect();
  // console.log(props.He)
  return (
    // <>
    //   <div className="heroSlider relative w-full">
    //     <Splide
    //       hasTrack={false}
    //       options={{
    //         arrows: true,
    //         type: "fade",
    //         speed: 1500,
    //         easing: "linear",
    //         interval: 7000,
    //         rewind: true,
    //         autoplay: true,
    //         pauseOnFocus: false,
    //         pauseOnHover: false,
    //         breakpoints: {
    //           1110: {
    //             speed: 500,
    //             interval: 6000,
    //           },
    //           768: {
    //             speed: 500,
    //             interval: 6000,
    //           },
    //           540: {
    //             speed: 500,
    //             interval: 6000,
    //           },
    //         },
    //       }}
    //     >
    //       <SplideTrack>
    //         {props?.HeroSlider?.map((data: any, index: number) => (
    //           <React.Fragment key={index}>
    //             <SplideSlide key={index}>
    //               <div
    //                 className={` flex min-h-[300px] w-full flex-col overflow-hidden justify-center bg-cover bg-no-repeat bg-center md:min-h-[700px]  lg:min-h-[1100px] lg:bg-center  `}
    //               >
    //                 {data?.Images?.data?.attributes.url ?
    //                 <div className="relative min-h-[200px]  hidden text-center text-white xs:-mt-[30px] lg:mt-0  xs:pb-[0px] lg:block ">

    //                   <h1 className=" mx-auto mb-12 hidden px-2 text-[26px] font-extralight leading-[45px] lg:block lg:text-[55px] lg:leading-tight ">
    //                     {" "}
    //                     <p className="inline font-extralight text-white lg:block">
    //                       Multi{" "}
    //                       <span className="pl-2 font-black  text-white lg:pl-0">
    //                         Award Winning
    //                       </span>{" "}
    //                     </p>
    //                     Design And Build
    //                     <p className="inline pl-2 font-light text-white lg:block lg:pl-0">
    //                       <span className="font-black  text-white">
    //                         Exhibition Stand
    //                       </span>{" "}
    //                       Company
    //                     </p>
    //                   </h1>
    //                 </div>
    //                   <Image
    //                     src={getStrapiMedia(data?.Images?.data?.attributes.url)}
    //                     layout="fill"
    //                     objectFit="cover"
    //                     quality={100}
    //                     alt={data?.Images?.data?.attributes.alternativeText}
    //                     priority={index===0}
    //                   /> : ''
    //                 }

    //                 <div className="hidden lg:block">
    //                   <Image
    //                     src={Shadow}
    //                     alt="background shadow image"
    //                     width={800}
    //                     height={600}
    //                     layout="fill"
    //                     objectFit="contain"
    //                   />
    //                 </div>
                    
    //                 <span
    //                   className="z-40 mx-auto mt-8 hidden min-w-[350px]  max-w-[350px] text-center lg:block"
    //                   onClick={() => setQuoteModalVisible(true)}
    //                 >
                    
    //               </div>
    //             </SplideSlide>
    //           </React.Fragment>
    //         ))}
    //       </SplideTrack>
    //       <ul className="splide__pagination beespoke-pagination mb-3 sm:mb-10"></ul>
    //       <div className={`splide__arrows home-bespoke-splide-arrow block`}>
    //         <button className="splide__arrow splide__arrow--prev">
    //           <FontAwesomeIcon
    //             icon={faArrowRight}
    //             className="font-bold text-white"
    //           />
    //         </button>
    //         <button className="splide__arrow splide__arrow--next">
    //           <FontAwesomeIcon icon={faArrowRight} className="text-white" />
    //         </button>
    //       </div>
    //       <div className="block bg-uniquedarkgrey pb-[20px] text-center text-white ss:pb-[40px] ss:pt-[25px] lg:hidden ">
    //         <h1 className="mx-auto mb-4 block px-2 text-[26px] font-extralight leading-[45px] text-white sm:mb-7 sm:text-[40px] lg:hidden lg:text-[55px] lg:leading-tight ">
    //           {" "}
    //           <p className="inline text-white lg:block">
    //             Multi{" "}
    //             <span className="pl-1 font-black  text-white lg:pl-0">
    //               Award Winning
    //             </span>{" "}
    //           </p>
    //           Design And Build
    //           <p className="inline pl-1 text-white lg:block lg:pl-0">
    //             <span className="font-black  text-white">
    //               Exhibition Stand
    //             </span>{" "}
    //             Company
    //           </p>
    //         </h1>

    //       </div>
    //     </Splide>
    //   </div>
    // </>
    <>
      <div className="xs:mx-auto heroslider max-h-[560px] md:min-h-[440px] lg:min-h-[560px] min-h-[370px] overflow-hidden">
        <Splide
          hasTrack={false}
          extensions={{ Video }}
          options={{
            type: "rewind", perPage: 1, perMove: 1, pagination: true, lazyLoad: "nearby", arrows: true, gap: 16, autoplay: false,
            breakpoints: {
              "1440": {
                perPage: 1,
              },
              "1280": {
                perPage: 1,
              },
              "1024": {
                perPage: 1,
              },
              "575": {
                type: "fade",
                perPage: 1,
              },
            },

          }}
        >
          <SplideTrack>
            {props.HeroSlider.map((data: any, index: number) => (
              // console.log(`${getStrapiMedia(data.Image.data.attributes.url)}`)
              <React.Fragment key={index}>
                {data.VimeoLink ? (
                  <SplideSlide>
                    <div className="relative max-h-[560px] min-h-[370px] md:min-h-[440px] lg:min-h-[560px] overflow-hidden">
                      <video autoPlay loop playsInline muted preload="auto" poster="" className="absolute lg:static top-0 left-0 right-0 bottom-0 min-h-[370px] lg:min-h-[560px] w-full h-full scale-[1.7] lg:scale-100">
                        <source src={data.VimeoLink} />
                      </video>
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col xs:pt-[80px] xs:pb-[60px] md:container text-center text-white min-h-[370px] md:min-h-[440px] lg:min-h-[560px]">
                        <h2 className="xs:text-[33px] xs:leading-tight xs:p-2 md:text-[45px] lg:text-[60px] font-bold drop-shadow-[0_15px_15px_rgba(0,0,0,1)]"> {data.Title} </h2>
                        {data.ButtonLabel != null && (
                          <Button type={"button"} title={""} variant={""}  />
                        )}
                      </div>
                    </div>
                  </SplideSlide>

                ) : (
                  <SplideSlide key={index}>
                    <div style={{ backgroundImage: `url(${data.Image.data.attributes.url})` }} className={`${data.VimeoLink != null ? 'hidden' : ''} xs:w-full xs:bg-no-repeat xs:bg-cover xs:bg-bottom md:px-[5%] lg:px-[10%] lg:py-[6%] min-h-[370px] md:min-h-[440px] lg:min-h-[560px] max-h-[560px]`}>
                      <div className="xs:pt-[80px] xs:pb-[60px] md:container text-center text-white ">
                        <span>{data.Subtitle}</span>
                        <h2 className="drop-shadow-[0_15px_15px_rgba(0,0,0,1)] xs:text-[33px] xs:leading-tight xs:p-2 md:text-[45px] lg:text-[60px] font-bold"> {data.Title} </h2>
                        {data.ButtonLabel != null && (
                          <Button type={"button"} title={data.ButtonLabel} link={`/${data.ButtonUrl}`} variant={""}/>
                          // <ButtonSolid label={data.ButtonLabel} link={data.ButtonLink} buttonStyle={"mx-auto w-[90vw] md:w-auto md:inline-flex justify-center flex xs:px-16 xs:py-3 xs:mt-10 xs:text-[18px] lg:px-12 lg:py-4 lg:text-[20px]"} />
                        )}
                      </div>
                    </div>
                  </SplideSlide>
                )}
              </React.Fragment>
            ))}
          </SplideTrack>
          <ul className="drop-shadow-xl splide__pagination mb-10"></ul>
        </Splide>
      </div>
    </>
  );
}
