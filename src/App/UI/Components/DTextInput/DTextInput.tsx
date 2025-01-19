import React from 'react'
import { DInputProps } from '../../../Constants/Interface'

const DTextInput: React.FunctionComponent<DInputProps> = ({
    label,
    name,
    value,
    type = 'text',
    placeholder = '',
    onChange,
    required = false,
    disabled = false,
    maxLength,
    errorMessage,
    className = '',
    labelClassName = '',
    inputClassName = '',
    errorClassName = 'text-red-500 text-sm mt-1',
    pressable = false
}) => {

    const handleInputChange = () => {
        return {
            name: ""
        }
    }
    return (
        <>
            {pressable ?
                (
                    <input />
                ) : <div className={`app-input ${className}`}>
                    {label && (
                        <label htmlFor={name} className={`block mb-2 font-medium ${labelClassName}`}>
                            {label} {required && <span className="text-red-500">*</span>}
                        </label>
                    )}
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        required={required}
                        disabled={disabled}
                        maxLength={maxLength}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
                    />
                    {errorMessage && <p className={errorClassName}>{errorMessage}</p>}
                </div>}
        </>
    )
}

export default DTextInput