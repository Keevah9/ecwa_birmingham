import React from "react";
import LinkBlock from "../LinkBlock";
import StandardLink from "../StandardLink";

export default function CarFinanceGetStarted() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Finance with caruno</h5>
            <ul className={"list-none"}>
                <LinkBlock label={"Finance guides"} description={"Learn more about the different ways to fund your caruno car."} url={"/car-finance-with-caruno"} />
                <LinkBlock label={"Eligibility check"} description={"It's easy to find out what your chances are of being accepted."} url={"/apply-now"} />
                <StandardLink label={"Check your eligibility"} url={"/apply-now"} highlight />
            </ul>
            <small className="opacity-50">Rates from 12.9% APR. Representative APR 18.9%</small>
        </>
    )
}
