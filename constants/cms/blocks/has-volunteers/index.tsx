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
            JOIN US
          </h2>

          <p className={`${props.data.override === 'blue' && 't-white'} max-w-5xl one-col blog pb-7`}>
            Becoming a part of our units is a rewarding experience where you can grow, connect, and contribute to our community. Whether you’re interested in leadership, service, or special projects, joining a unit offers you a chance to make a meaningful impact. Dive in, get involved, and be part of something special. Join us today and help shape the future together!
          </p>
          {router.asPath === "/volunteer" ? 
          //@ts-ignore
          <VolunteerContainer data={benefits} /> : <div><VolunteerContainer data={benefitSlice} /> <div className="mt-16 text-center"> <Button title="See more" link="/volunteer" type={"button"} /></div></div>}


        </section>
      )}
    </>
  );
}
