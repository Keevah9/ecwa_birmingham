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
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                </svg>
               
            );
        case "Email":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path stroke="#F9864B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0-9 6.5L3 8" />
                </svg>
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
                        className={`flex w-full gap-4 flex-row items-cente ${props.dummy ? "dummy-content" : null
                            }`}
                        title={props.label}
                    >
                        <div className="mt-"><ContactIcon icon={props.label} /></div>
                        <div
                            className={
                                "flex w-full items-center justify-between gap-4 font-medium"
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
                    className={`flex w-full gap-4 flex-row items-centr ${props.dummy ? "dummy-content" : null
                        }`}
                    title={props.label}
                >
                    <div className="mt-"><ContactIcon icon={props.label} /></div>
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
                            <p className="text-[16px] text-[#000]">{props.description}</p>
                        </div>
                    </div>
                </span>

            }
        </li>
    );
}
