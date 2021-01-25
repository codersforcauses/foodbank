/* eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
/* eslint-disable jsx-a11y/click-events-have-key-events*/

import React, { useEffect, useCallback } from 'react'
import './modal.css'
import ReactDOM from 'react-dom'

interface ModalContainerProps {
  isOpen: boolean
  header: string
  children: string
  onClose: () => void
}
/* 
Use css to center, absolute, margin-order
z-index, 1000
*/
export const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  header,
  children,
  onClose
}) => {
  const escFunction = useCallback(
    event => {
      if (event.keyCode === 27) {
        onClose()
      }
    },
    [onClose]
  )
  useEffect(() => {
    document.addEventListener('keydown', escFunction)
    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [escFunction])
  if (isOpen) {
    const portalDiv = document.getElementById('portal')
    return portalDiv
      ? ReactDOM.createPortal(
          <div className={`modal-background`} onClick={onClose} role='dialog'>
            <div
              className='modal'
              onClick={event => event.stopPropagation()}
              role='dialog'
            >
              <button onClick={onClose}>X</button>
              <h1>{header}</h1>
              {children}
            </div>
          </div>,
          portalDiv
        )
      : null
  } else return null
}
