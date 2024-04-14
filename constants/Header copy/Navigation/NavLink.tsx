import Link from "next/link";
import React from "react";

interface NavLinkProps {
    url: string
    label: string
}

export default function NavLink(props: NavLinkProps) {
    return (
        <>
            {(props.url === '/') ? (
                <div className={"flex py-10 relative group-hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue after:absolute after:left-4 after:right-4 after:top-[100px] px-2 text-[15px] xl:px-4 xl:text-base cursor-pointer"}>
                    {props.label}
                </div>
            ) : (
                <Link href={props.url}>
                    <a
                        title={props.label}
                        className={"flex py-10 relative group-hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue after:absolute after:left-4 after:right-4 after:top-[100px] px-2 text-[15px] xl:px-4 xl:text-base"}
                    >
                        {props.label}
                    </a>
                </Link>
            )}
        </>

    );
}
