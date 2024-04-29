import ArticleCard from "@/components/article-card"
import React from "react"
import Button from "./Button"
import Image from "next/image"
import FormInput from "@/constants/Forms/FormInput"

export default function Donate() {
    return (
        <section  className=" relative lg:flex-row flex-col-reverse ">

            <div className="  w-full gap-8 overflow-splide max-container  left-0 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left ">
                <div> <h2 className="text-center lg:text-left lg:max-w-xl max-w-2xl mb-4 lg:mb-12">We believe in Teamwork through Trust and Respect Each Other. Enthusiastic Communication with Clients</h2>
                    <div className="hidden lg:block"><Button type={"button"} title={"Donate"} link="/donate" /></div>
                </div>
               
                <div className="lg:w-1/2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] text-left py-12 rounded-[10px] px-10 bg-white">
                    <Image src="/ecwa-logo.png" alt="camp" width={50} height={50} />
                    <span className="font-black uppercase text-ecwaorange">Contact Us</span>
                    <h2 className=" mt-4 ">Be a part of us
                    </h2>
                    <p className=" mb-8">Your small donation will help us to provide education to undeYour small donation will help us to provide education to und</p>
                    <div className="flex gap-2 bg-ecwadarkblu items-center borde pb-0">
                        <FormInput type={"email"} style={`h-[45px]  border`} placeholder="Email address"/>
                        <div className="-mt-2"><Button type={"button"} title={"Subscribe"} variant={" cursor-pointer  btn"} /></div>
                    </div>
                </div>
                <div className="lg:hidden block mt-8"><Button type={"button"} title={"Donate"} link="/donate" /></div>
            </div>

        </section>
    )
}