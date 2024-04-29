// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faSquareExclamation, faCircleCheck, faTriangleExclamation, faCircleXmark, IconDefinition} from "@fortawesome/pro-solid-svg-icons";
import React from "react";

interface AlertProps {
    type: 'error' | 'warning' | 'info' | 'success'
    message: string
}

export default function Alert(props:AlertProps) {
    return (
        <div className={`rounded-[15px] bg-[#F04A48] p-4 relative`}>
            <div className={`absolute left-[18px] top-[16px] text-white text-xl`}>
                {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
            </div>
            <div className="pl-10">
                <div className={`text-left text-[16px] font-bold font-barlow text-white mb-0 break-words whitespace-normal `}>{props.message}</div>
            </div>
        </div>
    )
}
