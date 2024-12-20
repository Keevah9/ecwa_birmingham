import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import Image from "next/image";
import Features from "./TwoColContent";
import AchievementsSection from "@/constants/Homepage/HeroSlider/Achievement";
import Link from "next/link";

const Services = () => {
  return (
    <section className={'relative'}>
      <div className="max-container overflow-splide rounded-[10px]">
        <Heading
          title="ECWA Birmingham"
          text="We welcome you with great joy to ECWA Birmingham. We are here to share the great news of Jesus Christ to all that will listen. The name of the Lord is a strong tower; the righteous run into it and are safe."
          tag={'Join a Living Group'}
        />


        <div className="relative bg-conic-gradien">
          <div className="relative bg-ecwaorang z-1 flex items-center h-[39rem] mb-5 p-8 border- border-ecwadarkblue bg-conic-gradien border-n-1/10 rounded-[10px] overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Image
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={'/church4.jpg'}
              />
            </div>

            <div className="relative z-1 bg-whit max-w-[17rem ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                We Commune With God In Fellowship
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <Link href={`${item.url}`} key={index}>
                    <li
                      key={index}
                      className="flex items-start py-4 border-ecwadarkblue cursor-pointer border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li></Link>
                ))}
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          {/* <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={`/church8.jpg`}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-white text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div> */}

          {/* <Gradient /> */}
        </div>
      </div>
      <AchievementsSection />

      <div className="container">
        <div className="image-section">
          <img src="/church.jpg" />
        </div>
        <div className="text-content">
          <span>Title</span>
          <span>role</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sit.</p>
          <div className="social-media">
            <i className="bx bxl-facebook-circle"></i>
          </div>
        </div>
      </div>

      {/* <Features/> */}
    </section>
  );
};

export default Services;
