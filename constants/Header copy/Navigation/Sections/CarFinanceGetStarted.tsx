import React from "react";
import LinkBlock from "../LinkBlock";
import StandardLink from "../StandardLink";

export default function CarFinanceGetStarted() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>Our Ministries</h5>
            <ul className={"list-none"}>
                <LinkBlock label={"Children Ministries"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/ministries/children-ministries"} />
                <LinkBlock label={"Women Ministries"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/ministries/women-ministries"} />
                <LinkBlock label={"Men Ministries"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/ministries/men-ministries"} />
                <LinkBlock label={"Family Ministries"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/ministries/family-ministries"} />
                <LinkBlock label={"Choir Ministries"} description={"Atque deleniti ea veritatis in sequi? Quia exercitationem libero vel."} url={"/ministries/choir-ministries"} />
                <StandardLink label={"See all ministries"} url={"/ministries"} highlight />
            </ul>
            
        </>
    )
}
