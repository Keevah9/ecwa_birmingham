import dynamic from "next/dynamic";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { getStrapiMedia } from "@/constants/lib/util/media";

function ImageBlock(props: any) {
  return (
    <>
      <div className={`pb-4 `}>
        <div className="relative mb-5">
          {/* <Image
            style={{ borderRadius: "10px" }}
            alt={
              props.data.PageTitle ||
              props.data.BlogBanner.data.attributes.alternativeText
            }
            src={getStrapiMedia(props.data.BlogBanner.data.attributes.url)}
            height={props.data.BlogBanner.data.attributes?.height}
            quality={100}
            width={props.data.BlogBanner.data.attributes?.width}
          /> */}
        </div>
      </div>
    </>
  );
}
export default ImageBlock;
