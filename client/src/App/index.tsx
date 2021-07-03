import React from 'react'
import routes, { RouterElement } from 'router'
import { Navbar } from 'Components/Navbar'

const App: React.FC = () => {
  const navRoutes: Array<RouterElement> = [...routes]
  navRoutes.pop()
  return (
    <div className='App'>
      <Navbar links={navRoutes} />
    </div>
  )
}
export default App
