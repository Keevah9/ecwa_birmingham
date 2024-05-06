import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

import { StrapiGlobalResponse } from "@/constants/lib/types/global";
import { getGlobalData } from "@/constants/lib/util/api";
import Pagination from "@/components/pagination";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ArticleCard from "@/components/article-card";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Arrow from "@/assets/svg/Arrow";

// const GridGalleryPagination = dynamic(
//   () => import("../../../components/BlockComponents/grid-gallery-pagination")
// );
// const GridGallery = dynamic(
//   () => import("../../../components/BlockComponents/grid-gallery")
// );
// export function  Services(){
//     return(

//     )
// }

// interface GridProps{
//     data: any,
//     isServices? : any
// }
export default function Pastors(props: any) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const [error, setError] = useState<string | null>(null);
    const [gridComponent, setGridComponent] = useState<StrapiGlobalResponse>({});

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
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
                    setGridComponent(response);
                }
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data);
                }
            });
    }, []);
    //@ts-ignore
    const blockData = gridComponent?.props?.global?.attributes?.HasVolunteer;
   
    const records = blockData;
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(24);

    // pagination
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const currentRecords = records?.slice(indexOfFirstRecord, indexOfLastRecord);
    // const nPages = Math.ceil(blockData?.length / recordsPerPage);

    return (
        <>
           
            <section className="max-container overflow-splide">
                <span className="">{blockData?.SubTitle}</span>
                {blockData?.SectionTitle && (
                    <h2 className={`${blockData.override === 'blue' && '!text-white'}`} >
                        <span className="absolute -top-[120px]"></span>
                        {blockData?.SectionTitle}

                    </h2>
                )}

                <div className={` one-col blog pb-8`}>
                    <ReactMarkdown className={`} markdown`} rehypePlugins={[rehypeRaw]}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod animi dolores corrupti nisi voluptates nihil sunt assumenda reiciendis dolorem ab perferendis voluptatum placeat, aliquid rerum earum deserunt distinctio ullam? Delectus.
                    </ReactMarkdown>
                </div>

                {blockData?.Ministries?.length > 0 &&


                    <>{blockData?.Ministries?.length > 4 ?
                        <Splide
                            className="splide"
                            hasTrack={false}
                            options={{
                                //@ts-ignore
                                rewind: "true",
                                perPage: 3,
                                perMove: 1,
                                pagination: false,
                                arrows: false,
                                lazyLoad: "nearby",
                                gap: "1.5rem",
                                snap: true,
                                speed: 1000,
                                easing: "linear",
                                interval: 5000,
                                type: "loop",
                                autoplay: true,
                                breakpoints: {
                                    "920": {
                                        arrows: false,
                                        perPage: 2,
                                    },
                                    "540": {
                                        arrows: false,
                                        perPage: 1.2,
                                    },
                                    "360": {
                                        arrows: false,
                                        perPage: 1,
                                    },
                                },
                            }}
                        >
                            <SplideTrack className="splide__track">


                                {blockData?.Ministries.map((item: any) => {
                                    return (
                                        <><SplideSlide
                                            key={item.id}
                                            className="splide__splide"
                                        >

                                            <ArticleCard featuredImage={item.Image.data.attributes.url} link={item.LinkUrl} linkLabel={item.LinkLabel} title={item.SectionTitle} content={item.Content} imgSize={""} subtitle={item.SubTitle} ImageProps={undefined} />


                                        </SplideSlide>
                                        </>
                                    );
                                })}

                            </SplideTrack>
                        </Splide> : <div className="grid gap-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 ">
                            {blockData?.Ministries.map((item: any) => {
                                return (
                                    <ArticleCard key={item.id} link={item.LinkUrl} linkLabel={item.LinkLabel} title={item.SectionTitle} content={item.Content} imgSize={""} subtitle={item.SubTitle} ImageProps={undefined} />
                                );
                            })}
                        </div>}

                    </>}
            </section>
        </>
    );
}
