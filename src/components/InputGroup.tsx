import { InputGroupProps } from "interfaces/index";
import React from "react";

const InputGroup: React.FC<InputGroupProps> = ({
  name,
  label,
  type,
  placeholder,
  inputClasses,
}) => {
  return (
    <>
      <label className="text-xs text-heading" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`block border rounded-md py-2 px-4 w-full text-[15px] font-medium text-paragraph ${inputClasses}`}
      />
    </>
  );
};

export default InputGroup;
