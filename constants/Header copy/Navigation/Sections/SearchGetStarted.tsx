import Link from "next/link";
import React from "react";
import LinkBlock from "../LinkBlock";

export default function SearchGetStarted() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Get started</h5>
            <ul className={"list-none"}>
                <LinkBlock label={"caruno process"} description={"Buying a caruno car is easy. Here's everything you need to know."} url={"/about-us/how-it-works"} />
                {/* <LinkBlock label={"Buying guides"} description={"Read our useful guides about buying, leasing, finance and more."} url={"/"} dummy={true} /> */}
                {/* <LinkBlock label={"Help me choose"} description={"Let us do the hard work and find the right caruno car for you."} url={"/help-me-choose"} /> */}
                <Link href={"/cars"}>
                    <a title={"Browse all used cars"} className={"hidden h-[60px] w-full items-center justify-center rounded-full bg-dynamicblue text-lg font-bold text-white hover:cursor-pointer lg:inline-flex"}>Browse all used cars</a>
                </Link>
            </ul>
        </>
    )
}
