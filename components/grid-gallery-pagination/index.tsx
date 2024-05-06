import Image from "next/image";
import "@splidejs/react-splide/css";

//@ts-ignore
import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getStrapiMedia } from "@/constants/lib/util/media";

interface GridGalleryProps {
  SectionTitle: string;
  HasLink?: boolean;
  isHomepage?: boolean;
  GridGalleryImagesPagination?: [];
}

export default function GridGalleryPagination(props: GridGalleryProps) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  const imageArray: Array<string> = [];
  props?.GridGalleryImagesPagination?.map((item: any) => {
    if (item?.attributes.Image?.data?.attributes.url) {
      imageArray.push(item.attributes.Image?.data?.attributes.url)
    }
  });
  function openLightboxOnSlide(index:number) {
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
      <section className="flexible-component relative w-full">
        <div>
          {props.SectionTitle && (
            <h2
              className={`pb-4 capitalize leading-8  text-[#F04A48] ${props.isHomepage
                ? "max-w-2xl text-[22px] lg:text-[38px] lg:leading-[45px]"
                : "max-w-2xl text-[28px] 2xl:max-w-xl"
                }`}
            >
              {props.SectionTitle}
            </h2>
          )}
          {props?.GridGalleryImagesPagination ? (
            <div className="relative w-full">
              <div className="grid w-full flex gap-4 sm:grid-cols-2 md:grid-cols-3 lg:-mt-6 lg:grid-cols-4">
                {props?.GridGalleryImagesPagination?.map(
                  (content: any, index: any) => {
                    return (
                      <>
                        <div
                          key={content.id}
                          className="relative w-ful cursor-pointer min-w-full rounded-lg lg:w-[250px] lg:max-h-[270px] mb-2 "
                          onClick={() => openLightboxOnSlide(index)}
                        >
                          {content.attributes.Image?.data?.attributes.url ? <Image
                            style={{ borderRadius: "10px" }}
                            src={
                              content.attributes.Image?.data?.attributes.url
                            }
                            width={350}
                            height={250}
                            alt={
                              content.attributes.Image?.data?.attributes.name
                            }
                            quality={100}
                            priority
                          /> : <p className="mb-2 text-center">
                            
                          </p>}

                          
                        </div>
                      </>
                    );
                  }
                )}
              </div>
            </div>
          ) : (
            <p className="mb-2 text-center">
              
            </p>
          )}
          {props.HasLink && (
            <div className=" hidden items-center justify-end lg:flex">
              <Link href={`portfolio-of-work`} title="Portfolio of work">
                <p className="cursor-pointer text-white">Portfolio of works</p>
              </Link>
             
            </div>
          )}
        </div>
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
