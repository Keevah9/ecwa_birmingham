import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
// import HomepageVideo from "../HomepageVideo";
interface TwoColContentProps {
  HasBackgroundColor: boolean;
  SectionTitle: string;
  LinkListItems?: [];
  SectionContent: string;
  TextListItems?: [];
  loading?: boolean;
  VideoContent?: string;
  FlipColumn: boolean;
  isHomepage: boolean
}

// const VideoComponent = dynamic(() => import('../HomepageVideo'), {
//   ssr: false, // Set to false to disable server-side rendering for this component
// });

export default function TwoColumnContentBlock(props: TwoColContentProps) {
  return (
    <section className={`px-6 max-container relative overflow-splide sm:px-8 lg:px-10 xl:px-8  xl:w-[90% mx-auto max-w-[1300px 2xl:w-[85%  ${props.HasBackgroundColor ? "bg-[#EFF6F9]" : ""
      }`}
    >
      <span className="absolute -top-[10px]"></span>
      <div className="block mb-6 lg:hidden">
        <h2 className="leading-[35px]">
          {/* <span className="absolute -top-[100px]"></span> */}
          {//@ts-ignore
          props?.data.SectionTitle}

        </h2>
        {//@ts-ignore
        props?.data.FlipContent &&
          <>{//@ts-ignore
            props?.data?.Image?.data?.attributes?.url ? <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[400px] "> <Image style={{borderRadius:'10px'}} src={props?.data?.Image?.data?.attributes?.url} width={400} height={400} layout="fill" /></div> : null}</> }
      </div>

      <div className={`flex w-full justify-center items-center ${//@ts-ignore
        props?.data.FlipContent
        ? "flex-col gap-5 lg:flex-row lg:gap-12 2xl:items-center"
        : "flex-col-reverse gap-4 lg:flex-row-reverse lg:gap-10"
        }`}
      >

        <div className={` lg:w-1/2 `}>
          {//@ts-ignore
          props?.data.SectionTitle && (
            <div className=" hidden lg:block">
              <h2 className={` capitalize mb-6 leading-[35px]`}>
                  {/* <span className="absolute -top-[100px]"></span> */}
                {//@ts-ignore
                props?.data.SectionTitle}

              </h2>
            </div>
          )}
          {//@ts-ignore
          props?.data.SectionContent && (
            <div className="two-col ">
               
              <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                
                {//@ts-ignore
                props?.data.SectionContent}
              </ReactMarkdown>
            </div>
          )}
        </div>
        
      
         {//@ts-ignore
            props?.data?.Image?.data?.attributes?.url ? <div className={`w-full ${//@ts-ignore
              props?.data.FlipContent ? 'hidden lg:block' : '' } lg:w-1/2 relative  h-[350px] lg:h-[400px] `}> <Image style={{ borderRadius: '10px' }} src={props?.data?.Image?.data?.attributes?.url} width={400} height={400} layout="fill" /></div> : null}
      </div>
    </section>
  );
}
