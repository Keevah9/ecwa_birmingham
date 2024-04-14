import React from "react";
import LinkBlock from "../LinkBlock";
import StandardLink from "../StandardLink";

export default function SupportFaqs() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Help &amp; Resources</h5>
            <ul className={"list-none"}>
                <LinkBlock label={"Advice and guides"} description={"Check out all the need-to-know info on car buying, selling, finance and more."} url={"/advice-and-guides"} />
                <LinkBlock label={"Jargon Buster"} description={"All the industry terms explained, so you know exactly what you're getting"} url={"/jargon-buster"} />
                <StandardLink label={"See all frequently asked questions"} url={"/frequently-asked-questions"} highlight />
            </ul>
        </>
    )
}
