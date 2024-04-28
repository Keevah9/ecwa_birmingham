import React from "react";
import StandardLink from "../StandardLink";

export default function WhyFaqs() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange  font-black text-[18px]"}>Related FAQs</h5>
            <ul className={"list-none"}>
                <StandardLink label={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/frequently-asked-questions#1003"} />
                <StandardLink label={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel.?"} url={"/frequently-asked-questions#1041"}  />
                <StandardLink label={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/frequently-asked-questions#858"} />
                <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight />
            </ul>
        </>
    )
}
