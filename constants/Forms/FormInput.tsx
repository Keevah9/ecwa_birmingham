// import { faExclamationTriangle } from "@fortawesome/pro-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FormFieldProps {
  feedbackLabel?: string;
  feedbackType?: "error" | "info";
  type: string;
  label?: string;
  isSortCode?: boolean;
  maxLength?: number;
  autoComplete?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  innerLabel?: string;
  innerLabelEnd?: false;
  innerLabelBG?: string;
  innerLabelText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
  readOnly?: boolean;
  button?: boolean;
  fullWidth?: boolean;
  textWidth?: boolean;
    min?: any;
    style?: any;
  otherOptions?: boolean;
  pattern?: any;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  hideShowPassword?: boolean;
  togglePassword?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function FormInput(props: FormFieldProps) {
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
    <div className={` ${props.isSortCode ? "d-flex" : "w-full"}`}>
      <label className={` label`}>
        <p>
          {props.label}
          {props.required && (
            <>{ <sup className="text-ecwaorange">*</sup>}</>
          )}
        </p>
        {props.feedbackLabel && (
          <div
            className={`mt-1 border-4 text-sm text-ecwaorange sm:ml-auto sm:mt-0 ${textColor}`}
          >
            {/* <FontAwesomeIcon icon={faExclamationTriangle} className={"mr-1"} />{" "} */}
            {props.feedbackLabel}
          </div>
        )}
              
      </label>

      <div className={`  `}>
        {props.type === "textarea" ? (
          <textarea
            type={props.type}
            value={props.value}
            maxLength={props.maxLength}
            autoComplete={props.autoComplete ? props.autoComplete : undefined}
            // defaultValue={props.defaultValue ? props.defaultValue : ""}
            className={`text-[16px] ${
              props.type === "textarea" && "col-span-full row-span-4"
            } ${props.otherOptions ? "modal-textfield" : "field "} ${
              props.textWidth && "modal-text"
            } `}
            //@ts-ignore
            onChange={props.onChange}
            required={props.required === true}
            rows={4}
            cols={40}
          />
        ) : (
          <input
            readOnly={props.readOnly}
            // placeholder={props.placeholder ? props.placeholder : props.label}
            type={props.type}
            pattern={props.pattern}
            min={props.min}
            multiple
            value={props.value}
            maxLength={props.maxLength}
            autoComplete={props.autoComplete ? props.autoComplete : undefined}
            defaultValue={props.defaultValue ? props.defaultValue : ""}
            placeholder={props.placeholder}
            className={`appearance-none !rounded-[5px] text-black text-[16px]  ${
              props.type === "textarea" && "col-span-full row-span-4"
            } ${props.otherOptions ? "modal-textfield " : "field "} ${
              props.fullWidth && "w-[100%]"
            } ${props.textWidth && "modal-text"} ${props.style}`}
            onBlur={props.onBlur}
            onChange={props.onChange}
            required={props.required === true}
          />
        )}
        
      </div>
    </div>
  );
}
