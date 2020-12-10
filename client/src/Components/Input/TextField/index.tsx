import React from 'react'
import { useField } from 'formik'
import { FieldControl, FieldInput, FieldLabel, FieldMessage } from '../Utils'

export interface InputProps {
  /**
   * If field is required for form
   */
  required?: boolean
  /**
   * If input is disabled
   */
  disabled?: boolean
  /**
  * Add description or helper text to input
  */
  description?: string
  /**
   * Placeholder text for input
   */
  placeholder?: string
  /**
   * Label for input
   */
  label: string
  /**
   * Name of input (required for Formik to work)
   */
  name: string
  /**
   * Type of text
   */
  type?: 'text' | 'email' | 'number' | 'tel' | 'password'
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  disabled = false,
  required = false,
  label,
  description,
  ...props
}) => {
  const [{ name, ...field }, { error, touched }] = useField(props.name);
  return (
    <FieldControl
      name={name}
      error={error}
      touched={touched}
      required={required}
      disabled={disabled}
    >
      <div className="flex flex-col">
        <FieldLabel>{label}</FieldLabel>
        <FieldInput type={type} {...field} {...props} />
        {touched && error && <FieldMessage>{error}</FieldMessage>}
        {description && <FieldMessage>{description}</FieldMessage>}
      </div>
    </FieldControl>

  )
}

export default Input
