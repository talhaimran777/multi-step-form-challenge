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

export interface PriceInterface {
  price: number;
  pricePostfix: string;
}

export interface PricingInterface {
  [key: string]: PriceInterface;
}

export interface PlanInterface {
  isActive: boolean;
  title: string;
  pricing: PricingInterface;
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

export enum PlanTypes {
  Monthly = "monthly",
  Yearly = "yearly"
}

export interface AppState {
  name: string;
  email: string;
  phoneNumber: string;
  planType?: PlanTypes;
}

export interface AppStateContextProps {
  formik: any;
  setFormik: (value: any) => void;
  data: AppState;
  setData: (value: AppState) => void;
}
