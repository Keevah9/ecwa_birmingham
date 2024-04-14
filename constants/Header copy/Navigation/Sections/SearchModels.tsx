import React from "react";
import Link from "next/link";

const models = [
    {
        label: "Audi A3",
        link: "audi/a3"
    },
    {
        label: "BMW 1 Series",
        link: "bmw/1-series",
    },
    {
        label: "Mercedes-Benz A Class",
        link: "mercedes-benz/a-class",
    },
    {
        label: "Nissan Qashqai",
        link: "nissan/qashqai",
    },
    {
        label: "KIA Sportage",
        link: "kia/sportage",
    },
    {
        label: "Ford Puma",
        link: "ford/puma",
    },
    {
        label: "Volkswagen Golf",
        link: "volkswagen/golf",
    },
]

function SearchModels() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Search by popular models</h5>
            <ul className={"list-none"}>
                {models.map((model, index) => {
                    return (
                        <li className={"mb-3"} key={index}>
                            <Link href={`/cars/${model.link}`}>
                                <a className="relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue inline-block after:absolute after:left-0 after:right-0 after:bottom-[-5px] cursor-pointer" title={`Search ${model.label}`}>
                                    {model.label}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchModels;
