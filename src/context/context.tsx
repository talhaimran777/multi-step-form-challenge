import { ContextProps } from "interfaces/index";
import { createContext, useContext } from "react";

export const Context = createContext<ContextProps>({
  currentStep: 1,
  setCurrentStep: () => {},
  formik: null,
  setFormik: () => {},
});

export const useSteps = () => {
  return useContext(Context);
};
