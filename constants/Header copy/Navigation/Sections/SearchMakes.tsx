import React from "react";
import Link from "next/link";

const makes = [
    {
        label: "Student groups",
        link: "/#students"
    },
    {
        label: "Worker groups",
        link: "/women-ministries"
    },
    {
        label: "Bible Study",
        link: "/womenn-ministries"
    },
    {
        label: "Ushers",
        link: "/family-ministries"
    },
    {
        label: "Welfare",
        link: "/nissan",
    },
    {
        label: "Prayer",
        link: "/",
    }
]

function SearchMakes() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>Group</h5>
            <ul className={"list-none"}>
                {makes.map((make, index) => {
                    return (
                        <li className={"mb-3"} key={index}>
                            <Link href={`/cars/${make.link}`}>
                                <a className="relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-ecwadarkblue inline-block after:absolute after:left-0 after:right-0 after:bottom-[-5px] cursor-pointer" title={`Search ${make.label}`}>
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
