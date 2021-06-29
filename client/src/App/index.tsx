import React from 'react'
import routes from 'router'
import { Navbar } from 'Components/Navbar'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar links={routes} />
    </div>
  )
}
export default App
