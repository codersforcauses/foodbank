/* eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
/* eslint-disable jsx-a11y/click-events-have-key-events*/

import React from 'react'
import './modal.css'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
}
/* 
onClick on modalContainer should call onClose (called by a button)
Use css to center, absolute, margin-order
z-index, 1000
*/
export const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <div
      className={`modal-background ${isOpen ? '' : 'closed'}`}
      onClick={onClose}
      onKeyUp={event => (event.key === 'escape' ? onClose() : null)}
      role='dialog'
    >
      <div className='modal-container'>
        <div
          className='modal'
          onClick={event => event.stopPropagation()}
          role='dialog'
        ></div>
      </div>
    </div>
  )
}
