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
           <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>Safeguarding</h5>
            <ul className={"mt-4"}>
                <Button title="Safeguarding" variant="btn" link="/safeguarding"/>
               
            </ul>
        </>
    )
}

export default SearchMakes;
