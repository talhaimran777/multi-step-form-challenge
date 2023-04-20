import { AppStateContext } from "context-api/app-state-context";
import { StepContext } from "context-api/step";
import { AppState, PlanTypes, ProviderProps } from "interfaces/index";
import React from "react";

const Provider = ({ children }: ProviderProps) => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    planType: PlanTypes.Monthly,
  };

  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [formik, setFormik] = React.useState<any>(null);
  const [data, setData] = React.useState<AppState>(initialFormData);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      <AppStateContext.Provider value={{ formik, setFormik, data, setData }}>
        {children}
      </AppStateContext.Provider>
    </StepContext.Provider>
  );
};

export default Provider;
