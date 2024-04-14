import React from "react";
import StandardLink from "../StandardLink";

export default function WhyFaqs() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Related FAQs</h5>
            <ul className={"list-none"}>
                <StandardLink label={"What is the 275-point inspection?"} url={"/frequently-asked-questions#1003"} />
                <StandardLink label={"Where are caruno cars located?"} url={"/frequently-asked-questions#1041"}  />
                <StandardLink label={"Who owns caruno cars?"} url={"/frequently-asked-questions#858"} />
                <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight />
            </ul>
        </>
    )
}
