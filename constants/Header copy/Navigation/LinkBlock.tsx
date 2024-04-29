import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/pro-regular-svg-icons/faAngleRight";
import React from "react";

interface LinkBlockProps {
    label: string;
    description: string;
    url: string;
    dummy?: boolean;
}

export default function LinkBlock(props: LinkBlockProps) {
    return (
        <li className={"mb-7"}>
            <Link href={props.url}>
                <a
                    className={`flex w-full flex-col ${
                        props.dummy ? "dummy-content" : null
                    }`}
                    title={props.label}
                >
                    <div
                        className={
                            "flex w-full items-start justify-between font-medium"
                        }
                    >
                        <div>
                            <span className={"hover:opacity-60 text-ecwadarkblue"}>
                                {props.label}
                            </span>
                            <div className={"mt-2 text-[16px]"}>
                                {props.description}
                            </div>
                        </div>

                        {/* <FontAwesomeIcon
                            icon={faAngleRight}
                            className={"ml-4 mt-2"}
                        /> */}
                    </div>
                </a>
            </Link>
        </li>
    );
}
