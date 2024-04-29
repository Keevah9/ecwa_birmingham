import React, { useState } from "react";
// import { faPlus, faMinus, faAngleDown, faAngleUp } from "@fortawesome/pro-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FAQProps {
  question: string;
  children: React.ReactNode;
  joinUs?: boolean;
  number?: number
}

export function FAQS(props: FAQProps) {
  const [FaqOpen, setFaqOpen] = useState(false);
  return (
    <div
      className={`w-full cursor-pointer items-center ${props.joinUs ? 'py-5 bg-ecwadarkblue mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-[5px] px-8 py-[3rem]' : 'border-b border-ecwadarkblue lg:px-6  pt-6 '} font-medium  `}
    >
      <div
        className=" flex gap-2 md:gap-0"
        onClick={() => setFaqOpen(!FaqOpen)}
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
      >
        <div
          className={`mr-3  w-full list-none  font-bold leading-[22px] ${props.joinUs ? 'text-[22px] m text-white' : 'text-[18px] text-ecwadarkblue'}`}
          itemProp="name"
        >
        {props.joinUs && <span className="h-12 text-center text-[25px] items-center justify-center w-12  text-ecwadarkblue bg-ecwaorange rounded-full inline-flex text-center mr-3">{props.number}</span>}  {props.question}
        </div>
        
        {/* {props.joinUs ? <span className="ml-auto flex text-[#223B50] px-2 py-2 text-[16px] ">
          <FontAwesomeIcon icon={FaqOpen ? '+' : '-'} className={`${props.joinUs && 'text-white text-[22px]'}`} />
        </span> : <span className="ml-auto flex text-[#223B50] px-2 py-2 text-[16px] ">
          <FontAwesomeIcon icon={FaqOpen ? faMinus : faPlus} className={`${props.joinUs && 'text-white text-[22px]'}`} />
        </span>} */}
      </div>

      <div
        className={`${FaqOpen ? "block" : "hidden"}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className={`transit break-words leading-8 text-[16px]  ${props.joinUs ? ' text-white' : ' opacity-60'} py-5 `}  itemProp="text">
          {props.children}
        </div>
      </div>
    </div>
  );
}