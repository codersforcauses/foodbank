import React from 'react'

export interface ButtonProps {
  /**
   * Button background colour styling
   */
  bgColor: 'bg-primary' | 'bg-orange' | 'bg-blue' | 'bg-teal'
  /**
   * Children prop
   */
  children: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  bgColor,
  children,
  ...props
}) => {
  const textColor = bgColor !== 'bg-primary' ? 'text-black' : 'text-white'
  let shadowColor = ''
  if (bgColor == 'bg-primary') {
    shadowColor = 'shadow-primary'
  } else if (bgColor == 'bg-orange') {
    shadowColor = 'shadow-orange'
  } else if (bgColor == 'bg-blue') {
    shadowColor = 'shadow-blue'
  } else if (bgColor == 'bg-teal') {
    shadowColor = 'shadow-teal'
  }
  return (
    <button
      type='button'
      className={[
        textColor,
        bgColor,
        shadowColor,
        'text-lg px-8 py-3 rounded-full uppercase font-serif'
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
