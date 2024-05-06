import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { Grid } from "@splidejs/splide-extension-grid";
//@ts-ignore
import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getStrapiMedia } from "@/constants/lib/util/media";

interface GridGalleryProps {
  SectionTitle?: string;
  GridGalleryImages: [];
  HasLink?: boolean;
  isHomepage?: boolean;
}

export default function GridGallery(props: GridGalleryProps) {
  const router = useRouter();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });
  const imageArray: Array<string> = [];

  props?.GridGalleryImages?.map((item: any) => {
    if (item?.attributes.Image?.data?.attributes.url) {
      imageArray.push(item.attributes.Image?.data?.attributes.url)
    }
  });
  function openLightboxOnSlide(index: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: index,
    });
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className={`relative w-full`}>
        {props.SectionTitle && (
          <h2
            className={`max-container`}
          >
            {props.SectionTitle}
          </h2>
        )}

        <div className="relative w-full">
          <div
            className={`splide-slider  relative pt-4 `}
          >
            {props?.GridGalleryImages ? (
              <Splide
                className="splide"
                hasTrack={false}
                options={{
                  //@ts-ignore
                  rewind: false,
                  perPage: 3,
                  perMove: 1,
                  pagination: false,
                  arrows: false,
                  lazyLoad: "nearby",
                  gap: "1rem",
                  snap: true,
                  speed: 700,
                  easing: "linear",
                  interval: 4000,
                  autoplay: true,
                  
                  breakpoints: {
                    "1280": {
                      pagination: false,
                      // perPage: props.isHomepage ? 2 : 1.2,
                      gap: "1rem",
                      
                    },
                    "1023": {
                      pagination: false,
                      perPage: 2,
                      speed: 700,
                      gap: "1rem",
                      
                    },
                    "650": {
                      pagination: false,
                      perPage: 2,
                      speed: 700,
                      gap: "1rem",
                      grid: {
                        rows: 2,
                        cols: 1,
                        gap: {
                          row: ".8rem",
                          col: ".8rem",
                        },
                      },
                    },
                    "540": {
                      pagination: false,
                      perPage: 1,
                      speed: 700,
                      gap: ".6rem",
                     
                    },
                    "360": {
                      pagination: false,
                      perPage: 1,
                      speed: 700,
                      gap: "1rem",
                      grid: {
                        rows: 2,
                        cols: 1,
                        gap: {
                          row: ".6rem",
                          col: ".6rem",
                        },
                      },
                    },
                  },
                }}
                // extensions={{ Grid }}
              >
                <SplideTrack className="splide__track w-full">
                  {props?.GridGalleryImages?.map(
                    (content: any, index: any) => {
                      return (
                        <SplideSlide
                          key={content.id}
                          className="splide__splide "
                        >
                          <div
                            className="relative min-h-[240px] min-w-[200px]  max-w-full cursor-pointer sm:min-w-[300px] sm:max-w-full lg:min-h-[200px] lg:min-w-full lg:max-w-full xl:min-h-[230px] 2xl:min-h-[400px]"
                            onClick={() => openLightboxOnSlide(index)}
                            tabIndex={index}
                          >
                            {content?.attributes.Image?.data?.attributes
                              .url ? (
                              <Image
                                src={
                                  content?.attributes.Image?.data?.attributes
                                    .url
                                }
                                alt={content?.attributes.Title}
                                height={250}
                                width={350}
                                layout="fill"
                                objectFit="cover"
                              />
                            ) : (
                              <p className="mb-2 text-center">
                               
                              </p>
                            )}
                            <Image
                              style={{
                                borderRadius: "10px",
                              }}
                              src={
                                content?.attributes.Image?.data?.attributes
                                  .url
                              }
                              alt={content?.attributes.Title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <p className="absolute bottom-3 right-7 h-[17px] max-w-[110px] sm:right-3">
                           
                          </p>
                        </SplideSlide>
                      );
                    }
                  )}
                </SplideTrack>
                {/* <div className="relative md:static">
                  {props.isHomepage ? <SplideArrows isHomePage /> : <SplideArrows />}
                </div> */}
              </Splide>
            ) : (
              <p className="mb-2 text-center">
                {/* <FontAwesomeIcon
                  icon={faSpinnerThird}
                  spin
                  className={"ml-2 text-center text-2xl"}
                /> */}
              </p>
            )}
          </div>
        </div>
        {props.HasLink && (
          <div className=" hidden mt-6 items-center justify-end md:flex">
            <Link href={`portfolio-of-work`} title="Portfolio of work">
              <p className="cursor-pointer text-white">Portfolio of work</p>
            </Link>
            {/* <FontAwesomeIcon
              icon={faArrowRight}
              className=" ml-2 text-white"
            /> */}
          </div>
        )}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        type="image"
        sourceIndex={lightboxController.sourceIndex}
        sources={imageArray}
      />
    </>
  );
}
