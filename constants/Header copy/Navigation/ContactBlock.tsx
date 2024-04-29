import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCommentDots } from "@fortawesome/pro-regular-svg-icons/faCommentDots";
// import { faMobile } from "@fortawesome/pro-regular-svg-icons/faMobile";
// import { faPaperPlane } from "@fortawesome/pro-regular-svg-icons/faPaperPlane";
// import { faPhone } from "@fortawesome/pro-regular-svg-icons/faPhone";
import React from "react";

interface LinkBlockProps {
    label: string;
    description: string;
    url: string;
    dummy?: boolean;
}

interface IconProps {
    icon: string;
}

function ContactIcon(props: IconProps) {
    switch (props.icon) {
        case "Phone":
            return (
                <></>
                // <FontAwesomeIcon
                //     color={"#FF6A47"}
                //     size={"2x"}
                //     icon={faPhone}
                //     className={"mr-6"}
                // />
            );
        case "Email":
            return (
                <></>
            );
        case "SMS":
            return (
                <></>
            );
        case "Live Chat":
            return (
                <></>
            );
        default:
            return null;
    }
}

export default function ContactBlock(props: LinkBlockProps) {
    return (
        <li className={"mb-7"}>
            {props.url ?
                <Link href={props.url}>
                    <a
                        className={`flex w-full flex-row items-center ${props.dummy ? "dummy-content" : null
                            }`}
                        title={props.label}
                    >
                        <div className="mt-8"><ContactIcon icon={props.label} /></div>
                        <div
                            className={
                                "flex w-full items-center justify-between font-medium"
                            }
                        >
                            <div
                                className={
                                    "flex flex-col items-start justify-center"
                                }
                            >
                                <span className={"mr-5  hover:opacity-60 text-ecwadarkblue font-black  text-ecwadarkblue mb-2"}>
                                    {props.label}
                                </span>
                                <p className="text-[16px]">{props.description}</p>
                            </div>
                        </div>
                    </a>
                </Link>
                :
                <span
                    className={`flex w-full flex-row items-center ${props.dummy ? "dummy-content" : null
                        }`}
                    title={props.label}
                >
                    <div className="mt-8"><ContactIcon icon={props.label} /></div>
                    <div
                        className={
                            "flex w-full items-center justify-between font-medium"
                        }
                    >
                        <div
                            className={
                                "flex flex-col items-start justify-center"
                            }
                        >
                            <span className={"mr-5  hover:opacity-60 text-ecwadarkblue font-black  text-ecwadarkblue mb-2"}>
                                {props.label}
                            </span>
                            <p className="text-[16px]">{props.description}</p>
                        </div>
                    </div>
                </span>

            }
        </li>
    );
}
