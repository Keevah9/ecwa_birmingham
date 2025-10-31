import React from "react";
import Link from "next/link";
import LinkBlock from "../LinkBlock";
import Button from "@/components/Button";

const models = [
    {
        label: "Worship",
        link: "audi/a3"
    },
    {
        label: "Guest services",
        link: "mercedes-benz/a-class",
    },
    {
        label: "Media",
        link: "nissan/qashqai",
    },
    {
        label: "Children",
        link: "kia/sportage",
    },
    
]
   
function SearchModels() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>Volunteer</h5>
            <ul className={"mt-4"}>
                <Button title="Serve with us" variant="btn" link="/volunteer"/>
               
            </ul>
        </>
    )
}

export default SearchModels;
