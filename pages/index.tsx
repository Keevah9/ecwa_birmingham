import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import HeroSlider from "@/constants/Homepage/HeroSlider";
import { getHome } from "@/constants/lib/util/api";
import { GetStaticProps } from "next";

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
      <Camp />
      <Guide />
      <section><h1 className="border-4 text-80 max-container padding-container">{props.home.PageTitle}</h1></section>
      <Features />
      <GetApp />
      
    </>
  )
}
