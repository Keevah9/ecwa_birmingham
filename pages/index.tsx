import Features from "@/components/TwoColContent";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import HeroSlider from "@/constants/Homepage/HeroSlider";
import HeroSliderTest from "@/constants/Homepage/indexx";
import { getHome } from "@/constants/lib/util/api";
import { GetStaticProps } from "next";
import Donate from "@/components/Donate";
import Benefits from "@/components/Benefits";
import Campaigns from "@/components/campaigns";
import Button from "@/components/Button";
import HasSermonsBlock from "@/constants/cms/blocks/has-sermons";
import Parallax from "@/components/Parallax";
import Portfolio from "@/components/Portfolio";

import React from "react";
import GridGallery from "@/components/grid-gallery";
import HasPastorsBlock from "@/constants/cms/blocks/HasPastors";
import Pastors from "@/components/Pastors";


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
  
  return (
    <div>
<HeroSlider HeroSlider={props.home.HeroSlider}/>
      <Guide Bg/>
      <Features />
     <GridGallery SectionTitle={props.home.Gallery.SectionTitle} GridGalleryImages={props.home.Gallery.Gallery[0].galleries.data}/>
      <div> <HasSermonsBlock/>
        <div className="mx-auto w-40 flex justify-center lg:-mt-20 -mt-8 mb-28 lg:mb-32">
          <Button type={"button"} title="See all Sermons" style variant="btn"  link="/sermons" />
        </div></div>
        <section>
          <Pastors/>
        </section>
      <Campaigns />
      <HeroSliderTest />
     
        <Parallax type="portfolio" />

      <Portfolio />
      
      {/* <Donate /> */}
      {/* <Volunteer/> */}
      
      <Benefits />
      <Donate />
      
      {/* <GetApp /> */}
      
    </div>
  )
}
