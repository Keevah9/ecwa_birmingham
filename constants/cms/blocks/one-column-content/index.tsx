import "@splidejs/react-splide/css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons"
import { useRouter } from "next/router";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { getStrapiMedia } from "@/constants/lib/util/media";

interface OneColumnContentProp {
  IsHomepage: any;
  id: number
  HasVerticalList?: boolean;
  HasBackgroundColor?: boolean;
  data: OneColumnContentListsProp
}

interface OneColumnContentListsProp {
  StepListsTitle: string;
  HasBackgroundImage: boolean;
  id: number
  ButtonLinkTwo: string;
  ButtonLabelTwo: string;
  SectionTitle?: string;
  Title?: string;
  TopSectionContent?: string;
  BottomSectionContent?: string;
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
      <section className="flexible-component">
        <div>
          {props?.data.SectionTitle && (
            <h2>
              <span className="absolute -top-[120px]"></span>
              <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                {props?.data.SectionTitle}
              </ReactMarkdown>
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
          {props?.data.TopSectionContent && (
            <div className="one-col blog pb-2 lg:pb-0">
              <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                {props?.data.TopSectionContent}
              </ReactMarkdown>
            </div>
          )}
          {props?.data.Video && (
            <div className="one-col mb-2 hidden py-4 lg:block">
              <video
                loop
                playsInline
                preload="auto"
                controls={true}
                autoPlay={props?.data.VideoAutoPlay}
                muted={props?.data.VideoMuted}
                className="aspect-video w-full overflow-hidden rounded-lg"
              >
                <source src={props.data.Video} />
              </video>
            </div>
          )}
          {/* {props?.data.Images.length > 0 && (
            <div className="one-col flex w-full gap-6 mb-6 lg:mt-4">
              {props?.data.Images.map((image: any) => {
                return (
                  <div key={image?.ImageItem.attributes?.id} className="flex aspect-auto relative h-full w-full items-center justify-start"
                  >
                    {image?.ImageItem.data.attributes?.url ? (
                      <Image
                        style={{ borderRadius: "10px" }}
                        src={getStrapiMedia(
                          image?.ImageItem.data.attributes?.url
                        )}
                        priority
                        alt={image?.ImageItem.data.attributes?.name}
                        height={image?.ImageItem.data.attributes?.height}
                        quality={100}
                        width={image?.ImageItem.data.attributes?.width}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          )} */}
          {/* {//@ts-ignore
            props.data.Gallery.data.length > 0 && (
            <div className=" overflow-splide mt-2 w-full overflow-hidden pb-3 lg:pb-7">
              <div className={`oneColHero relative w-full lg:pb-5 `}>
                <Splide
                  className="splide"
                  hasTrack={false}
                  options={{
                    //@ts-ignore
                    rewind: "true",
                    perPage: 1,
                    perMove: 1,
                    pagination: true,
                    arrows: true,
                    lazyLoad: "nearby",
                    gap: "1.5rem",
                    snap: true,
                    speed: 1000,
                    easing: "linear",
                    interval: 5000,
                    type: "loop",
                    autoplay: true,
                    breakpoints: {
                      "560": {
                        arrows: false,
                      },
                    },
                  }}
                >
                  <SplideTrack className="splide__track">
                      { //@ts-ignore
                      props?.data.Gallery.data.map(
                      (content: any, index: any) => {
                        return (
                          <SplideSlide
                            key={content.id}
                            className="splide__splide"
                          >
                            <div
                              className="relative aspect-auto w-full cursor-pointer rounded-[10px]"
                              onClick={() => openLightboxOnSlide(index)}>
                              {content?.attributes.Image?.data?.attributes
                                .url ? (
                                <Image
                                  priority
                                  style={{ borderRadius: "10px" }}
                                  src={getStrapiMedia(
                                    content?.attributes.Image?.data?.attributes
                                      .url
                                  )}
                                  //@ts-ignore
                                  width={content?.attributes.Image?.data?.attributes.width}
                                  //@ts-ignore
                                  height={content?.attributes.Image?.data?.attributes.height}
                                  alt={content?.attributes.Title}
                                  quality={100}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </SplideSlide>
                        );
                      }
                    )}
                  </SplideTrack>
                  <div className={` splide__arrows  lg:-mt-8 lg:block`}>
                    <button className="splide__arrow splide__arrow--prev">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </Splide>
              </div>
            </div>
          )} */}

          {/* {props.data.OneColumnContentListItems.length > 0 && (
            <div className={`${router.asPath === "/portfolio-of-work" || (router.asPath === "/why-choose-unique-exhibitions" ? "mb-4 lg:-mt-0 lg:mb-0" : "my-4 lg:my-8")}`}>
              <ul className={`grid gap-4 lg:gap-6 ${props.IsHomepage ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"} ${router.asPath === "/portfolio-of-work" ? " py-2 grid grid-cols-1 md:grid-cols-2 lg:py-0 xl:grid-cols-3" : ""} ${props.data.HasVerticalList ? "has-vertical-list" : ""}`}>
                <OneColumnContentListItems OneColumnContentListItems={props.data.OneColumnContentListItems} HasBackgroundColor />
              </ul>
            </div>
          )} */}

          {props.data.OneColMultipleLists.map((item: OneColumnContentListsProp) => {
            return (
              <div key={item.id} className={`${router.asPath === "/portfolio-of-work" || (router.asPath === "/why-choose-unique-exhibitions" ? "mb-4 lg:-mt-0 lg:mb-0" : "my-6 lg:my-8")}`}>
                <ul className={` ${props.data.HasVerticalList && "has-vertical-list"}`}>
                  <div className={`${props.data.HasVerticalList && "pl-4"} pb-4`}>
                    {item.OneColListsTitle && <h2>{item.OneColListsTitle}</h2>}
                    {item.OneColListsContent && <p className=" pb-4">{item.OneColListsContent}</p>}
                  </div>
                  {/* <div className={` ${props.data.HasVerticalList ? "" : "grid gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2"} ${router.asPath === "/portfolio-of-work" && " py-2 grid grid-cols-1 md:grid-cols-2 lg:py-0 xl:grid-cols-3"} `}>
                    <OneColumnContentListItems OneColumnContentListItems={item.OneColMultipleLists} HasBackgroundColor />
                  </div> */}
                </ul>
              </div>
            )
          })}

          {/* {props?.data.StepLists.length > 0 &&
            <div className={` my-8 ${router.asPath === "/exhibition-stand-project-management" && "lg:h-[55rem] xl:h-full"} relative block min-h-full items-center overflow-hidden ${props?.data.StepTitle && 'sm:py-3'} rounded-lg bg-[#EFF6F9]`}>
              <StepList StepTitle={props.data.StepListsTitle} StepListItems={props.data.StepLists} HasBackgroundImage={props.data.HasBackgroundImage} />
            </div>} */}

          {props?.data.BottomSectionContent && (
            <div className="one-col bottom-content mt-4">
              <ReactMarkdown className="markdown " rehypePlugins={[rehypeRaw]}>
                {props?.data.BottomSectionContent}
              </ReactMarkdown>
            </div>
          )}
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
      <FsLightbox
        toggler={lightboxController.toggler}
        type="image"
        sourceIndex={lightboxController.sourceIndex}
        sources={imageArray}
      />
    </>
  );
}

// export default function OneColumnContent(props: OneColumnContentProp) {
//   const { setQuoteModalVisible } = useContext(ModalContext);
//   const router = useRouter()
//   const [lightboxController, setLightboxController] = useState({
//     toggler: false,
//     sourceIndex: 0,
//   });

//   const imageArray: Array<string> = [];

//   props.OneColumnContentImageGallery.map((item: any) => {
//     if (item?.attributes.Image?.data?.attributes.url) {
//       imageArray.push(
//         getStrapiMedia(item.attributes.Image?.data?.attributes.url)
//       );
//     }
//   });
//   function openLightboxOnSlide(index) {
//     setLightboxController({
//       toggler: !lightboxController.toggler,
//       sourceIndex: index,
//     });
//   }

//   return (
//     <>
//       <section className="flexible-component">
//         <div>
//           {props?.SectionTitle && (
//             <h2>
//               <span className="absolute -top-[120px]"></span>
//               <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
//                 {props?.SectionTitle}
//               </ReactMarkdown>
//             </h2>
//           )}
//           {props?.Video && (
//             <div className="one-col mb-2 block py-4 lg:hidden">
//               <video
//                 loop
//                 playsInline
//                 preload="auto"
//                 controls
//                 autoPlay={props?.VideoAutoPlay}
//                 muted={props?.VideoMuted}
//                 className="aspect-video w-full overflow-hidden rounded-lg"
//               >
//                 <source src={props.Video} />
//               </video>
//             </div>
//           )}
//           {props?.TopContent && (
//             <div className="one-col blog pb-2 lg:pb-0">
//               <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
//                 {props?.TopContent}
//               </ReactMarkdown>
//             </div>
//           )}
//           {props?.Video && (
//             <div className="one-col mb-2 hidden py-4 lg:block">
//               <video
//                 loop
//                 playsInline
//                 preload="auto"
//                 controls={true}
//                 autoPlay={props?.VideoAutoPlay}
//                 muted={props?.VideoMuted}
//                 className="aspect-video w-full overflow-hidden rounded-lg"
//               >
//                 <source src={props.Video} />
//               </video>
//             </div>
//           )}
//           {props?.Images.length > 0 && (
//             <div className="one-col flex w-full gap-6 mb-6 lg:mt-4">
//               {props?.Images.map((image: any) => {
//                 return (
//                   <div key={image?.ImageItem.attributes?.id} className="flex aspect-auto relative h-full w-full items-center justify-start"
//                   >
//                     {image?.ImageItem.data.attributes?.url ? (
//                       <Image
//                         style={{ borderRadius: "10px" }}
//                         src={getStrapiMedia(
//                           image?.ImageItem.data.attributes?.url
//                         )}
//                         priority
//                         alt={image?.ImageItem.data.attributes?.name}
//                         height={image?.ImageItem.data.attributes?.height}
//                         quality={100}
//                         width={image?.ImageItem.data.attributes?.width}
//                       />
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//           {props.OneColumnContentImageGallery.length > 0 && (
//             <div className=" overflow-splide mt-2 w-full overflow-hidden pb-3 lg:pb-7">
//               <div className={`oneColHero relative w-full lg:pb-5 `}>
//                 {" "}
//                 <Splide
//                   className="splide"
//                   hasTrack={false}
//                   options={{
//                     //@ts-ignore
//                     rewind: "true",
//                     perPage: 1,
//                     perMove: 1,
//                     pagination: true,
//                     arrows: true,
//                     lazyLoad: "nearby",
//                     gap: "1.5rem",
//                     snap: true,
//                     speed: 1000,
//                     easing: "linear",
//                     interval: 5000,
//                     type: "loop",
//                     autoplay: true,
//                     breakpoints: {
//                       "560": {
//                         arrows: false,
//                       },
//                     },
//                   }}
//                 >
//                   <SplideTrack className="splide__track">
//                     {props?.OneColumnContentImageGallery.map(
//                       (content: any, index: any) => {
//                         return (
//                           <SplideSlide
//                             key={content.id}
//                             className="splide__splide"
//                           >
//                             <div
//                               className="relative aspect-auto w-full cursor-pointer rounded-[10px]"
//                               onClick={() => openLightboxOnSlide(index)}>
//                               {content?.attributes.Image?.data?.attributes
//                                 .url ? (
//                                 <Image
//                                   priority
//                                   style={{ borderRadius: "10px" }}
//                                   src={getStrapiMedia(
//                                     content?.attributes.Image?.data?.attributes
//                                       .url
//                                   )}
//                                   //@ts-ignore
//                                   width={content?.attributes.Image?.data?.attributes.width}
//                                   //@ts-ignore
//                                   height={content?.attributes.Image?.data?.attributes.height}
//                                   alt={content?.attributes.Title}
//                                   quality={100}
//                                 />
//                               ) : (
//                                 ""
//                               )}
//                             </div>
//                           </SplideSlide>
//                         );
//                       }
//                     )}
//                   </SplideTrack>
//                   <div className={` splide__arrows  lg:-mt-8 lg:block`}>
//                     <button className="splide__arrow splide__arrow--prev">
//                       <FontAwesomeIcon icon={faArrowRight} />
//                     </button>
//                     <button className="splide__arrow splide__arrow--next">
//                       <FontAwesomeIcon icon={faArrowRight} />
//                     </button>
//                   </div>
//                 </Splide>
//               </div>
//             </div>
//           )}

//           {props.OneColumnContentListItems.length > 0 && (
//             <div className={`${router.asPath === "/portfolio-of-work" || (router.asPath === "/why-choose-unique-exhibitions" ? "mb-4 lg:-mt-0 lg:mb-0" : "my-4 lg:my-8")}`}>
//               <ul className={`grid gap-4 lg:gap-6 ${props.IsHomepage ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"} ${router.asPath === "/portfolio-of-work" ? " py-2 grid grid-cols-1 md:grid-cols-2 lg:py-0 xl:grid-cols-3" : ""} ${props.HasVerticalList ? "has-vertical-list" : ""}`}>
//                 <OneColumnContentListItems OneColumnContentListItems={props.OneColumnContentListItems} HasBackgroundColor={props.HasBackgroundColor} />
//               </ul>
//             </div>
//           )}

//           {props.OneColMultipleListsData.map((item: OneColumnContentListsProp) => {
//             return (
//               <div key={item.id} className={`${router.asPath === "/portfolio-of-work" || (router.asPath === "/why-choose-unique-exhibitions" ? "mb-4 lg:-mt-0 lg:mb-0" : "my-6 lg:my-8")}`}>
//                 <ul className={`grid gap-4 lg:gap-6 ${props.IsHomepage ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"} ${router.asPath === "/portfolio-of-work" ? " py-2 grid grid-cols-1 md:grid-cols-2 lg:py-0 xl:grid-cols-3" : ""} ${props.HasVerticalList ? "has-vertical-list" : ""}`}>
//                   {item.OneColListsTitle && <h2 className=" pl-4 pb-2">{item.OneColListsTitle}</h2>}
//                   {item.OneColListsContent && <p className=" pb-2 lg:pb-6 pl-4">{item.OneColListsContent}</p>}
//                   <OneColumnContentListItems OneColumnContentListItems={item.OneColMultipleLists} HasBackgroundColor={props.HasBackgroundColor} />
//                 </ul>
//               </div>
//             )
//           })}

//           {props?.StepListItems.length > 0 &&
//             <div className={` my-8 ${router.asPath === "/exhibition-stand-project-management" && "lg:h-[55rem] xl:h-full"} relative block min-h-full items-center overflow-hidden ${props?.StepTitle && 'sm:py-3'} rounded-lg bg-[#EFF6F9]`}>
//               <StepList StepTitle={props.StepTitle} StepListItems={props.StepListItems} HasBackgroundImage={false} />
//             </div>}

//           {props?.BottomContent && (
//             <div className="one-col bottom-content mt-4">
//               <ReactMarkdown className="markdown " rehypePlugins={[rehypeRaw]}>
//                 {props?.BottomContent}
//               </ReactMarkdown>
//             </div>
//           )}
//         </div>

//         {props.HasButton && (
//           <div className="flex sm:flex-row flex-col gap-5 mt-12 items-center">
//             {props.ButtonLinkTwo && <div className=" w-full sm:w-fit flex justify-start">
//               <DynamicButton
//                 link={props.ButtonLink || "/portfolio-of-work"}
//                 label={props.ButtonLabelTwo || 'View our Portfolio'}
//                 buttonStyle={" w-full inline-flex cursor-pointer  items-center justify-center px-2 xs:px-4 pr-3 font-medium text-black bg-[#D8EDF5] text-[18px] sm:min-w-[200px] py-[15px] px-[15px] 2xl:px-[20px] "}
//               />
//             </div>}
//             <div className=" w-full sm:w-fit flex justify-start">
//               <DynamicButton
//                 link={props.ButtonLink || "/request-a-quote"}
//                 label={props.ButtonLabel || 'Get a FREE No-Obligation Quote'}
//                 buttonStyle={" w-full inline-flex cursor-pointer items-center justify-center px-2 xs:px-4 pr-3 text-white font-medium sm:min-w-[260px] py-[15px] px-[15px] text-[18px] 2xl:px-[25px]"}
//               />
//             </div>
//           </div>
//         )}
//       </section>
//       <FsLightbox
//         toggler={lightboxController.toggler}
//         type="image"
//         sourceIndex={lightboxController.sourceIndex}
//         sources={imageArray}
//       />
//     </>
//   );
// }
