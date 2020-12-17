import React from 'react'

export interface ButtonProps {
  /**
   * Button colour styling
   */
  colour: 'primary' | 'orange' | 'blue' | 'teal'
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
  colour = 'primary',
  label,
  ...props
}) => {
  const textColour = (colour: string): string => {
    if (colour == 'primary') {
      return 'white'
    } else {
      return 'black'
    }
  }
  console.log(`shadow-${colour}`)
  return (
    <button
      type='button'
      className={[
        'font-serif',
        `text-${textColour(colour)}`,
        `shadow-${colour}`,
        `bg-${colour}`,
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
