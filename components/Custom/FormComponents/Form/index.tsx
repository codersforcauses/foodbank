import { PropsWithChildren, useMemo } from 'react'
import {
  FieldValues,
  FormProvider as HookFormProvider,
  SubmitHandler,
  useForm,
  UseFormProps
} from 'react-hook-form'

import { FormProps, FormProvider } from './context'

const Form = <T extends FieldValues = FieldValues>({
  disabled,
  defaultValues,
  children,
  onSubmit,
  className
}: PropsWithChildren<HookFormProps<T>>) => {
  const methods = useForm<T>({
    defaultValues: defaultValues,
    mode: 'onSubmit'
  })
  const { register, formState, setFocus } = methods
  const value: FormProps<T> = useMemo(
    () => ({
      disabled,
      register,
      formState,
      setFocus
    }),
    [disabled, formState, register, setFocus]
  )
  return (
    <HookFormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={['flex flex-col space-y-4', className || 'mt-4'].join(' ')}
      >
        {/* I tried */}
        <FormProvider value={value as Partial<FormProps<FieldValues>>}>
          {children}
        </FormProvider>
      </form>
    </HookFormProvider>
  )
}

export default Form

interface HookFormProps<T extends FieldValues> extends UseFormProps<T> {
  disabled?: boolean
  className?: string
  onSubmit: SubmitHandler<T>
}
