import { Fragment, PropsWithChildren } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { Breakpoints } from '@lib/types'

interface ModalProps {
  open: boolean
  heading?: string
  size?: Breakpoints
  onClose: () => void
  carousel?: boolean
}

const Modal = ({
  children,
  heading,
  size,
  carousel,
  ...props
}: PropsWithChildren<ModalProps>) => {
  let sizeClass,
    baseClass = carousel
      ? 'fixed z-40 w-full h-full overflow-y-auto origin-center transform -translate-x-1/2 -translate-y-1/2 md:w-3/4 md:h-5/6 inset-1/2 rounded-xl'
      : 'fixed z-40 w-full h-full overflow-y-auto origin-center transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center sm:block sm:w-3/4 sm:h-5/6 inset-1/2 scrollbar-hide rounded-xl'

  if (carousel)
    switch (size) {
      case 'sm':
        sizeClass = 'max-w-md'
        break
      case 'md':
        sizeClass = 'max-w-xl'
        break
      case 'lg':
        sizeClass = 'max-w-xl'
        break
      case 'xl':
        sizeClass = 'max-w-2xl'
        break
      case '2xl':
        sizeClass = 'max-w-3xl'
        break
      case '3xl':
        sizeClass = 'max-w-4xl'
        break
      default:
        sizeClass = 'min-w-full'
    }
  else
    switch (size) {
      case 'sm':
        sizeClass = 'max-w-lg'
        break
      case 'md':
        sizeClass = 'max-w-2lg'
        break
      default:
        sizeClass = 'min-w-full'
    }

  let finalClass = [baseClass, sizeClass].join(' ').trim()

  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog {...props} className='fixed inset-0 z-40 text-primary '>
        <Transition.Child
          as={Fragment}
          enter='transition-all ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-all ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 z-40 bg-black/75' />
        </Transition.Child>
        <Transition.Child
          enter='transition-all ease-out duration-300 delay-100'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition-all ease-in duration-150'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
          className={finalClass}
        >
          <div className='relative z-50 transform bg-white rounded-xl'>
            <div className='sticky inset-x-0 top-0 z-50 flex items-center justify-center px-4 py-2 space-x-4 text-white bg-primary rounded-t-xl'>
              <Dialog.Title className='font-serif text-2xl'>
                {heading}
              </Dialog.Title>
              <button
                className='absolute grid p-1 font-serif top-2 right-4 place-items-center hover:opacity-75 focus:outline-none focus:ring-inset focus:ring-1 focus:ring-accent focus:ring-opacity-50 focus:ring-offset-primary'
                onClick={props.onClose}
              >
                X
              </button>
            </div>
            <Dialog.Description as='div' className='z-40 px-4 pt-2 pb-4'>
              {children}
            </Dialog.Description>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Modal
