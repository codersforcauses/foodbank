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
  const errorClass = 'px-4 py-3 rounded-2xl font-light bg-light-grey bg-opacity-60 focus:ring-1 ring-primary outline-none placeholder-dark-grey border border-red'
  const inputClass = 'px-4 py-3 rounded-2xl font-light bg-light-grey bg-opacity-60 focus:ring-1 ring-primary outline-none placeholder-dark-grey border border-light-grey'
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
