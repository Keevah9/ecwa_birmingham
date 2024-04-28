import Image from "next/image";
import "@splidejs/react-splide/css";
import BgLeftImg1 from "../../../../public/img/bgrightimg.png";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import HasVolunteers from "@/components/HasVolunteer";
import VolunteerContainer from "@/components/volunteer-container";
import { benefits } from "@/constants";
import Roadmap from "@/components/Roadmap";
export default function HasMinistriesBlock(props: any) {
  const router = useRouter();
  const benefitSlice= benefits.slice(0,6)
  return (
    <>
      {props?.data?.HasMinistries && (
        <section className="relative bg-ecwadarkblue h-full bg-ecwadarblu overflow-auto">
          <Roadmap/>
        </section>
      )}
    </>
  );
}
