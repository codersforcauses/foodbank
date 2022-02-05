import Image from 'next/image'
import banana from '../../public/images/bananaGuy.webp'
import { useState } from 'react'
import { useEffect } from 'react'
// import { Transition } from '@headlessui/react'

const Intro = () => {
  const [show, setShow] = useState(true)

  const onClick = () => {
    setShow(false)
    sessionStorage.setItem('bananaGuy', 'false')
  }

  useEffect(() => {
    if (sessionStorage.getItem('bananaGuy') === 'false') {
      setShow(false)
    }
  }, [])

  if (show) {
    return (
      <div
        className='inset-0 absolute bg-grey-dark bg-opacity-50 z-50'
        onClick={onClick}
        aria-hidden='true'
      >
        <div className='fixed w-8/12 left-0 bottom-0'>
          <Image
            src={banana}
            width={590}
            height={455}
            alt='Banana Guy'
            quality={50}
          />
          {/* <Transition
            show={show}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
          ></Transition> */}
        </div>
      </div>
    )
  } else {
    return null
  }
}
export default Intro
