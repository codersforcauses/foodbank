import React from 'react'

interface FieldControlProps {
  disabled: boolean
  error?: string
  name: string
  required: boolean
  touched: boolean
}

const FieldControlContext = React.createContext<FieldControlProps>({
  disabled: false,
  error: '',
  name: '',
  required: false,
  touched: false
})

const FieldControl: React.FC<FieldControlProps> = ({
  children,
  disabled,
  error,
  name,
  required,
  touched,
}) => {
  return (
    <FieldControlContext.Provider
      value={{ disabled, error, name, required, touched }}
    >
      {children}
    </FieldControlContext.Provider>
  )
}

export { FieldControlContext, FieldControl }
