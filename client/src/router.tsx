import { FunctionComponent } from 'react'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'
import RecipeOverview from 'Pages/Recipe/overview'

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
  // Error must be the last object in the list to catch any unknown routes
  {
    name: 'Error',
    path: '*',
    component: ErrorPage
  }
]

export default routes
