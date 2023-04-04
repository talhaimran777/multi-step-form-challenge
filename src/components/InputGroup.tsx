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
      <label className="text-xs" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`block border rounded-md p-[11px] w-full ${inputClasses}`}
      />
    </>
  );
};

export default InputGroup;
