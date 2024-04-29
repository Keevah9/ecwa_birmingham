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
                <a className={"flex py-10 relative group-hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-ecwadarkblue after:absolute after:left-4 after:right-4 z-10 after:top-[85px] xl:after:top-[100px] px-2 text-[15px] xl:px-4 xl:text-[18px] cursor-pointer"}>
                    {props.label}
                </a>
            ) : (
                <Link href={props.url}>
                    <a
                        title={props.label}
                            className={"flex py-8 relative group-hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-ecwadarkblue z-10 after:absolute after:left-4 after:right-4 after:top-[85px] xl:after:top-[90px] px-2 text-[15px] xl:px-4 xl:text-[18px]"}
                    >
                        {props.label}
                    </a>
                </Link>
            )}
        </>

    );
}
