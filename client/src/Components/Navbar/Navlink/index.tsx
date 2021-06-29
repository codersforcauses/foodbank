import React from 'react'
import { Link } from 'react-router-dom'
import { RouterElement } from '../../../router'

// export interface NavlinkProps {
//   page: string
//   route: string
// }

export const Navlink: React.FC<RouterElement> = ({ name, path }) => {
  return (
    <li className={name.toLowerCase()}>
      <Link to={path}>{name}</Link>
    </li>
  )
}
