import { ButtonHTMLAttributes, PropsWithChildren } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'orange' | 'blue' | 'teal'
}

const Button = ({ children, color, className, ...props }: PropsWithChildren<ButtonProps>) => {
  let bgColor: string

  switch (color) {
    case 'orange':
      bgColor = 'bg-orange text-black shadow-orange'
      break
    case 'blue':
      bgColor = 'bg-blue text-black shadow-blue'
      break
    case 'teal':
      bgColor = 'bg-teal text-black shadow-teal'
      break
    default:
      bgColor = 'bg-primary text-white shadow-primary'
  }

  return (
    <button
      {...props}
      className={[
        'text-2xl px-8 py-2 rounded-3xl uppercase font-serif transform duration-100 hover:scale-105',
        bgColor,
        className
      ]
        .join(' ')
        .trim()
      }
    >
      {children}
    </button>
  )
}

export default Button