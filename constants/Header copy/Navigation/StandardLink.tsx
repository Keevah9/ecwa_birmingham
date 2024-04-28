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
                    <a className={props.highlight ? 'text-ecwadarkblue text-[16px] relative hover:after:opacity-100 after:opacity-0  after:h-[4px] after:bg-ecwadarkblue after:absolute after:left-0 after:right-0 after:bottom-[-5px]' : 'relative pb-1 mb-2 hover:after:opacity-100 after:opacity-0 after:h-[3px] after:bg-ecwadarkblue after:absolute after:left-0 after:right-0 after:bottom-[-1px]'}>
                        {props.label}
                    </a>
                </Link>
            )}
        </li>
    )
}
