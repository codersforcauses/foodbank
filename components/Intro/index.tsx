import Image from 'next/image'
import banana from '../../public/images/bananaGuy.webp'
import { useState } from 'react'
import { useEffect } from 'react'

const Intro = () => {
  const [show, setShow] = useState(true)

  const hideBananaGuy = () => {
    setShow(false)
    sessionStorage.setItem('bananaGuy', 'false')
  }

  useEffect(() => {
    if (sessionStorage.getItem('bananaGuy') === 'false') {
      setShow(false)
    }
  }, [])

  return (
    <div
      className={`inset-0 absolute bg-grey-dark bg-opacity-50 z-50 ${
        show ? 'block' : 'hidden'
      }`}
      onClick={hideBananaGuy}
      aria-hidden='true'
    >
      <div className='fixed w-8/12 left-0 bottom-0'>
        <div className='relative'>
          <Image
            src={banana}
            width={590}
            height={455}
            alt='Banana Guy'
            quality={50}
          />
        </div>
      </div>
    </div>
  )
}
export default Intro
