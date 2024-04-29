import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { StrapiGlobalResponse } from "@/constants/lib/types/global";
import { getGlobalData } from "@/constants/lib/util/api";
import Pagination from "@/components/pagination";

// const GridGalleryPagination = dynamic(
//   () => import("../../../components/BlockComponents/grid-gallery-pagination")
// );
// const GridGallery = dynamic(
//   () => import("../../../components/BlockComponents/grid-gallery")
// );
export default function GalleryBlock(props: any) {
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
  const blockData = gridComponent?.props?.global?.attributes?.GridGalleryImages?.Galleries.data;
  const records = blockData;
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(24);

  // pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(blockData?.length / recordsPerPage);

  return (
    <>
     
    </>
  );
}
