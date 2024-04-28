import ArticleCard from "@/components/article-card"
import React from "react"
import Image from "next/image"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import Link from "next/link"

export default function HeroSliderTest() {
    return (
        <div className=" relative bg-ecwadarkblue text lg:flex items-center lg:flex-row flex-col lg:mb-80 min-h-[650px]">
            <div className="max-container">
                <div className="flex lg:flex-row flex-col-reverse justify-center items-center justify-between ">
                    <div className="w-full lg:w-5/6">
                        <Image src="/ecwa-logo.png" alt="camp" width={50} height={50} />
                        <span className="font-black  capitalize  text-ecwaorange">JOIN A LIFE GROUP</span>
                        <h2 className="text-white pb-6 pt-3">Welcome To Ecwa Birmingham Online! We’d Love To Connect And Share More About Our Online Community!</h2>
                        <p className="text-white">How do we generate new ideas? <a className="underline text-ecwaorange mt-6">Connect with the Community</a></p>
                    </div>
                    <Link href={'/'}> 
                        <a className="text-center block mt-16 mb-10 lg:mb-0  lg:mt-0 bg-ecwaorange h-36 w-36 rounded-full">

                        </a>
                    </Link>

                </div>
                <div className="hidden lg:grid sm:grid-cols-3 grid-cols-1 z-20 lg:grid-cols-3 items-center justify-center max-container my-20 lg:my-0 lg:absolute left-0 right-0 gap-6 mx-auto w-full -bottom-48 ">

                    <ArticleCard date={undefined} title={"Sunday services"} subtitle="9:57am - 12pm" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim."} imgSize={""} ImageProps={'/ecwa-logo.png'} />
                    <ArticleCard date={undefined} title={"Wednesday Prayer Meeting "} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim."} subtitle="7pm - 8pm" imgSize={""} ImageProps={'/ecwa-logo.png'} />
                    <ArticleCard date={undefined} title={"Friday Vigil"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim."} subtitle="10pm - 12am" imgSize={""} ImageProps={'/ecwa-logo.png'} />
                </div>
                
            </div>
            <div className=" lg:hidden">
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
                        autoplay: false,
                        breakpoints: {
                            "920": {
                                arrows: false,
                                perPage: 2,
                                autoplay: true,
                            },
                            "540": {
                                arrows: false,
                                perPage: 1.5,
                                autoplay: true,
                            },
                            "360": {
                                arrows: false,
                                perPage: 1.2,
                                autoplay: true,
                            },
                        },
                    }}
                >
                    <SplideTrack className="splide__track">




                        <SplideSlide
                            className="splide__splide"
                        >
                            <div className="   my-20 ">
                                <ArticleCard date={undefined} title={"test"} content={"Sunday services"} imgSize={""} ImageProps={'/ecwa-logo.png'} />
                            </div>
                        </SplideSlide>
                        <SplideSlide
                            className="splide__splide"
                        >
                            <div className=" my-20   ">

                                <ArticleCard date={undefined} title={"test"} content={"Wednesday Prayer Meeting"} imgSize={""} ImageProps={'/ecwa-logo.png'} />
                            </div>
                        </SplideSlide>
                        <SplideSlide
                            className="splide__splide"
                        >
                            <div className="  my-20  ">


                                <ArticleCard date={undefined} title={"test"} content={"Friday Vigil"} imgSize={""} ImageProps={'/ecwa-logo.png'} />
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </div>
    )
}