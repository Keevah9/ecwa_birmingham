import React from "react";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { GetStaticProps } from "next";
import "@splidejs/react-splide/css";
import { NextPageWithLayout } from "@/constants/types/global";
import SEO from "@/components/SEO";
import Layout from "../../constants/layout";
const FAQs = dynamic(() => import('../../components/faq/FAQComponent'));

//use miion faq
export const getStaticProps: GetStaticProps = async () => {
  const faqs = await getFaqs();
  return {
    props: {
      //@ts-ignore
      faqs: faqs.data.attributes,
    },
    revalidate: 10,
  };
};

const FrequentlyAskedQuestions: NextPageWithLayout = (props: any) => {
  const { faqs } = props;
  return (
    <>
      <SEO seoData={faqs.SEO} title={faqs.SEO.metaTitle} canonical={faqs.SEO.canonicalURL} />      
      <div className={"cms-container w-full gap-12 lg:gap-0 justify-between relative  flex lg:flex-row flex-col"}>
        <div className="lg:w-[60%] lg:px-4">
          <h1 className=" capitalize">{faqs.PageTitle}</h1>
              <div className="lg:mt-10">
                <div className="mt-16 border-[#E7E8EB]">
                  <FAQs data={faqs.FAQ} />                
                </div>
          </div>
        </div>
        {/* <div className="lg:w-[32%]">
          <QuoteModalComponent />
        </div> */}
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;

FrequentlyAskedQuestions.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
function getFaqs() {
  throw new Error("Function not implemented.");
}

