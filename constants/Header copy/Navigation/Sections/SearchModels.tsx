import React from "react";
import Link from "next/link";

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
            <ul className={"list-none"}>
                {/* {models.map((model, index) => {
                    return (
                        <li className={"mb-3"} key={index}>
                            <Link href={`/cars/${model.link}`}>
                                <a className="relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-ecwadarkblue inline-block after:absolute after:left-0 after:right-0 after:bottom-[-5px] cursor-pointer" title={`Search ${model.label}`}>
                                    {model.label}
                                </a>
                            </Link>
                        </li>
                    )
                })} */}
            </ul>
        </>
    )
}

export default SearchModels;
