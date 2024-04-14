import React, { ReactElement, useContext, useState } from "react";
import OneColumnContentBlock from "../blocks/one-column-content";
import FAQsBlock from "../blocks/faqs-block";
import GridGalleryBlock from "../blocks/grid-gallery";
import StepListsBlock from "../blocks/step-lists";
import WorksBlock from "../blocks/some-of-our-works.tsx";
import HasNoHiddenCostsBlock from "../blocks/has-noHidden-costs";
// import BlogSliderReviews from "../blocks/blog-slider-reviews";
import { NextPageWithLayout } from "../../types/global";
import HasHappyCustomersBlock from "../blocks/has-happy-customers";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import BlogCaseStudiesBlock from "../blocks/blog-case-studies";
import BlogSingleColumnBlock from "../blocks/blog-single-column";
import BlogBannerBlock from "../blocks/image-block";
import ExhibitionStandBlock from "../blocks/exhibition-stands.tsx";
import { FlexibleStrapiPageResponse } from "@/constants/lib/types/strapi";
import ImageBlock from "../blocks/image-block";
import TwoColumnContentBlock from "../blocks/TwoColContent";
import SEO from "@/components/SEO";
import Layout from "@/constants/layout";

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
  "flexible.some-of-our-works": TwoColumnContentBlock,
  "flexible.gallery": GridGalleryBlock,
  "flexible.featured-image": ImageBlock
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
      <SEO seoData={props?.data?.SEO} title={props?.data?.Title} canonical={props?.data?.SEO?.canonicalURL} />
      <section
        className={`cms-container overflow-splide  relative overflow-hidden  lg:overflow-visible ${
          props?.data?.HasQuoteComponent
            ? "flex flex-col justify-between gap-10 lg:flex-row"
            : ""
        } `}
      >
        <div
          className={` ${
            props?.data?.HasQuoteComponent ? "lg:w-[57%] 2xl:w-[62%]" : "w-full"
          } `}
        >
          <div
            className={` ${props?.data?.PageTitle ? "pt-4 lg:pt-2 " : ""}  text-left  `}
          >
            <div className=" max-w-6xl overflow-hidden">
              <h1 className=" capitalize mb-8">{props?.data?.PageTitle}</h1>
              {props?.data?.PageIntroductoryContent && (
                <div className="max-w-5xl strapiPage pb-4 text-left  xl:max-w-[50rem] lg:pb-0">
                  <ReactMarkdown className="markdown flexible-component" rehypePlugins={[rehypeRaw]}>
                    {props.data?.PageIntroductoryContent ||
                      props.data?.PageIntroductoryContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>

          <div className={"relative"}>
            <div>
              {/* {props.data.Pages?.map((section: SectionProps) => {
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
              })} */}
            </div>  
          </div>
        </div>
        {/* {props?.data?.HasQuoteComponent && (
          <div className={` relative mx-auto min-h-full xl:mx-0 lg:w-[38%] 2xl:w-[33%] `}>
            <QuoteModalComponent />
          </div>
        )} */}
      </section>
    </>
  );
};

StrapiPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default StrapiPage;
