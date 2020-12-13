import React, { useContext } from 'react';
import { FieldControlContext } from './FieldControl';

const FieldLabel: React.FC = props => {
  const { name, required } = useContext(FieldControlContext);
  return (
    <label
      htmlFor={name}
      id={`${name}-label`}
      className='font-bold'
    >
      {props.children}
      {required && <span className='text-orange'>*</span>}
    </label>
  );
};

export default FieldLabel;
