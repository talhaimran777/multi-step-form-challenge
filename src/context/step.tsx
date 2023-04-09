import { StepContextProps } from "interfaces/index";
import { createContext, useContext } from "react";

export const StepContext = createContext<StepContextProps>({
  currentStep: 1,
  setCurrentStep: () => {},
});

export const useSteps = () => {
  return useContext(StepContext);
};
