import { createContext } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

export const FormContext = createContext<Partial<FormProps>>({})
export const FormProvider = FormContext.Provider

export interface FormProps<T extends FieldValues = FieldValues>
  extends Partial<
    Pick<UseFormReturn<T>, 'register' | 'formState' | 'setFocus'>
  > {
  dark?: boolean
  disabled?: boolean
}
