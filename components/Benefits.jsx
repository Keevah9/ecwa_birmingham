import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Link from "next/link";
import VolunteerContainer from "./volunteer-container";
import Button from "./Button";

const Benefits = () => {
  const benefitSlice = benefits.slice(0,6)
  return (
    <section id="features">
      <div className="max-container overflow-splide  relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Join Us" tag={'Our Units'} text={'Your small donation will help us to provide education to undeYour small donation will help us to provide education to und'}
        />
        <div className="">
          <VolunteerContainer data={benefitSlice}/>
          {/* {benefits.map((item) => (
            <Link href={`${item.url}`}>
              <a
                className="block drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] relative p-0.5 rounded-[5px] bg-no-repeat bg-[length:100%_100%] md:max-w-[27rem "
                style={{
                  background: `${item.backgroundUrl}`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                  <h5 className="h5 mb-5 text-white font-extrabold">{item.title}</h5>
                  <p className="body-2 mb-6 text-white text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider text-black">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={370}
                        height={322}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </a></Link>
          ))} */}
        </div>
        <div className="mt-12 text-center"> <Button title="See more" link="/volunteer" /></div>
      </div>
    </section>
  );
};

export default Benefits;
