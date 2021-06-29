import { InputHTMLAttributes } from "react"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  description?: string
}

const Input = ({ color, ...props }: TextFieldProps) => {
  return (
    <input
      {...props}
      className={['text-lg px-8 py-2 rounded-full uppercase font-serif'].join(' ').trim()}
    />
  )
}

export default Input