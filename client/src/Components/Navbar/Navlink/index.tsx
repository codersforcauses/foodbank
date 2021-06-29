import React from 'react'
import { Link } from 'react-router-dom'
import { RouterElement } from '../../../router'

// export interface NavlinkProps {
//   page: string
//   route: string
// }

export const Navlink: React.FC<RouterElement> = ({ name, path }) => {
  return (
    <Link className="w-nav-link nav-link" to={path}>
      {name}
    </Link>
  )
}
