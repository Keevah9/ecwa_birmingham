import Image from "next/image";
import "@splidejs/react-splide/css";
import BgLeftImg1 from "../../../../public/img/bgrightimg.png";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import HasVolunteers from "@/components/HasVolunteer";
import VolunteerContainer from "@/components/volunteer-container";
import { benefits } from "@/constants";
import { useEffect, useState } from "react";
import { StrapiGlobalResponse } from "@/constants/lib/types/global";
import { getGlobalData } from "@/constants/lib/util/api";
import axios from "axios";
import ProjectsSection from "@/components/Projects";
export default function HasSermonsBlock(props: any) {
  const router = useRouter();
  const benefitSlice= benefits.slice(0,6)
  const [happyCustomers, setHappyCustomers] = useState<StrapiGlobalResponse>(
    {}
  );
  const [error, setError] = useState<string | null>(null);
 
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

  return (
    <> {blockData?.all_sermons.data && (
      <section className="relative overflow-splide  max-container h-full">
          <ProjectsSection data={blockData?.all_sermons.data}/> 
        </section>
      )}
    </>
  );
}
