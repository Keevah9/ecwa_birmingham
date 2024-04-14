import { useContext } from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import BgStepImg from "../../../../public/img/bgstepimg.png";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../../../lib/utils/media";
import { useRouter } from "next/router";
import DynamicButton from "../../../components/Common/button";
import { ModalContext } from "../../../lib/context/demo-modal";
import rehypeRaw from "rehype-raw";
import StepList from "../../../components/BlockComponents/step-lists";

export default function StepListsBlock(props: any) {
  const router = useRouter();
  const { setQuoteModalVisible } = useContext(ModalContext);
  return (
    <>
      <div className={"flexible-component relative min-h-full"}>
        {props?.data.MainTitle && (
          <h2>
            {props?.data.MainTitle}
          </h2>
        )}
        {props?.data.Content && (
          <div className="pb-4">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {props?.data.Content}
            </ReactMarkdown>
          </div>
        )}
        <div className={` ${router.asPath === "/exhibition-stand-project-management" && "lg:h-[55rem] xl:h-full"} relative block min-h-full items-center overflow-hidden ${props?.data?.StepTitle && 'sm:py-3'} rounded-lg bg-[#EFF6F9] `}>
          {props?.data?.HasBackgroundImage && (
            <><div className="absolute  -bottom-2 right-0 hidden sm:block">
              {props?.data?.Icon?.data ? (
                <div className="absolute -top-24 z-10 flex h-40 w-40 rounded-full border-4 border-white border-opacity-40 right-0 justify-center">
                  <div className="flex h-full w-full flex-col items-center rounded-full border bg-uniquegrey justify-center text-center">
                    <p className="relative h-8 w-8 ">
                      <Image
                        layout="fill"
                        quality={100}
                        alt={props?.data.Icon.data?.attributes.alternativeText ||
                          "logo"}
                        src={getStrapiMedia(
                          props?.data?.Icon?.data?.attributes.url
                        )} />
                    </p>
                    <p className="max-w-[8rem] pt-1 text-[14px] leading-4 text-[#F04A48]">
                      {props?.data?.ImageTitle}
                    </p>
                    <p className="max-w-[8rem] pt-1 text-[13px] font-extralight leading-4 text-white lg:max-w-[6rem]">
                      {props?.data?.ImageContent}
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <Image
                src={BgStepImg}
                height={200}
                width={200}
                priority
                unoptimized
                alt={"steplist desktop background image"} />
            </div>
              <div className={`absolute -bottom-2 right-0 block sm:hidden`}>
                {props?.data?.Icon?.data ? (
                  <div
                    className={`absolute ${router.asPath === "/exhibition-stand-project-management" &&
                      "-left-20 bottom-2"} ${router.asPath === "/exhibition-stand-design" &&
                      "-top-6 right-0 sm:-left-20 sm:top-0"} ${router.asPath === "/exhibition-stand-installation" &&
                      "top-0 -left-8 sm:-left-20 sm:top-0"}  z-10 flex h-32 w-32 rounded-full border-4 border-white border-opacity-40  lg:justify-center`}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full border bg-uniquegrey text-center">
                      <p className="relative h-8 w-8">
                        <Image
                          layout="fill"
                          quality={100}
                          alt={props?.data.Icon.data?.attributes.alternativeText ||
                            "logo"}
                          src={getStrapiMedia(
                            props?.data?.Icon?.data.attributes.url
                          )} />
                      </p>
                      <p className="barlow max-w-[6rem] font-medium leading-4 text-[13px] sm:text-[14px] text-[#F04A48] lg:pt-1">
                        {props?.data?.ImageTitle}
                      </p>
                      <p className="max-w-[6rem] p-1 text-[11px] sm:text-[12px] font-extralight leading-4 text-white">
                        {props?.data?.ImageContent}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <Image
                  src={BgStepImg}
                  height={130}
                  width={120}
                  alt={"steplist mobile background image"} />
              </div></>
          )}
          
          <StepList StepTitle={props?.data?.StepTitle} StepListItems={props?.data?.StepListItems} HasBackgroundImage={props?.data?.HasBackgroundImage}/>
        </div>
        {props?.data?.FooterContent ? (
          <ReactMarkdown className="markdown mt-6" rehypePlugins={[rehypeRaw]}>
            {props?.data?.FooterContent}
          </ReactMarkdown>
        ) : null}
        {props?.data?.Button ? (
          props?.data?.Button.TriggerQuoteModal ? (
            <div onClick={() => setQuoteModalVisible(true)}>
              <DynamicButton
                label={
                  props?.data?.Button.ButtonLabel || "Start your project"
                }
                buttonStyle={
                  "mt-8 inline-flex cursor-pointer text-white items-center justify-center text-[18px] px-2 xs:px-4 font-barlow font-black text-black py-[15px] lg:py-2 xl:py-[15px] px-[15px] lg:text-[15px] xl:text-[18px] 2xl:px-[20px] w-auto !min-w-[190px]"
                }
              />
            </div>
          ) : ''
        ) : null}
      </div>
    </>
  );
}
