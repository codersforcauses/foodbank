import React from 'react'

export interface NavlinkProps {
  page: string
  route: string
  textColor: 'primary' | 'dark-grey' | 'light-grey' | 'white'
}

export const Navlink: React.FC<NavlinkProps> = ({
  page,
  route,
  textColor = 'primary'
}) => {
  return (
    <a
      className={[
        `navbar__navlink`,
        `font-serif`,
        `text-${textColor}`,
        `hover:underline`,
        `hover:text-orange`,
        `w-max`,
        `place-self-center`,
        `p-2`
      ].join(' ')}
      href={route}
    >
      {page}
    </a>
  )
}
