import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faQuestionCircle,
} from "@fortawesome/pro-solid-svg-icons";
import Mark from "../../../../public/img/circle.svg";
import React, { useState } from "react";
import Image from "next/image";
import { faChevronDown, faChevronUp } from "@fortawesome/pro-regular-svg-icons";

interface FormStyledRadioProps {
  options: Array<FormStyledCheckboxRadioProps>;
  thinStyle?: boolean;
  value?: string;
  name: string;
  checked?: any
  required?: boolean;
  inputDescription?: string;
  verticalStyle?: boolean;
  defaultChecked?: string | number;
  gridClass?: string;
  selected?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

interface SelectedOptionsProps {
  listItem: string;
}

interface FormStyledCheckboxRadioProps {
  value: string | number;
  label: string;
  icon: any;

  selectedTitle?: string;
  selectedOptions?: Array<SelectedOptionsProps>;
}

export default function FormStyledRadio(props: FormStyledRadioProps) {
  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  }
  setChecked(updatedList);
};
  const gridClass = " absolute right-4 top-4 sm:-right-3 sm:-top-3 z-40 hidden peer-checked:block ";
  const optionClass = `flex font-medium h-[65px] sm:h-[110px] cursor-pointer items-center lg:justify-center border peer-checked:border-[#157CFB] peer-checked:font-semibold peer-checked:text-[#F04A48] rounded-[10px] border border-[#E6E6E6] text-[#E6E6E6] px-4 text-center text-sm  `;

  return (
    <div className={"mb-6 lg:mb-10 h-full lg:w-[92%]"}>
      <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 "}>
        {props.options.map((option, index) => {
          return (
            <label key={index} className='relative'>
              <input
                // required
                type={"checkbox"}
                value={option.value}
                className={`peer hidden relative`}
                name={props.name}
                defaultChecked={props.defaultChecked === option.value}
                onChange={props.onChange}
                // checked={props.defaultChecked === option.value}
              />

              <p className={`${props.defaultChecked === option.value && 'border-red-700'}  relative flex justify-start gap-7 lg:gap-0 lg:flex-col ${optionClass}`}>
               
                <span className="lg:mb-2 pl-4 lg:pl-0 min-w-[40px] lg:block text-2xl">{option.icon}</span>
                <span className="text-black font-bold text-[13px] lg:text-[16px]">{option.label}</span>
              </p>
               <span className={gridClass}>
                  <Image src={Mark} width={30} height={30} alt="done icon" />
                </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
