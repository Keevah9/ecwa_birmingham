import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSpinnerThird,
} from "@fortawesome/pro-solid-svg-icons";

import { useRouter } from "next/router";
import { getStrapiMedia } from "../../../lib/utils/api";
import SplideArrows from "../../../components/Common/splide-arrows";

export default function BlogCaseStudiesBlock(props: any) {
  return (
    <div className={`relative  h-full mb-16 splide-slider splide-slider-blog-arrow lg:mb-40 ${props.isHomePage ? '' : 'box-shadow'}`}>
      {props.data.CaseStudies ? (
        <div className="relative z-20 w-full">
          <Splide
            className="splide"
            hasTrack={false}
            options={{
              //@ts-ignore
              rewind: false,
              perPage: 1,
              perMove: 1,
              pagination: false,
              arrows: true,
              gap: "1rem",
              lazyLoad: "nearby",
              snap: true,
              autoplay: false,
            }}
          >
            <SplideTrack
              className={`splide__track ${props.isHomepage && "rounded-[15px] "
                }`}
            >
              {props.data?.CaseStudies.map((content: any) => {
                return (
                  <SplideSlide key={content.id} className="splide__splide">
                    <div
                      className={`w-full grid lg:grid-cols-[3fr_4fr] gap-8  flex-col items-center  rounded-[15px] border-[#EEEEEE] py-6  lg:flex-row lg:gap-8  ${props.isHomepage
                        ? " border-b border-l border-r border-t bg-white px-7 lg:border-b-0 lg:border-l lg:border-r-0 lg:border-t-0 lg:px-10 2xl:px-12"
                        : " rounded-[15px] bg-white px-4 lg:px-6 "
                        }`}
                    >
                      <div className="relative aspect-square overflow-hidden flex items-center justify-center lg:w-5/12">
                        {content?.Image?.data?.attributes.url ? (
                          <Image
                            src={getStrapiMedia(
                              content?.Image?.data?.attributes.url
                            )}
                            alt={content?.ListItemTitle}
                            quality={100}
                            className={"aspect-4/3 object-cover"}
                            height={content?.Image?.data?.attributes.height}
                            width={content?.Image?.data?.attributes.width}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="w-full lg:w-7/12">
                        <div className="relative">
                          {content?.Icon?.data?.attributes.url ? (
                            <Image
                              src={getStrapiMedia(
                                content?.Icon?.data?.attributes.url
                              )}
                              alt={content?.ListItemTitle}
                              height={content?.Icon?.data?.attributes.height}
                              width={content?.Icon?.data?.attributes.width}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        {content?.Content &&
                          <div className=" w-full pt-3 ">
                            <p className={`max-w-[39rem]  text-[14px] font-semibold lg:text-[16px] `}
                            >
                              {content?.Content}
                            </p>
                          </div>}
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
            </SplideTrack>
            <SplideArrows />
          </Splide>
        </div>
      ) : (
        <div className={"flex items-center justify-center rounded-md py-4"}>
          <FontAwesomeIcon
            icon={faSpinnerThird}
            className={"text-4xl text-black"}
            spin
          />
        </div>
      )}
    </div>
  );
}
