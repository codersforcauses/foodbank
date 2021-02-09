import React, { useContext } from 'react'
import { FieldControlContext } from './FieldControl'

interface FieldMessageProps {
  className?: string
  description?: boolean
}

const FieldMessage: React.FC<FieldMessageProps> = ({
  children,
  className = '',
  ...props
}) => {
  const { error, touched } = useContext(FieldControlContext)
  const errorClass = 'text-sm text-red'
  const messageClass = 'text-sm text-dark-grey'

  return (
    <span
      {...props}
      className={[error && touched && !props.description ? errorClass : messageClass, className].join(' ')}
    >
      {children}
    </span>
  )
}

export default FieldMessage
