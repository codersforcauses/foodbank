import React, { useContext } from 'react';
import { FieldInputProps } from 'formik'
import { FieldControlContext } from './FieldControl';

interface InputProps extends FieldInputProps<string> {
  type?: 'text' | 'email' | 'number' | 'tel' | 'password'
  className?: string
}

const FieldInput: React.FC<InputProps> = ({
  type = 'text',
  className = '',
  ...props
}) => {
  const { error, touched, ...context } = useContext(FieldControlContext);
  const errorClass = 'input border-red'
  const inputClass = 'input border-light-grey'
  return (
    <input
      aria-describedby={`${context.name}-label`}
      id={context.name}
      type={type}
      {...context}
      {...props}
      className={[error && touched ? errorClass : inputClass, className].join(' ')}
    />
  );
};

export default FieldInput
