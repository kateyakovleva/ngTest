export interface IFormItem {
  type: 'text' | 'number' | 'select' | 'checkbox';
  label: string;
  name: string;
  description?: string;
  placeholder?: string;
  isMulti?: boolean;
  required?: boolean;
  choices?: IOptionItem[];
  value?: any;
}

export interface IOptionItem {
  label: string;
  value: string | number;
}
