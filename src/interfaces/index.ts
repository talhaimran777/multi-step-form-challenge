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
  label?: string;
}

export interface StepTextProps {
  title: string;
  description: string;
}

export interface AddonProps extends AddonInterface {}

export interface PriceInterface {
  price: number;
  pricePostfix: string;
}

export interface PricingInterface {
  [key: string]: PriceInterface;
}

export interface PlanAddonCommonInterface {
  id: number;
  title: string;
  pricing: PricingInterface;
}

export interface PlanInterface extends PlanAddonCommonInterface {
  image: string;
}

export interface AddonInterface extends PlanAddonCommonInterface {
  description: string;
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
  Yearly = "yearly",
}

export interface FormState {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface AppState extends FormState {
  planType: PlanTypes;
  plan: number;
  addons: number[];
}

export interface AppStateContextProps {
  formik: any;
  setFormik: (value: any) => void;
  data: AppState;
  setData: (value: AppState) => void;
}

export interface SelectedAddonProps extends PlanAddonCommonInterface {}
