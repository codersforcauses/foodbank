/* eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
/* eslint-disable jsx-a11y/click-events-have-key-events*/

import FocusTrap from 'focus-trap-react'
import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'

export interface ModalContainerProps {
  isOpen: boolean
  header: string
  children: any
  onClose: () => void
}
/* 
Use css to center, absolute, margin-order
z-index, 1000
*/
const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  header,
  children,
  onClose
}) => {
  const escFunction = useCallback(
    e => {
      if (e.keyCode === 27) {
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
          <FocusTrap>
            <div
              className='flex flex-wrap justify-center content-center bg-black bg-opacity-50 z-50 absolute inset-0'
              onClick={onClose}
              role='dialog'
            >
              <div
                className='max-w-md min-w-320 bg-primary p-5 rounded-xl flex flex-col shadow-2xl'
                onClick={event => event.stopPropagation()}
                role='dialog'
              >
                <div id='modal-header' className='grid grid-cols-3 pb-5'>
                  <h2 className='text-3xl col-start-2 font-serif uppercase justify-self-center text-white'>
                    {header}
                  </h2>
                  <button
                    className='justify-self-end font-serif text-red text-xl shadow-2xl'
                    onClick={onClose}
                  >
                    X
                  </button>
                </div>
                <div
                  id='modal-body'
                  className='font-sans bg-white rounded-3xl p-4'
                >
                  {children}
                </div>
              </div>
            </div>
          </FocusTrap>,
          portalDiv
        )
      : null
  } else return null
}

export default ModalContainer
