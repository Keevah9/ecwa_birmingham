import React from "react";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { GetStaticProps } from "next";
import "@splidejs/react-splide/css";

import SEO from "@/components/SEO";
import Layout from "../../constants/layout";
import { getFaqs } from "@/constants/lib/util/api";
import { NextPageWithLayout } from "@/constants/lib/types/global";
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
  console.log(faqs)
  return (
    <>
      {/* <SEO seoData={faqs?.SEO} title={faqs?.SEO.metaTitle} canonical={faqs?.SEO.canonicalURL} />       */}
      <section className={"max-container w-full gap-12 lg:gap-0 relative  flex lg:flex-row justify-center flex-col"}>
        <div className="">
          <h1 className=" capitalize">{faqs.PageTitle}</h1>
              <div className="lg:mt-10">
                <div className="mt-16 border-[#E7E8EB]">
                  <FAQs data={faqs.FAQs} />                
                </div>
          </div>
        </div>
        {/* <div className="lg:w-[32%]">
          <QuoteModalComponent />
        </div> */}
      </section>

    </>
  
  );
};

export default FrequentlyAskedQuestions;

FrequentlyAskedQuestions.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};


