import { InputHTMLAttributes, useContext } from 'react'
import { RegisterOptions } from 'react-hook-form'
import { FormContext } from '../Form/context'
import { FieldControl, FieldLabel, FieldMessage } from '../utils'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  description?: string
  rules?: RegisterOptions
}

const TextField = ({
  color,
  description,
  disabled = false,
  label,
  required = false,
  rules = {},
  ...props
}: TextFieldProps) => {
  const {
    formState,
    disabled: formDisabled,
    register
  } = useContext(FormContext)
  const error: string = formState?.errors?.[props.name]?.message

  return (
    <FieldControl
      name={props.name}
      error={error}
      required={'required' in rules || required}
      disabled={formDisabled || disabled}
    >
      <div className='flex flex-col w-full'>
        <FieldLabel>{label}</FieldLabel>
        <input
          {...props}
          aria-describedby={`${props.name}-label`}
          aria-invalid={!!error}
          id={props.name}
          className={['text-lg px-4 py-2 rounded-2xl font-sans input']
            .join(' ')
            .trim()}
          {...register?.(props.name, rules)}
          // onChange={props.onChange}
        />
        {error ? (
          <FieldMessage>{error}</FieldMessage>
        ) : (
          description && <FieldMessage description>{description}</FieldMessage>
        )}
      </div>
    </FieldControl>
  )
}

export default TextField
