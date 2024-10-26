import React from "react";
import StandardLink from "../StandardLink";

export default function CarFinanceFaqs() {
    return (
        <>
            <h5 className={"mb-6 text-ecwaorange font-black uppercase text-[18px]"}>Related FAQs</h5>
            <ul className={"list-none"}>
                <StandardLink label={"How can I join a ministry?"} url={"/frequently-asked-questions#2"} />
                <StandardLink label={"Do I need to be a member to join a ministry?"} url={"/frequently-asked-questions#1"} />
                <StandardLink label={"What do Children ministries do?"} url={"/frequently-asked-questions#3"} />
                <StandardLink label={"What do Women ministries do?"} url={"/frequently-asked-questions#6"} />
                <StandardLink label={"What do Men ministries do?"} url={"/frequently-asked-questions#5"} />
                <StandardLink label={"What time does service starts?"} url={"/frequently-asked-questions#4"} />
                <StandardLink label={"Do I need to be a chorister to join the music ministries?"} url={"/frequently-asked-questions#7"} />
                <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight />
            </ul>
        </>
    )
}
// are there outreach or music event
// do i need to know any instrument
