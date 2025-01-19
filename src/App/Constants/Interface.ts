import { InputType } from "./Types";

export interface DInputProps {
    label: string;
    name: string;
    value: string;
    type?: InputType;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    maxLength?: number;
    errorMessage?: string;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    pressable?: boolean;
}