import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FAQProps {
  question: string;
  children: React.ReactNode;
}

export function FAQS(props: FAQProps) {
  const [FaqOpen, setFaqOpen] = useState(false);
  return (
    <section
      className={`w-full cursor-pointer items-center border-b border-[#E7E8EB] lg:px-6 pt-6 py-5 font-medium  `}
    >
      <div
        className=" flex gap-2 md:gap-0"
        onClick={() => setFaqOpen(!FaqOpen)}
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
      >
        <div
          className="mr-3  w-full list-none text-[16px] font-bold leading-[22px]"
          itemProp="name"
        >
          {props.question}
        </div>
        <span className="ml-auto flex text-[#223B50] px-2 py-2 text-[16px] ">
          <FontAwesomeIcon icon={FaqOpen ? faMinus : faPlus} />
        </span>
      </div>

      <div
        className={`${FaqOpen ? "block" : "hidden"}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="transit break-words leading-8 text-[16px] pt-5 opacity-60 " itemProp="text">
          {props.children}
        </div>
      </div>
    </section>
  );
}