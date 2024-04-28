import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap, brainwaveServices } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";
import Link from "next/link";
import { Interface } from "readline";

interface MinistriesProps{
  isHome?: boolean
}
export default function Roadmap(props: MinistriesProps) {
  const choir = roadmap[roadmap.length - 1]
  // console.log(test)
  return (
    <section className="overflow-hidden" id="roadmap">
      <div className="max-container overflow-splide">
        

        <div className="relative grid mx-auto max-w-5xl  gap-6 md:grid-cols-2 md:gap-4 ">
          {roadmap.slice(0, 4).map((item) => {
            return (
              <Link href={`${item.url}`} key={item.id}>
                <a
                  className={`md:flex hover:bg-ecwaorange hover:!text-white even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] mb-6 lg:mb-0 border-ecwaorange border border-b-4 ${props.isHome ? ' ' : 'border-ecwaorange'}  ${item.colorful ? "border- bg-conic-gradien" : "bg-n-6"
                    }`}
                  key={item.id}
                >
                  <div className="relative  bg-n-8 rounded-[2.4375rem] overflow-hidden ">
                    <div className="relative top-0 left-0 max-w-full">
                      <Image
                        className="w-full"
                        src={'/church4.jpg'}
                        width={700}
                        height={550}
                        alt="Grid"
                      />
                    </div>
                    <div className="relative p-6 z-1 xl:p-15">
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      </div>

                      <div className="mb-10  -my-10 -mx-15">
                       
                      </div>
                      <h4 className="h4 mb-4 hover:text-white ">{item.title}</h4>
                      <p className=" hover:text-white  text-n-4">{item.text}</p>
                    </div>
                  </div>
                </a></Link>
            );
          })}
        </div>

        <div className="relative rounded-[2.5rem] border-ecwaorange border border-b-4 max-w-5xl mx-auto md:top-32"><Link href={`${choir.url}`}>
          <a
            className={`md:flex hover:!text-white even:md:translate-y-[7rem] p-0.25  }`}
          >
            <div className="relative hover:bg-ecwaorange   rounded-[2.4375rem] overflow-hidden">
              <div className="relative h-[400px] w-full">
                <iframe
                  title="Choir's ministration"
                  width="100%"
                  height="400px"
                  src={`https://www.youtube.com/embed/vsypFJ5mNw0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative z-1">
               

                <div className="mb-10  -my-10 -mx-15">
                </div>
                <div className="px-6 pt-6 pb-2 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <h4 className="h4 mb-4 hover:text-white">{choir.title}</h4>
                  <p className="hover:text-white mb-3"> {choir.text}</p>
                </div>
              </div>
            </div>
          </a></Link></div>

        <div className="flex justify-center mt-10 md:mt-40 md:mt-44">
          <Button title="Our ministries" variant="btn_orange text-white" link="/roadmap" type={"button"} />
        </div>
      </div>
    </section>
  )
};

