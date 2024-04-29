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
          className={`mr-3  w-full list-none leading-[32px] font-bold leading-[22px] ${props.joinUs ? 'text-[22px] flex sm:items-center text-white ' : 'text-[18px] text-ecwadarkblue'}`}
          itemProp="name"
        >
          {props.joinUs && <span className=" h-12 max-w-12 text-center text-[25px] items-center justify-center lg:w-12  text-ecwadarkblue bg-ecwaorange rounded-full inline-flex flex-grow text-center mr-3">{props.number}</span>}  <p className={`${props.joinUs ? ' text-[18px] sm:text-[22px] max-w-[10rem] sm:max-w-[20rem] md:max-w-full flex items-center text-white ' : 'text-[18px] text-ecwadarkblue'}  leading-[30px]`}>{props.question}</p>
        </div>
        
        {props.joinUs ? <span className="ml-auto flex text-[#223B50] px-2 py-2 text-[16px] ">
          {FaqOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>}
       
        </span> : <span className="ml-auto flex text-[#223B50] px-2 py-2 text-[16px] ">
            {FaqOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
            </svg> }
        </span>}
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