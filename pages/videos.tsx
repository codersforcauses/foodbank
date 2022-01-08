import PopupVideo from '@components/PopupVideo'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Player = () => {
  const [popupVisible, setPopupVisibility] = useState(false)
  const handlePopupVisibility = () => setPopupVisibility(!popupVisible)
  return (
    <>
      <button onClick={() => setPopupVisibility(true)}>Open video</button>
      <Transition.Root show={popupVisible} as={Fragment}>
        <Dialog onClose={() => setPopupVisibility(false)} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative bg-primary rounded max-w-3xl mx-auto p-5">
                <PopupVideo url='https://www.youtube.com/watch?v=oUVCWNQFGTc' />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Player
