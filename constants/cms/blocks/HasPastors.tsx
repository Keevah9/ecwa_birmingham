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
import Pastors from "@/components/Pastors";

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
export default function HasPastorsBlock(props: any) {
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
        {props.data.HasPastors && <Pastors/>}
           
        </>
    );
}
