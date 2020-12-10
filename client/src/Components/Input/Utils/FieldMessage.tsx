import React, { useContext } from 'react';
import { FieldControlContext } from './FieldControl';

interface FieldMessageProps {
  className?: string
}

const FieldMessage: React.FC<FieldMessageProps> = ({
  children,
  className = '',
  ...props
}) => {
  const { error, touched } = useContext(FieldControlContext);
  const errorClass = 'text-sm mt-1 text-red'
  const messageClass = 'text-sm mt-1 text-dark-grey '

  return (
    <span {...props} className={[error && touched ? errorClass : messageClass, className].join(' ')}>
      {children}
    </span>
  );
};

export default FieldMessage
