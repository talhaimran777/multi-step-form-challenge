export interface InputGroupProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  inputClasses?: string;
}

export interface Step {
  number: number;
  isActive: boolean;
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
