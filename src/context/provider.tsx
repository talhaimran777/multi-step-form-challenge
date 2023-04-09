import React from "react";
import { FormData, ProviderProps } from "interfaces/index";
import { StepContext } from "context-api/step";
import { FormContext } from "context-api/form";

const Provider = ({ children }: ProviderProps) => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [formik, setFormik] = React.useState<any>(null);
  const [data, setData] = React.useState<FormData>(initialFormData);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      <FormContext.Provider value={{ formik, setFormik, data, setData }}>
        {children}
      </FormContext.Provider>
    </StepContext.Provider>
  );
};

export default Provider;
