import React from "react";
import Link from "next/link";

const makes = [
    {
        label: "Audi",
        link: "audi"
    },
    {
        label: "BMW",
        link: "bmw",
    },
    {
        label: "Mercedes-Benz",
        link: "mercedes-benz",
    },
    {
        label: "Mini",
        link: "mini",
    },
    {
        label: "Nissan",
        link: "nissan",
    },
    {
        label: "Vauxhall",
        link: "vauxhall",
    },
    {
        label: "KIA",
        link: "kia",
    },
    {
        label: "Ford",
        link: "ford",
    },
    {
        label: "Volkswagen",
        link: "volkswagen",
    },
]

function SearchMakes() {
    return (
        <>
            <h5 className={"mb-6 text-dynamicblue font-medium text-[18px]"}>Search by popular makes</h5>
            <ul className={"list-none"}>
                {makes.map((make, index) => {
                    return (
                        <li className={"mb-3"} key={index}>
                            <Link href={`/cars/${make.link}`}>
                                <a className="relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue inline-block after:absolute after:left-0 after:right-0 after:bottom-[-5px] cursor-pointer" title={`Search ${make.label}`}>
                                    {make.label}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchMakes;
