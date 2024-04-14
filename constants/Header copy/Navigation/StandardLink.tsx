import Link from "next/link";
import React from "react";

interface StandardLinkProps {
    label: string
    url: string
    highlight?: boolean
    dummy?: boolean
    faq?: boolean
}

export default function StandardLink(props: StandardLinkProps) {
    return (
        <li className={`mb-3 ${props.dummy ? 'dummy-content' : null}`}>
            {props.faq ? (
                <div>
                    {props.label}
                </div>
            ) : (
                <Link href={props.url}>
                    <a className={props.highlight ? 'text-dynamicblue text-sm relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue after:absolute after:left-0 after:right-0 after:bottom-[-5px]' : 'relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue after:absolute after:left-0 after:right-0 after:bottom-[-5px]'}>
                        {props.label}
                    </a>
                </Link>
            )}
        </li>
    )
}
