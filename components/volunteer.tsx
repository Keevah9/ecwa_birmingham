import ArticleCard from "@/components/article-card"
import React from "react"
import Button from "./Button"
import Image from "next/image"
import FormInput from "@/constants/Forms/FormInput"

export default function Volunteer() {
    return (
        <section className="xs:w-full xs:bg-no-repeat xs:bg-cover xs:bg-left relative flex items-center max-container overflow-splide relative lg:flex-row flex-col-reverse">



            <div className="lg:w-1/2 absolut h-[450px py-12 right-10 bg-white rounded-[10px] max-containe left- px-10  justify-center  drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
                {/* <Image src="/ecwa-logo.png" alt="camp" width={50} height={50} /> */}
                <span className="font-black text-ecwaorange">OUR TEAM</span>
                <h2 className=" mt-4 ">Become a Volunteer</h2>
                <p className=" mb-8">Your small donation will help us to provide education to undeYour small donation will help us to provide education to und</p>
                <FormInput type={"text"}/>

            </div>



        </section>
    )
}