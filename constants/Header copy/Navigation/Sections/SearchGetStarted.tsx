import Link from "next/link";
import React from "react";
import LinkBlock from "../LinkBlock";
import Button from "@/components/Button";

export default function SearchGetStarted() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>ECWA BIRMINGHAM</h5>
            <ul className={"list-none"}>
                {/* <LinkBlock label={"who we are"} description={"Buying a caruno car is easy. Here's everything you need to know."} url={"/about-us/#who-we-are"} /> */}
                <LinkBlock label={"Our Mision & Vision"} description={" Veritatis nihil ipsam in fugit"} url={"/about-us/#mission"} dummy={true} />
                <LinkBlock label={"ECWA History"} description={" quia ab quasi cum dolorem deleniti voluptatibus. "} url={"/about-us/#our-history"} />
                <LinkBlock label={"Services"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/services"} dummy={true} />
                {/* <LinkBlock label={"Team"} description={"Let us do the hard work and find the right caruno car for you."} url={"/help-me-choose"} /> */}
                <LinkBlock label={"Our Ministries"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/ministries"} dummy={true} />
                {/* <LinkBlock label={"Prayer"} description={"Read our useful guides about buying, leasing, finance and more."} url={"/about-us/#mission-and-vision"} dummy={true} /> */}
                <Button title="Contact us" link="/contact-us" variant="btn"/>
                
            </ul>
        </>
    )
}
