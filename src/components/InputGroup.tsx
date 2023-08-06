import { InputGroupProps } from "interfaces/index";
import React from "react";

const InputGroup: React.FC<InputGroupProps> = ({
  name,
  label,
  type,
  placeholder,
  inputClasses,
  formik,
}) => {
  return (
    <>
      <label className="text-xs lg:text-base text-heading" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`block border rounded-md py-2 px-4 w-full text-[15px] font-medium text-paragraph ${inputClasses}`}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className="text-red-400">{formik.errors[name]}</span>
      )}
    </>
  );
};

export default InputGroup;
