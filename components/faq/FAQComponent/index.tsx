import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { FAQS } from "..";

interface FAQProps {
  data: [];
  isHomepage?: boolean;
}
function FAQs(props: FAQProps) {
  const router = useRouter();
  return (
    <>
      {props.data?.length > 0 && (
        <section className={` ${props.isHomepage && " max-w-3xl md:mx-auto"} `}>
          {router.pathname === "/frequently-asked-questions" ? (
            ""
          ) : (
            <h2
              className={`capitalize text-[#F04A48]  ${props.isHomepage
                  ? " text-[22px] lg:text-center lg:leading-[45px] lg:text-[38px] "
                : "text-[28px] leading-8"
                } mb-10`}
            >
              Frequently Asked Questions
            </h2>
          )}
          <div className="border-t">
            {props.data?.map((questions: any) => {
              return (
                <div key={questions.id} className="blog">
                  <FAQS question={questions.Question}>
                    <ReactMarkdown className="markdown">{questions.Answer}</ReactMarkdown>
                  </FAQS>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
export default FAQs;
