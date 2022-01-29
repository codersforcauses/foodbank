import Image from 'next/image'
import banana from '../../public/images/bananaGuy.webp'
import { useState } from 'react'
import { useEffect } from 'react'

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
          <div className='w-40 lg:w-72 absolute left-24 md:left-60 bottom-32 md:bottom-64 text-center text-[0.5rem] md:text-base -rotate-3'>
            Hi, I’m Super Fruity! Welcome to the Superhero Foods Adventure! I’m
            the leader of the Superhero Foods. I live in Healthy Town, which is
            the capital of Tucker Island. I live there with my friends. I’m
            excited for you to meet them!
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
export default Intro

// w-4/12
// style={font-size:8vw;}
