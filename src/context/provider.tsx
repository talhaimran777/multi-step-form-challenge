import React from "react";
import { ProviderProps } from "interfaces/index";
import { Context } from "context-api/context";

const Provider = ({ children }: ProviderProps) => {
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [formik, setFormik] = React.useState<any>(null);

  return (
    <Context.Provider
      value={{ currentStep, setCurrentStep, formik, setFormik }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
