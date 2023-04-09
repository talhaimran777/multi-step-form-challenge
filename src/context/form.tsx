import { FormContextProps } from "interfaces/index";
import { createContext, useContext } from "react";

export const FormContext = createContext<FormContextProps>({
  formik: null,
  setFormik: () => {},
  data: { name: "", email: "", phoneNumber: "" },
  setData: () => {},
});

export const useForm = () => {
  return useContext(FormContext);
};
