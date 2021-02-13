import FocusTrap from 'focus-trap-react'
import React, { useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

export interface ModalContainerProps {
  isOpen: boolean
  header: string
  children: string
  onClose: () => void
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  header,
  children,
  onClose
}) => {
  const ref = useRef<any>()

  const escFunction = useCallback(
    e => {
      if (e.keyCode === 27) {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    ref.current = document.querySelector('#portal')
    document.addEventListener('keydown', escFunction)
    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [escFunction])

  const modal = (
    <FocusTrap>
      <div className='flex flex-wrap justify-center content-center bg-black bg-opacity-50 z-40 absolute inset-0'>
        <div
          className='max-w-md min-w-320 bg-primary p-5 rounded-xl flex flex-col shadow-2xl z-50'
          role='alertdialog'
        >
          <div id='modal-header' className='grid grid-cols-3 pb-5'>
            <h2 className='text-3xl col-start-2 font-serif uppercase justify-self-center text-white'>
              {header}
            </h2>
            <button
              className='justify-self-end font-serif text-red text-xl shadow-2xl transform hover:scale-125 transition ease-in-out duration-500'
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div id='modal-body' className='font-sans bg-white rounded-3xl p-4'>
            {children}
          </div>
        </div>
      </div>
    </FocusTrap>
  )

  return isOpen ? ReactDOM.createPortal(modal, ref.current) : null
}

export default ModalContainer
