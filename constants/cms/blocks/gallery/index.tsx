import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { StrapiGlobalResponse } from "@/constants/lib/types/global";
import { getGlobalData } from "@/constants/lib/util/api";
import Pagination from "@/components/pagination";
import GridGalleryPagination from "@/components/grid-gallery-pagination";
import GridGallery from "@/components/grid-gallery";

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
 
        <section className="flexible-component">
          {props.data.HasPagination ? (
            <GridGalleryPagination
              SectionTitle={props?.data?.SectionTitle}
              GridGalleryImagesPagination={currentRecords}
            />
          ) : (
           
            <><div className="max-container">
              <h2>Our Galleries</h2>
              <p className="pb-6 max-w-5xl ">Explore our gallery to see the impact of our dedicated volunteers in action! Each photo captures the heart and enthusiasm of those who contribute their time and skills to make a difference. From community events to service projects, our volunteers play a crucial role in our mission. Browse through these moments to witness the spirit of giving and the positive change we create together.</p>
            </div><GridGallery GridGalleryImages={props.data.galleries.data} /></>
            
        // <></>
          )}
          {blockData ? (
            <>
              {props?.data?.HasPagination && (
                <div className="mt-8 mb-10 lg:mt-16">
                  <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </>
          ) : (
            <div className={"flex items-center justify-center rounded-md py-4"}>
              
            </div>
          )}
        </section>
      
    </>
  );
}
