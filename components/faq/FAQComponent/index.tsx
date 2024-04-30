import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { FAQS } from "..";
import rehypeRaw from "rehype-raw";
import Button from "@/components/Button";

interface FAQProps {
  data: any;
  isHomepage?: boolean;
  joinUs?: boolean
  number?: boolean;
  btnLabel1?: string
  btnLabel2?: string
  btnLink2?: string 
  btnLink1?: string
}
function FAQs(props: FAQProps) {
  const router = useRouter();
  return (
    <>
      {props.data?.length > 0 && (
        <section className= {` ${props.joinUs && 'bg-ecwadarkblu px-4 lg:px-8 '} ${props.isHomepage && " max-w-3xl md:mx-auto"} `}>
          {router.pathname === "/frequently-asked-questions" || router.pathname === "/join-us" ? (
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
          <div className={`${props.joinUs }
          ? '' : 'border-t`}>
            {props.data?.map((questions: any) => {
              return (
                <div key={questions.id} className={` ${props.joinUs && 'faq'}`}>
                  <FAQS joinUs={props.joinUs} number={questions.id} question={questions.Question}>

                    <ReactMarkdown rehypePlugins={[rehypeRaw]} className={`markdown ${props.joinUs && '!text-white'}`}>{questions.Answer}</ReactMarkdown>
                    {props.number && <div className="flex mt-8 gap-3 ">
                      {questions.btnLabel1 && <div className="w-32"> <Button type={'button'} link={`${questions.btnLink1}`} style title={`${questions.btnLabel1}`} /></div>}
                      {questions.btnLabel2 && <div className="w-40"><Button type={'button'} link={`${questions.btnLink2}`} style title={`${questions.btnLabel2}`} variant={'btn !text-white'} /></div>}</div>}
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
