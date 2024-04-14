import {
  faChevronDown,
  faExclamationTriangle,
  faSort,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//@ts-ignore
import Select from "react-select";
import React from "react";

interface FormSelectProps {
  autocomplete?: boolean;
  feedbackLabel?: string;
  feedbackType?: "error" | "info";
  options: Array<FormSelectOptionProps>;
  label: string;
  footnote?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeSelect?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string;
  required?: boolean;
  enclosed?: boolean;
  fullWidth?: boolean;
  modal?: boolean;
}

interface FormSelectOptionProps {
  value: string | number;
  label: string;
}

export default function FormSelect(props: FormSelectProps) {
  let textColor: string = "";
  let fieldBorderColor: string = "";

  switch (props.feedbackType) {
    case "error":
      textColor = "text-red-800";
      fieldBorderColor = "border-red-700";
      break;
    case "info":
      break;
    default:
      textColor = "text-red-800";
      fieldBorderColor = "border-red-700";
  }

  return (
    <>
      <div className={` relative w-full`}>
        <label
          className={` mb-2 flex items-center label font-bold tracking-wide`}
        >
          <span className={`${props.modal && "hidden lg:block"}`}>
            {" "}
            {props.label}
            {props.required && (
              <>{<sup className="text-[#F04A48]">*</sup>}</>
            )}
          </span>
        </label>
        {props.autocomplete ? (
          <>

          </>
        ) : (
          <select
            className={`
              relative h-[57px] w-full cursor-pointer appearance-none rounded-[8px] bg-white border-[1px] border-[#E6E6E6] text-[14px] lg:text-[16px] py-[15px] pl-4 label  lg:h-[58px] lg:w-full`}
            onChange={props.onChange}
            value={props.value}
            required={props.required === true}
          >
            {props.options.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        )}
        <div
          className={` ${props.fullWidth
              ? "right-[30px] bottom-[18px] lg:right-[30px]"
              : "right-[20px] bottom-[20px] lg:right-[20px]  "
            }  pointer-events-none absolute   flex  items-center justify-center rounded-[5px]  lg:bottom-[3px]  lg:h-[52px] `}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={"text-base text-uniqueprimarybodylg:text-sm"}
          />
        </div>
      </div>
    </>
  );
}
