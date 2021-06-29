import { createContext } from 'react'
import { UseFormReturn } from 'react-hook-form'

export const FormContext = createContext<Partial<FormProps>>({})
export const FormProvider = FormContext.Provider

export interface FormProps
  extends Partial<Pick<UseFormReturn, 'register' | 'formState'>> {
  dark?: boolean
  disabled?: boolean
}
