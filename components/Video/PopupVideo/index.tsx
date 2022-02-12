import React, { Fragment, SetStateAction } from 'react'
import ReactPlayer from 'react-player'
import { PropsWithChildren } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface PopupVideoProps {
  url: string
  visible: boolean
  setVisibility: (value: SetStateAction<boolean>) => void
}

const PopupVideo = ({
  url,
  visible,
  setVisibility
}: PropsWithChildren<PopupVideoProps>) => {
  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog
        onClose={() => setVisibility(false)}
        className='fixed z-10 inset-0 overflow-y-auto'
      >
        <div className='flex items-center justify-center min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative bg-primary rounded max-w-3xl mx-auto p-5'>
              <ReactPlayer url={url} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default PopupVideo
