import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { faArrowRight, faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import dynamic from 'next/dynamic'
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
    <div className={`px-6 sm:px-8 lg:px-10 xl:px-8 py-7 lg:py-16 xl:w-[90%] mx-auto max-w-[1300px] 2xl:w-[85%]  ${props.HasBackgroundColor ? "bg-[#EFF6F9]" : ""
        }`}
    >
      {props?.SectionTitle && (
        <div className="block mb-6 lg:hidden">
          <h2 className="text-[22px]  font-black  capitalize text-[#F04A48] lg:text-[38px] lg:leading-[45px]">
            <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
              {props?.SectionTitle}
            </ReactMarkdown>
          </h2>
        </div>
      )}
      <div className={`flex w-full justify-center ${props?.FlipColumn
          ? "flex-col gap-5 lg:flex-row lg:gap-12 2xl:items-center"
          : "flex-col-reverse gap-4 lg:flex-row-reverse lg:gap-10"
          }`}
      >
        <div className={` relative ${props?.VideoContent
            ? "h-full py-6 w-full lg:w-[50%] xl:w-[70%] 2xl:w-[80%] "
            : "w-full"
            } `}
        >
          <div className="two-col relative w-full">
            {props?.VideoContent && (
              <>
                <div className="absolute -right-4 -top-5 block sm:hidden ">
                  {/* <Image
                    unoptimized
                    priority
                    src={BgRightImg}
                    height={250}
                    width={130}
                    alt={"background image"}
                  /> */}
                </div>
                <div className="absolute -top-3 h-[320px] w-[320px] xl:h-[400px] xl:w-[400px] 2xl:h-[449px] 2xl:w-[462px] left-[-6.2rem] hidden sm:block">
                  {/* <Image
                    unoptimized
                    priority
                    src={BgLeftImg}
                    layout='responsive'
                    max-height={449}
                    max-width={462}

                    alt={"background image"}
                  /> */}
                </div>
              </>
            )}
            {props.loading ? (
              <p className="relative flex max-h-[300px] min-h-[300px] w-full items-center justify-center ">
                <FontAwesomeIcon
                  icon={faSpinnerThird}
                  className={"relative w-full text-4xl"}
                  spin
                />
              </p>
            ) : (
              <>
                {/* {props.VideoContent &&
                  <HomepageVideo videoContent={props.VideoContent} />
                } */}
              </>
            )}
          </div>

          {/* {props?.TextListItems.length > 0 && (
            <ul className=" flex flex-col lg:w-[90%] gap-5">
              {props?.TextListItems.map((list: any) => {
                return (
                  <li key={list.id} className=" mb-1 lg:mb-0 flex gap-4">
                    <p className="relative h-[45px] min-w-[45px]">
                      {list?.Icon?.data?.attributes.url ? <Image
                        src={getStrapiMedia(list?.Icon?.data?.attributes.url)}
                        alt={list?.ListItemTitle}
                        layout="fill"
                      /> : ''}

                    </p>
                    <p className="text-[14px] lg:text-[16px]">
                      <span className="font-bold text-[#F04A48]">
                        {list?.ListItemTitle}
                      </span>{" "}
                      <span className="text-uniqueprimarybody">{list?.ListItemContent}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          )} */}
          {/* {props?.LinkListItems.length > 0 && (
            <ul className="mt-3 flex lg:gap-3  2xl:gap-6">
              {props?.LinkListItems.map((list: any) => {
                return (
                  <li key={list.id}>
                    <Link href={`${list?.ListItemContent}`}>
                      <a
                        className={`barlow w-full items-center cursor-pointer ${list?.ListItemTitle === "Why choose unique" ||
                          list?.ListItemTitle !==
                          "Learn more about our services" ?
                          " hidden  " : ''
                          } ${list?.ListItemTitle ===
                          "Learn more about our services" && "block lg:hidden"
                          } `}
                      >
                        <span>
                          {list?.ListItemTitle}{" "}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={"text-md relative pl-2"}
                          />
                        </span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )} */}

        </div>
        <div className={` ${props?.VideoContent && props.FlipColumn ? " lg:w-[45%] xl:w-[50%] 2xl:w-[60%]" : "h-full lg:w-[90%] w-full"} `}>
          {props?.SectionTitle && (
            <div className=" hidden lg:block">
              <h2 className={` mb-2 font-black  capitalize text-[#F04A48] lg:leading-[45px] ${props.isHomepage
                ? "text-[22px] mb-6 lg:text-[38px]"
                : "text-[28px] leading-8 lg:max-w-[25rem] 2xl:max-w-full"
                } max-w-xl`}>
                <ReactMarkdown
                  className="markdown "
                  rehypePlugins={[rehypeRaw]}
                >
                  {props?.SectionTitle}
                </ReactMarkdown>
              </h2>
            </div>
          )}
          {props?.SectionContent && (
            <div className="two-col ">
              <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
                {props?.SectionContent}
              </ReactMarkdown>
            </div>
          )}
          {/* {props?.LinkListItems.length > 0 && (
            <ul className="mt-3 flex lg:mt-6 items-center lg:gap-3 flex-wrap xl:flex-nowrap 2xl:gap-6">
              {props?.LinkListItems.map((list: any) => {
                return (
                  <li key={list.id}>
                    <Link href={`${list?.ListItemContent}`}>
                      <a
                        className={`barlow w-full items-center cursor-pointer ${list?.ListItemTitle !== "Why choose unique" &&
                          list?.ListItemTitle !==
                          "Learn more about our services" &&
                          " hidden lg:flex items-center "
                          } ${list?.ListItemTitle ===
                          "Learn more about our services" && "hidden"
                          } `}
                      >
                        {list?.ListItemTitle}{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className={"text-md mt-1 relative pl-2"}
                        />
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
}
