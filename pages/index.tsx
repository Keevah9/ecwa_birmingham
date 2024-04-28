import Camp from "@/components/Camp";
import Features from "@/components/TwoColContent";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import HeroSlider from "@/constants/Homepage/HeroSlider";
import HeroSliderTest from "@/constants/Homepage/indexx";
import { getHome } from "@/constants/lib/util/api";
import { GetStaticProps } from "next";
import Donate from "@/components/Donate";
import AchievementsSection from "@/constants/Homepage/HeroSlider/Achievement";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import ProjectsSection, { projectsData } from "@/components/Projects";
import Volunteer from "@/components/volunteer";
import Campaigns from "@/components/campaigns";
import Button from "@/components/Button";
import HasSermonsBlock from "@/constants/cms/blocks/has-sermons";
import Heading from "@/components/Heading";

export const getStaticProps: GetStaticProps = async () => {
  const home = await getHome();
  return {
    props: {
      home: home.data.attributes,
    },
    revalidate: 10,
  };
};

export default function Home(props: any) {
  console.log(props.home.HeroSlider)
  return (
    <>
<HeroSlider HeroSlider={props.home.HeroSlider}/>

      <Hero />
      {/* <Camp /> */}
      <Guide />
      {/* <Services/> */}
      <Features />
     
      <div > <HasSermonsBlock/>
        <div className="mx-auto w-40 flex justify-center -mt-20 mb-28 lg:mb-32">
          <Button type={"button"} title="See all Sermons" style variant="btn"  link="/sermons" />
        </div></div>
      <Campaigns />
      <HeroSliderTest />
      <div>
        <section className="max-container overflow-splide"><Heading tag="Our Ministries" title="How We Serve God" className={undefined} text={undefined} /></section>
        <div className="-mt-12"> <Roadmap /></div>
      </div>
     
      
      
      {/* <Donate /> */}
      {/* <Volunteer/> */}
      
      <Benefits />
      <Donate />
      
      {/* <GetApp /> */}
      
    </>
  )
}
