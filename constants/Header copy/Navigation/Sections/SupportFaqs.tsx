import React from "react";
import LinkBlock from "../LinkBlock";
import StandardLink from "../StandardLink";

export default function SupportFaqs() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>Help &amp; Resources</h5>
            <ul className={"list-none"}>
                 <LinkBlock label={"Volunteer"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/volunteer"} />
                <LinkBlock label={"Safeguading"} description={""} url={"/safeguarding"} />
                <LinkBlock label={"Frequently Asked Questions"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/frequently-asked-questions"} />
               
                {/* <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight /> */}
            </ul>
        </>
    )
}
