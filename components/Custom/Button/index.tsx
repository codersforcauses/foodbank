import { ButtonHTMLAttributes, PropsWithChildren } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'orange' | 'blue' | 'teal'
}

const Button = ({ children, color, ...props }: PropsWithChildren<ButtonProps>) => {
  let textColor: string, bgColor: string

  switch (color) {
    case 'orange':
      textColor = 'text-black'
      bgColor = 'bg-orange'
      break
    case 'blue':
      textColor = 'text-black'
      bgColor = 'bg-blue'
      break
    case 'teal':
      textColor = 'text-black'
      bgColor = 'bg-teal'
      break
    default:
      textColor = 'text-white'
      bgColor = 'bg-primary'
  }

  return (
    <button
      {...props}
      className={[textColor, bgColor, 'text-lg px-8 py-2 rounded-full uppercase font-serif'].join(' ').trim()}
    >
      {children}
    </button>
  )
}

export default Button