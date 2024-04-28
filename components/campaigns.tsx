import ArticleCard from "@/components/article-card"
import React from "react"
import Button from "./Button"
import Image from "next/image"
import Link from "next/link"

export default function Campaigns() {
    return (
        <div className="xs:w-full flex xs:bg-no-repeat xs:bg-cover xs:bg-left relative  text flex items-cente relative lg:flex-row flex-col-reverse min-h-[650px]">

            <div className=" absolut lg:w-1/2 bg-ecwadarkblue right-10  max-containe py-20 lg:py-0 left-0 flex items-center justify-center  ">
                <div className=" w-fit shadow-m  text-center flex flex-col justify-center items-center  rounded-[10px] ">
                    <h2 className=" mt-4  text-white border-b-4 border-ecwaorange">Events</h2>

                    <p className=" mb-10 mt-6 text-white max-w-lg px-4 lg:px-0 lg:max-w-80">Your small donation will help us to provide education to undeYour small donation will help us to provide education to und</p>
                    <div className="mb-10 grid grid-cols-2 text-center items-center content-centr sm:grid-cols-3 sm:grid-cols-4 gap-4">
                        <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  bg-white rounded-[6px] py-4 px-5 text-center">
                            <span className="text-[28px]">200</span>
                            <p className="text-[14px]">Days</p>
                        </div>
                        <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  bg-white rounded-[6px] py-4 px-5 text-center">
                            <span className="text-[28px]">20</span>
                            <p className="text-[14px]">Hours</p>
                        </div>
                        <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  bg-white rounded-[6px] py-4 px-5 text-center">
                            <span className="text-[28px]">20</span>
                            <p className="text-[14px]">Minutes</p>
                        </div>
                        <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  bg-white rounded-[6px] py-4 px-5 text-center">
                            <span className="text-[28px]">20</span>
                            <p className="text-[14px]">Seconds</p>
                        </div>
                    </div>
                    <Button type={"button"} title={"View All Events"} link="/" />
                </div>

            </div>

            <div className=" absolut lg:w-1/2 bg-ecwaorange right-10 px-6 lg:px-0  max-containe py-20 lg:py-0  left-0 flex flex-col gap-6 items-center justify-center  ">
                <div className=""
                ><Image src="/ecwa-logo.png" alt="camp" width={50} height={50} /></div>
                <div className=" drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  rounded-[10px] flex items-center gap-6 w-fit px-6 py-4 bg-white">
                    <div className=" bg-ecwaorange bg-opacity-40 rounded-[10px] text-center">
                        <p className="px-3 pt-4 pb-3 text-ecwadarkblue font-[500] text-[16px]">Feb 12</p>
                        <span className="bg-ecwadarkblue text-whit rounded-b-[10px] py-2 text-[14px] px-3">7:00am</span>
                    </div>
                    <div>
                        <p className=" mb-3 font-[600]">Your small donation will help us to provide education to unde</p>
                        <Button type={"button"} title={" Event Details"} link="/" />
                    </div>
                </div>
                <div className=" drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  rounded-[10px] flex items-center gap-6 w-fit px-6 py-4 bg-white">
                    <div className=" bg-ecwaorange bg-opacity-40 rounded-[10px] text-center">
                        <p className="px-3 pt-4 pb-3 text-ecwadarkblue font-[500] text-[16px]">Feb 12</p>
                        <span className="bg-ecwadarkblue text-whit rounded-b-[10px] py-2 text-[14px] px-3">7:00am</span>
                    </div>
                    <div>
                        <p className=" mb-3 font-[600]">Your small donation will help us to provide education to unde</p>
                        <Button type={"button"} title={" Event Details"} link="/" />
                    </div>
                </div>
                <div className=" drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]  rounded-[10px] flex items-center gap-6 w-fit px-6 py-4 bg-white">
                    <div className=" bg-ecwaorange bg-opacity-40 rounded-[10px] text-center">
                        <p className="px-3 pt-4 pb-3 text-ecwadarkblue font-[500] text-[16px]">Feb 12</p>
                        <span className="bg-ecwadarkblue text-whit rounded-b-[10px] py-2 text-[14px] px-3">7:00am</span>
                    </div>
                    <div>
                        <p className=" mb-3 font-[600]">Your small donation will help us to provide education to unde</p>
                        <Button type={"button"} title={" Event Details"} link="/" />
                    </div>
                </div>

            </div>

        </div>
    )
}