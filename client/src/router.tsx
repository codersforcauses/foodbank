import React from 'Components/FloatingButton/node_modules/react'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'

interface RouterElement {
  exact?: boolean
  name: string
  path: string
  component: React.FunctionComponent
  routes?: Array<RouterElement>
}

const routes: Array<RouterElement> = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  // Error must be the last object in the list to catch any unknown routes
  {
    name: 'Error',
    path: '*',
    component: ErrorPage
  }
]

export default routes
