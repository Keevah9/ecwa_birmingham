import "@splidejs/react-splide/css";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import VolunteerContainer from "@/components/volunteer-container";
import { benefits } from "@/constants";
export default function HasVolunteersBlock(props: any) {
  const router = useRouter();
  const benefitSlice = benefits.slice(0, 6)
  return (
    <>
      {props?.data?.HasVolunteers && (
        <section className="relative max-container h-full overflow-splide">

          <h2 className={`${props.data.override === 'blue' && '!text-white'}`} >

            Lorem ipsum dolor sit amet

          </h2>


          <p className={`${props.data.override === 'blue' && 't-white'} one-col blog pb-7`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim. Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib
          </p>
          ${router.asPath === "/volunteer" ? 
          //@ts-ignore
          <VolunteerContainer data={benefits} /> : <div><VolunteerContainer data={benefitSlice} /> <div className="mt-16 text-center"> <Button title="Sell more" link="/volunteer" type={"button"} /></div></div>}


        </section>
      )}
    </>
  );
}
