import React from 'react'

export interface ButtonProps {
  /**
   * Button background colour styling
   */
  bgColor: 'bg-primary' | 'bg-orange' | 'bg-blue' | 'bg-teal'
  /**
   * Button text contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  bgColor,
  label,
  ...props
}: ButtonProps) => {
  const textColor = bgColor !== 'bg-primary' ? 'text-black' : 'text-white'
  return (
    <button
      type='button'
      className={[
        textColor,
        bgColor,
        'text-lg px-8 py-3 rounded-full uppercase font-serif'
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
