import { FunctionComponent } from 'react'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'
import RecipesGridView from 'Pages/Recipe-Grid'
import Login from 'Pages/Login'
import SignUp from 'Pages/SignUp'

export interface RouterElement {
  exact?: boolean
  name: string
  path: string
  component: FunctionComponent
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
    name: 'Recipes',
    path: '/recipes',
    component: RecipesGridView,
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

