import { FunctionComponent } from 'react'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'
import RecipeOverview from 'Pages/Recipe/overview'
import RecipeSteps from 'Pages/Recipe/steps'
import Login from 'Pages/Login'
import SignUp from 'Pages/SignUp'

interface RouterElement {
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
    name: 'RecipeOverview',
    path: '/recipe/:slug/overview',
    component: RecipeOverview
  },
  {
    name: 'RecipeSteps',
    path: '/recipe/:slug/steps',
    component: RecipeSteps
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
