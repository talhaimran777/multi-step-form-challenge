import { AppStateContextProps, PlanTypes } from "interfaces/index";
import { createContext, useContext } from "react";

export const AppStateContext = createContext<AppStateContextProps>({
  formik: null,
  setFormik: () => {},
  data: { name: "", email: "", phoneNumber: "", planType: PlanTypes.Monthly, addons: [], plan: 0 },
  setData: () => {},
});

export const useAppState = () => {
  return useContext(AppStateContext);
};
