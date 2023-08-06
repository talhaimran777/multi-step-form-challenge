import { AppStateContext } from "context-api/app-state-context";
import { StepContext } from "context-api/step";
import { AppState, PlanTypes, ProviderProps } from "interfaces/index";
import React from "react";
import { ViewportContext } from "./viewport-context";

const Provider = ({ children }: ProviderProps) => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    planType: PlanTypes.Monthly,
    plan: 1,
    addons: [],
  };

  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [formik, setFormik] = React.useState<any>(null);
  const [data, setData] = React.useState<AppState>(initialFormData);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      <AppStateContext.Provider value={{ formik, setFormik, data, setData }}>
        <ViewportContext.Provider value={{ width, height }}>
          {children}
        </ViewportContext.Provider>
      </AppStateContext.Provider>
    </StepContext.Provider>
  );
};

export default Provider;
