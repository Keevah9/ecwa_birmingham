import "@splidejs/react-splide/css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/pro-solid-svg-icons"
import { useRouter } from "next/router";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { getStrapiMedia } from "@/constants/lib/util/media";
import Button from "@/components/Button";
import { GuideItem } from "@/components/Guide";

interface OneColumnContentProp {
  IsHomepage: any;
  id: number
  HasVerticalList?: boolean;
  HasBackgroundColor?: boolean;
  data: OneColumnContentListsProp
}

interface OneColumnContentListsProp {
  hasVideo: any;
  override: string;
  StepListsTitle: string;
  HasBackgroundImage: boolean;
  id: number
  ButtonLinkTwo: string;
  ButtonLabelTwo: string;
  SectionTitle?: string;
  Title?: string;
  TopContent?: string;
  Content?: string;
  Video?: string;
  VideoAutoPlay?: boolean;
  VideoMuted?: boolean;
  Images?: [];
  HasBackgroundColor?: boolean;
  HasBackgroundColour?: boolean;
  Gallery: [];
  OneColumnContentListItems?: [];
  IsHomepage?: boolean;
  HasButton?: boolean;
  HasVerticalList?: boolean;
  ButtonLabel: string;
  ButtonLink: string;
  StepLists: [];
  StepTitle: string;
  OneColListsContent: string;
  OneColListsTitle: string;
  OneColMultipleLists: []
}

export default function OneColumnContentBlock(props: OneColumnContentProp) {
  const router = useRouter()
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  const imageArray: Array<string> = [];
  //@ts-ignore
  // props.data.Gallery.data.map((item: any) => {
  //   if (item?.attributes.Image?.data?.attributes.url) {
  //     imageArray.push(
  //       getStrapiMedia(item.attributes.Image?.data?.attributes.url)
  //     );
  //   }
  // });
  // function openLightboxOnSlide(index) {
  //   setLightboxController({
  //     toggler: !lightboxController.toggler,
  //     sourceIndex: index,
  //   });
  // }

  return (
    <>
     
      <section className={`${props.data.override === 'blue' && ' bg-ecwadarkblue py-12'} ${props.data.override === 'orange' && 'bg-ecwadarkblue'}`}>
        <div className="max-container overflow-splide">
          {/* <span className="absolute -top-[10px]"></span> */}
          {props?.data.SectionTitle && (
            <h2 className={`leading-[35px] text-center ${props.data.override === 'blue' && '!text-white'}`} >
              {/* <span className="absolute -top-[10px]"></span> */}
              {props?.data.SectionTitle}

            </h2>
          )}
          {props?.data.Video && (
            <div className="one-col mb-2 block py-4 lg:hidden">
              <video
                loop
                playsInline
                preload="auto"
                controls
                autoPlay={props?.data.VideoAutoPlay}
                muted={props?.data.VideoMuted}
                className="aspect-video w-full overflow-hidden rounded-lg"
              >
                <source src={props.data.Video} />
              </video>
            </div>
          )}
          {props?.data.Content && (
            <div className={`  ${props.data.override === 'blue' && 't-white'} one-col blog pb-2 lg:pb-0`}>
              <ReactMarkdown className={`${props.data.override === 'blue' && 't-white'} markdown`} rehypePlugins={[rehypeRaw]}>
                {props?.data.Content}
              </ReactMarkdown>
            </div>
          )}
          {props?.data.hasVideo && (
            <GuideItem/>
          )}

          {props?.data?.OneColMultipleLists.length > 0 ?
            <>{props?.data?.OneColMultipleLists.length <= 4 && <div className={`  grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3  mt-10 gap-10 `}>
              {props?.data?.OneColMultipleLists?.map((item: OneColumnContentListsProp) => {
                return (
                  <div key={item.id} className="">
                    <ul className={` w-fit`}>
                      <div className={`w-fit`}>
                        {item.SectionTitle && <h4 className={`${props.data.override === 'blue' && '!text-ecwadarkblue'}`}>{item.SectionTitle}</h4>}
                        {item.Content && <p className={`${props.data.override === 'blue' && 'text-white'}`}>{item.Content}</p>}
                      </div>
                    </ul>
                  </div>
                );
              })}
            </div>}<div className="mt-10">
                {//@ts-ignore
                  props?.data?.OneColMultipleLists.length > 4 && (
                    <div className=" overflow-splide mt-2 w-full overflow-hidden pb-3 lg:pb-7">
                      <div className={`oneColHero relative w-full lg:pb-5 `}>
                        <Splide
                          className="splide"
                          hasTrack={false}
                          options={{
                            //@ts-ignore
                            rewind: "true",
                            perPage: 3,
                            perMove: 1,
                            pagination: false,
                            arrows: false,
                            lazyLoad: "nearby",
                            gap: "1.5rem",
                            snap: true,
                            speed: 1000,
                            easing: "linear",
                            interval: 5000,
                            type: "loop",
                            autoplay: true,
                            breakpoints: {
                              "1023": {
                                arrows: false,
                                perPage: 2
                              },
                              "560": {
                                arrows: false,
                                perPage: 1
                              },
                            },
                          }}
                        >
                          <SplideTrack className="splide__track">
                            {//@ts-ignore
                              props?.data?.OneColMultipleLists?.map(
                                (item: any, index: any) => {
                                  return (
                                    <SplideSlide
                                      key={item.id}
                                      className="splide__splide"
                                    >
                                      <div className="text-center h-full py-6 px-3 rounded-[5px] bg-ecwadarkblue">
                                        <ul className={`text-center flex flex-col justify-center items-center `}>
                                          <div className={`!text-center flex flex-col justify-center items-center items-center`}>
                                            {item.SectionTitle && <h4 className={` text-center leading-[32px] mb-4 text-white max-w-[15rem] mx-auto h-[5rem] ${props.data.override === 'blue' && '!text-ecwadarkblue'}`}>{item.SectionTitle}</h4>}
                                            {item.Content && <p className={`text-white ${props.data.override === 'blue' && 'text-white'}`}>{item.Content}</p>}
                                          </div>
                                        </ul>
                                      </div>
                                    </SplideSlide>
                                  );
                                }
                              )}
                          </SplideTrack>
                          <div className={` splide__arrows  lg:-mt-8 lg:block`}>
                            {/* <button className="splide__arrow splide__arrow--prev">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </button> */}
                          </div>
                        </Splide>
                      </div>
                    </div>
                  )}
              </div></>
            : null}

          {/* {props?.data.StepLists.length > 0 &&
            <div className={` my-8 ${router.asPath === "/exhibition-stand-project-management" && "lg:h-[55rem] xl:h-full"} relative block min-h-full items-center overflow-hidden ${props?.data.StepTitle && 'sm:py-3'} rounded-lg bg-[#EFF6F9]`}>
              <StepList StepTitle={props.data.StepListsTitle} StepListItems={props.data.StepLists} HasBackgroundImage={props.data.HasBackgroundImage} />
            </div>} */}


        </div>

        {/* {props.data.HasButton && (
          <div className="flex sm:flex-row flex-col gap-5 mt-12 items-center">
            {props.data.ButtonLinkTwo && <div className=" w-full sm:w-fit flex justify-start">
              <DynamicButton
                link={props.data.ButtonLink || "/portfolio-of-work"}
                label={props.data.ButtonLabelTwo || 'View our Portfolio'}
                buttonStyle={" w-full inline-flex cursor-pointer  items-center justify-center px-2 xs:px-4 pr-3 font-medium text-black bg-[#D8EDF5] text-[18px] sm:min-w-[200px] py-[15px] px-[15px] 2xl:px-[20px] "}
              />
            </div>}
            <div className=" w-full sm:w-fit flex justify-start">
              <DynamicButton
                link={props.data.ButtonLink || "/request-a-quote"}
                label={props.data.ButtonLabel || 'Get a FREE No-Obligation Quote'}
                buttonStyle={" w-full inline-flex cursor-pointer items-center justify-center px-2 xs:px-4 pr-3 text-white font-medium sm:min-w-[260px] py-[15px] px-[15px] text-[18px] 2xl:px-[25px]"}
              />
            </div>
          </div>
        )} */}
      </section>
      {/* <FsLightbox
        toggler={lightboxController.toggler}
        type="image"
        sourceIndex={lightboxController.sourceIndex}
        sources={imageArray}
      /> */}
    </>
  );
}


