import React from "react";
import StandardLink from "../StandardLink";

export default function CarFinanceFaqs() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Related FAQs</h5>
            <ul className={"list-none"}>
                <StandardLink label={"How can I apply for car finance with caruno?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"What different types of car finance do you offer?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"Which car finance type is best for me?"} url={"/frequently-asked-questions"} />
                <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight />
            </ul>
        </>
    )
}
