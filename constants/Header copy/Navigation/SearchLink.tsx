import React from "react";

interface SearchLinkProps {
    make: string
    model?: string
    goToSearch: (make: string, model: string | null) => void,
    customerAuthed: boolean
}

export default function SearchLink(props: SearchLinkProps) {

    return (
        <li className={"mb-3"}>
            <div className={"relative hover:after:opacity-100 after:opacity-0 after:h-[4px] after:bg-dynamicblue inline-block after:absolute after:left-0 after:right-0 after:bottom-[-5px] cursor-pointer"} onClick={() => {
                props.goToSearch(
                    props.customerAuthed ? props.make : props.make.toUpperCase(), props.model ? props.model : null)
            }}>
                {props.make} {props.model && props.model}
            </div>
        </li>
    )
}
