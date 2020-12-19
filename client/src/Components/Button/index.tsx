import React from 'react'

export interface ButtonProps {
  /**
   * Button background colour styling
   */
  backgroundColour: 'primary' | 'orange' | 'blue' | 'teal'
  /**
   * Button text colour styling
   */
  textColour: 'white' | 'black' | 'primary'
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
  backgroundColour = 'primary',
  textColour = 'white',
  label,
  ...props
}) => {
  const textClass = `text-${textColour}`
  const shadowClass = `shadow-${backgroundColour}`
  const backgroundClass = `bg-${backgroundColour}`
  return (
    <button
      type='button'
      className={[
        'font-serif',
        textClass,
        shadowClass,
        backgroundClass,
        'text-lg',
        'h-12',
        'px-8',
        'rounded-full',
        'uppercase'
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
