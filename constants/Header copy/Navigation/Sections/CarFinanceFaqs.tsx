import React from "react";
import StandardLink from "../StandardLink";

export default function CarFinanceFaqs() {
    return (
        <>
            <h5 className={"mb-6 text-ecwaorange font-black uppercase text-[18px]"}>Related FAQs</h5>
            <ul className={"list-none"}>
                <StandardLink label={"How can I join a ministry?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"Do I need to be a member to join a ministry?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"What do Chldren ministries do?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"What do Women ministries do?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"What do Men ministries do?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"Do I need to be a member to join a ministry?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"Do I need to be a chorister to join the music ministries?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight />
            </ul>
        </>
    )
}
// are there outreach or music event
// do i need to know any instrument
