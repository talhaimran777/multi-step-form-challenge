import { ReactNode } from "react";

export interface InputGroupProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  inputClasses?: string;
  formik: any;
}

export interface Step {
  number: number;
  key?: number;
}

export interface StepTextProps {
  title: string;
  description: string;
}

export interface AddonProps {
  isActive: boolean;
  title: string;
  description: string;
}

export interface PlanInterface {
  isActive: boolean;
  title: string;
  price: string;
  image: string;
}

export interface PlanProps extends PlanInterface {}

export interface ProviderProps {
  children: ReactNode;
}

export interface StepContextProps {
  currentStep: number;
  setCurrentStep: (value: number) => void;
}

export interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface FormContextProps {
  formik: any;
  setFormik: (value: any) => void;
  data: FormData;
  setData: (value: FormData) => void;
}
