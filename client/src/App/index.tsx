import { ModalContainer } from 'Components/Modal'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div className='App'>
      <ModalContainer
        header='Headerddddd'
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
        eligendi fugit. Minima quam, minus iusto numquam asperiores nihil,
        aliquid tenetur odio eos, saepe optio labore perferendis debitis hic?
        Totam, autem!
      </ModalContainer>
      <header>foodbank</header>
      <Switch>
        {routes.map(({ name, ...route }) => (
          <Route key={name} {...route} />
        ))}
      </Switch>
      <button onClick={() => setModalOpen(true)}>Modal</button>
    </div>
  )
}

export default App
