import React, { ReactElement, useContext, useState } from "react";
import OneColumnContentBlock from "../blocks/one-column-content";
// import BlogSliderReviews from "../blocks/blog-slider-reviews";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import { FlexibleStrapiPageResponse } from "@/constants/lib/types/strapi";
import ImageBlock from "../blocks/image-block";
import TwoColumnContentBlock from "../blocks/TwoColContent";
import SEO from "@/components/SEO";
import Layout from "@/constants/layout";
import GalleryBlock from "../blocks/gallery";
import HasHistoryBlock from "../blocks/has-history";
import HasVolunteersBlock from "../blocks/has-volunteers";
import GridGalleryBlock from "../blocks/grid-gallery";
import Button from "@/components/Button";
import HasMinistriesBlock from "../blocks/has-ministries";
import HasSermonsBlock from "../blocks/has-sermons";
import { NextPageWithLayout } from "@/constants/lib/types/global";

type LocalProps = {
  data?: FlexibleStrapiPageResponse;
};

type FlexibleComponentProps = any

export type SectionProps = {
  id?: number;
  "__component?": string;
  [key: string]: any;
};

const sectionComponents = {
  "flexible.one-column-content": OneColumnContentBlock,
  // "flexible.fa-qs": FAQsBlock,
  "flexible.grid-item-content": GridGalleryBlock,
  "flexible.two-column-content": TwoColumnContentBlock,
  "flexible.gallery": GalleryBlock,
  // "flexible.gallery": GalleryBlock,
  // "flexible.featured-image": ImageBlock,
  'flexible.has-history': HasHistoryBlock,
  'flexible.has-volunteers': HasVolunteersBlock,
  'flexible.has-ministries': HasMinistriesBlock,
  'flexible.has-services': HasSermonsBlock
};

const Section = ({ sectionData }: FlexibleComponentProps) => {
  const SectionComponent =
    sectionComponents[
      sectionData.__component as keyof typeof sectionComponents
    ];
  if (!SectionComponent) {
    return null;
  }
  return <SectionComponent data={sectionData} />;
};

const StrapiPage: NextPageWithLayout = (props: LocalProps) => {
  // const { quoteModalVisible, setQuoteModalVisible } = useContext(ModalContext);

  return (
    <>
      {/* <SEO seoData={props?.data?.SEO} title={props?.data?.Title} canonical={props?.data?.SEO?.canonicalURL} /> */}
      <div
        className={`max-containe overflow-splide  ${//@ts-ignore
          props?.data?.PageBackground === 'yellow' && 'bg-[#FCCE33]'}  ${//@ts-ignore
          props?.data?.PageBackground === 'blue' && 'bg-ecwadarkblue'}  ${props?.data?.PageBackground === 'pink' && 'bg-[#DD90F0] text-white'} relative overflow-hidden  lg:overflow-visible`}
      >
        
          <div
          className={` h-[650px] flex flex-col justify-center items-center overflow-splide max-container ${props?.data?.PageTitle ? "pt-4 lg:pt-2 " : ""}  text-left  `}
          >
            <div className=" max-w-6xl overflow-hidden">
              <h1 className=" capitalize mb-8">{props?.data?.PageTitle}</h1>
              {props?.data?.PageIntroductoryContent && (
                <div className="max-w-5xl strapiPage pb-4 text-center mx-auto  xl:max-w-[60rem] ">
                  <ReactMarkdown className="markdown flexible-component" rehypePlugins={[rehypeRaw]}>
                    {props.data?.PageIntroductoryContent ||
                      props.data?.PageIntroductoryContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          <div className="flex justify-center text-center mt-12 gap-8">
            {//@ts-ignore
            props.data?.ButtonOne != null && (
              <><Button type={"button"} title={props.data?.ButtonOne} link={props.data?.ButtonOneLink} variant={"btn_orange"} /><Button type={"button"} title={props.data?.ButtonTwo} link={props.data?.ButtonTwoLink} /></>
            )}
          </div>
          </div>

          <div className={"relative"}>
            <div>
              {props.data?.Pages?.map((section: SectionProps) => {
                return (
                  <>
                    <div>
                      <Section
                        sectionData={section}
                        key={`${section.__component}${section.id}`}
                      />
                    </div>
                  </>
                );
              })}
            </div>  
          </div>
      
        {/* {props?.data?.HasQuoteComponent && (
          <div className={` relative mx-auto min-h-full xl:mx-0 lg:w-[38%] 2xl:w-[33%] `}>
            <QuoteModalComponent />
          </div>
        )} */}
      </div>
    </>
  );
};

StrapiPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default StrapiPage;
