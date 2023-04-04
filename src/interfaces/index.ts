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
}
