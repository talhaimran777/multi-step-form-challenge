import React from "react";
import { ProviderProps } from "interfaces/index";
import { Context } from "context-api/context";

const Provider = ({ children }: ProviderProps) => {
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  return (
    <Context.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
