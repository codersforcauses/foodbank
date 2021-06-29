import React from 'react'
import { RouterElement } from '../../../router'
import { Route } from 'react-router-dom'

// export interface NavlinkProps {
//   page: string
//   route: string
// }

export const Navlink: React.FC<RouterElement> = ({ name, path, component }) => {
  return <Route exact path={path} clasName={name} component={component} />
}

// <a className='text-white font-serif p-2 hover:opacity-75' href={route}>
//   {page}
// </a>
