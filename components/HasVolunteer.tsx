

import { useEffect, useState } from "react";
import axios from "axios";

// interface HappyCustomersProps {
//     isHomepage?: boolean;
//     Title?: string;
//     isBlogPost?: boolean
// }

// export default function Volunteer(props: HappyCustomersProps) {
//     const [happyCustomers, setHappyCustomers] = useState<StrapiGlobalResponse>(
//         {}
//     );
//     const [error, setError] = useState<string | null>(null);
//     const router = useRouter();
//     useEffect(() => {
//         async function fetchData() {
//             const global = await getGlobalData();
//             return {
//                 props: {
//                     global: global.data,
//                 },
//             };
//         }
//         fetchData()
//             .then((response) => {
//                 if (response) {
//                     //@ts-ignore
//                     setHappyCustomers(response);
//                 }
//             })
//             .catch((error) => {
//                 if (axios.isAxiosError(error)) {
//                     setError(error.response?.data);
//                 }
//             });
//     }, []);

//     if (error) {
//         return <></>;
//     }
//     //@ts-ignore
//     const blockData = happyCustomers?.props?.global?.attributes;

//     return (
//         <div className={` relative flexible-component`}>
//             <div>
//                 <h2
//                     className={` mb-4 capitalize text-[#F04A48] lg:leading-[45px] ${props.isHomepage
//                         ? "pt-4 text-left text-[22px] lg:text-center lg:text-[38px]"
//                         : "text-[28px] leading-8 lg:max-w-[25rem] xl:max-w-[35rem] 2xl:max-w-full"
//                         }`}
//                 >
//                     {props.isHomepage
//                         ? "We’ve Worked With Hundreds of Amazing Companies"
//                         : props.Title}
//                 </h2>
//             </div>
//             {blockData?.HappyCustomers?.HappyCustomers ? (
//                 <div className="relative  w-full pt-4">
//                     <div className={`${props.isHomepage ? "splide-slider-blog-arrow bg-white" : "splide-slider splide-slider-happycustomers-arrow"} hero relative z-20 box-shadow rounded-[15px]`}>
//                         <Splide
//                             className="splide"
//                             hasTrack={false}
//                             options={{
//                                 //@ts-ignore
//                                 rewind: false,
//                                 perPage: 2,
//                                 perMove: 2,
//                                 pagination: false,
//                                 arrows: true,
//                                 gap: "1rem",
//                                 lazyLoad: "nearby",
//                                 snap: true,
//                                 autoplay: false,
//                                 breakpoints: {
//                                     "1280": {
//                                         perPage: 2,
//                                     },
//                                     "1023": {
//                                         perPage: 2,
//                                         pagination: true,
//                                         arrows: false,
//                                     },
//                                     "640": {
//                                         perPage: 1.3,
//                                         pagination: true,
//                                         focus: "center",
//                                     },
//                                     "540": {
//                                         perPage: 1.05,
//                                         pagination: true,
//                                         focus: "center",
//                                     },
//                                     "360": {
//                                         perPage: 1.05,
//                                         pagination: true,
//                                     },
//                                 },
//                             }}
//                         >
//                             <SplideTrack
//                                 className={`splide__track`}
//                             >
//                                 {blockData?.HappyCustomers?.HappyCustomers?.map(
//                                     (content: any) => {
//                                         return (
//                                             <SplideSlide
//                                                 key={content.id}
//                                                 className="splide__splide"
//                                             >
//                                                 <div className={`h-full w-full border-[#EEEEEE] rounded-[15px] pb-6 pt-8 lg:pb-8 lg:pt-10  2xl:min-h-[17rem] ${props.isHomepage
//                                                     ? " sm:border-r bg-white px-7 lg:px-10 2xl:px-12"
//                                                     : "border-r bg-white px-6 lg:px-8 "
//                                                     }`}
//                                                 >
//                                                     <div className="relative flex w-full justify-start">
//                                                         {content?.Icon?.data?.attributes.url ? <Image
//                                                             src={getStrapiMedia(
//                                                                 content?.Icon?.data?.attributes.url
//                                                             )}
//                                                             alt={content?.ListItemTitle}
//                                                             height={content?.Icon?.data?.attributes.height}
//                                                             width={content?.Icon?.data?.attributes.width}
//                                                         /> : ''}

//                                                     </div>
//                                                     <div className=" w-full pb-8 pt-5 ">
//                                                         <p
//                                                             className={`max-w-[39rem] text-[14px] font-[500] italic lg:text-[16px] ${props.isHomepage || props.isBlogPost
//                                                                 ? "min-h-[16rem] sm:min-h-[14rem] lg:min-h-[13rem] xl:min-h-[11rem] 2xl:min-h-full"
//                                                                 : "min-h-[16rem] sm:min-h-[12rem] xl:min-h-[18rem] 2xl:min-h-[13rem] "
//                                                                 }`}
//                                                         >
//                                                             {content?.ListItemContent}
//                                                         </p>
//                                                     </div>
//                                                     <p className="text-[14px] font-black lg:text-[13px]">
//                                                         {content?.ListItemTitle}
//                                                     </p>
//                                                 </div>
//                                             </SplideSlide>
//                                         );
//                                     }
//                                 )}
//                             </SplideTrack>

//                             <div className={` ${props.isHomepage ? 'relative' : 'relative md:static'}`}><SplideArrows /></div>
//                         </Splide>
//                     </div>
//                 </div>
//             ) : (
//                 <div className={"flex items-center justify-center rounded-md py-4"}>
//                     <FontAwesomeIcon
//                         icon={faSpinnerThird}
//                         className={"text-4xl text-black"}
//                         spin
//                     />
//                 </div>
//             )}
//         </div>
//     );
// }



import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Link from "next/link";
import { StrapiGlobalResponse } from "@/constants/lib/types/global";
import { getGlobalData } from "@/constants/lib/util/api";
import { useRouter } from "next/router";
import VolunteerContainer from "./volunteer-container";

const HasVolunteers = () => {
    const [happyCustomers, setHappyCustomers] = useState<StrapiGlobalResponse>(
        {}
    );
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        async function fetchData() {
            const global = await getGlobalData();
            return {
                props: {
                    global: global.data,
                },
            };
        }
        fetchData()
            .then((response) => {
                if (response) {
                    //@ts-ignore
                    setHappyCustomers(response);
                }
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data);
                }
            });
    }, []);

    if (error) {
        return <></>;
    }
    //@ts-ignore
    const blockData = happyCustomers?.props?.global?.attributes;
    console.log(blockData)
    return (
        <div>
{/* <VolunteerContainer data={blockData.hasVolunteer}/> */}
        </div>
    );
};

export default HasVolunteers;
