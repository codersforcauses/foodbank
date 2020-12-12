import React from 'react'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'
import Login from 'Pages/Login'

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
  {
    name: 'Login',
    path: '/login',
    component: Login,
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
