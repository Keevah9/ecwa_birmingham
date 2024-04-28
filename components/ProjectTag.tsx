import React from "react";
import Button from "./Button";

const ProjectTag = ({ name, onClick, isSelected }: any) => {
    const buttonStyles = isSelected
        ? " bg-gradient-to-br from-purple-600 to-ecwadarkblue group-hover:from-purple-600 group-hover:to-ecwadarkblue hover:text-white text-white"
        : " border-slate-600 hover:bg-ecwadarkblue hover:text-white";
    return (
        <button
            className={`${buttonStyles} rounded-[5px] border w-28 px-6 py-3 cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
        // <div onClick={() => onClick(name)}>
        //     <Button type={"button"} title={name} />
        // </div>
    );
};

export default ProjectTag;