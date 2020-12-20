import { FunctionComponent } from 'react'
import Home from 'Pages/Home'
import ErrorPage from 'Pages/Error'
import RecipeOverview from 'Pages/Recipe'

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
    name: 'Recipe',
    path: '/recipe/:id',
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
