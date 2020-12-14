import React from 'react'

export interface ButtonProps {
  /**
   * What colour style do you want for the button?
   */
  colour: 'primary' | 'orange' | 'blue' | 'teal'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  colour = 'primary',
  label,
  ...props
}) => {
  return (
    <button
      type='button'
      className={[
        'font-serif',
        'text-white',
        `shadow-${colour}`,
        `bg-${colour}`,
        'text-lg',
        'h-12',
        'px-11',
        'rounded-full'
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
