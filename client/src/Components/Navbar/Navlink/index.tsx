import React from 'react'

export interface NavlinkProps {
  page: string
  route: string
}

export const Navlink: React.FC<NavlinkProps> = ({ page, route }) => {
  return (
    <a className='text-white font-serif p-2' href={route}>
      {page}
    </a>
  )
}
