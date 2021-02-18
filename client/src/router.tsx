import { RouteProps } from 'react-router-dom'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'
import Login from 'Pages/Login'
import SignUp from 'Pages/SignUp'
export interface RouterElement extends RouteProps {
  isPrivate?: true
  name: string
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
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp,
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
