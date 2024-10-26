import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { roadmap } from "@/constants";
import Button from "./Button";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
];

const Single = ({ item }:any) => {
    const ref = useRef();

  

    // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
    
            <div className="pt-16">
                <div className=" flex flex-col">
                    <div className="i" >
                        <img src={item.img} alt="" className="rounded-[10px]" />
                    </div>
                    <div className="mt-4" >
                        <h4>{item.title}</h4>
                        <p className="text-black mt-2 mb-6">{item.text}</p>
                        <Button title="View ministry" variant="btn" link={item.url}/>
                    </div>
                </div>
            </div>
    
    );
};

const Portfolio = () => {
    const ref = useRef();

    

    return (
        <div className="">
        <div className="portfolio">
            <div className="relative hover:bg-ecwaorange  overflow-hidden">
                {/* <div className="relative h-[500px] lg:h-[700px] w-full">
                    <iframe
                        title="Choir's ministration"
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/vsypFJ5mNw0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div> */}
                </div>
           {/* <div className="bg-ecwaorang">
                    <div className="max-container">
                        {roadmap.map((item) => (
                            <Single item={item} key={item.id} />
                        ))}
                    </div>
           </div> */}

           <Splide
                className="splide"
                hasTrack={false}
                options={{
                    //@ts-ignore
                    rewind: "true",
                    perPage: 3,
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    lazyLoad: "nearby",
                    gap: "1.5rem",
                    snap: true,
                    speed: 1000,
                    easing: "linear",
                    interval: 5000,
                    type: "loop",
                    autoplay: true,
                    breakpoints: {
                        "1024": {
                            arrows: false,
                            perPage: 2.5,
                        },
                        "920": {
                            arrows: false,
                            perPage: 2,
                        },
                        "540": {
                            arrows: false,
                            perPage: 1,
                        },
                    },
                }}
            >
                <SplideTrack className="splide__track">


                    {roadmap.map((item: any) => {
                        return (
                            <><SplideSlide
                                key={item.id}
                                className="splide__splide"
                            >

<Single item={item} key={item.id} />


                            </SplideSlide>
                            </>
                        );
                    })}

                </SplideTrack>
            </Splide> 
            </div>
        </div>
    );
};

export default Portfolio;