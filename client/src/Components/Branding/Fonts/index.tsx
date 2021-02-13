import React from 'Components/FloatingButton/node_modules/react'

export interface FontProps {
  /**
   * Font type
   */
  type?: 'Abraham' | "Bliss"
  /**
   * Font weight
   */
  weight?: 'light' | 'normal' | 'medium' | 'bold'
  /**
   * Font relative size
   */
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  both: boolean

}

const Fonts: React.FC<FontProps> = ({ type = 'Abraham', weight, size, both }) => both ?
  <>
    <p className={`font-serif font-${weight} text-${size}xl`}>
      The quick brown fox jumps over the lazy dog.
      <br /><br />
      1234567890
    </p>
    <p className={`font-sans font-${weight} text-${size}xl`}>
      The quick brown fox jumps over the lazy dog.
      <br /><br />
      1234567890
    </p>
  </> :
  <p className={`${type === 'Abraham' ? 'font-serif' : 'font-sans'} font-${weight} text-${size}xl`}>
    The quick brown fox jumps over the lazy dog.
    <br /><br />
    1234567890
  </p>

export default Fonts
