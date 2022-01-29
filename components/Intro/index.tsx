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

  return (
    <div
      className={`inset-0 absolute bg-grey-dark bg-opacity-50 z-50 ${
        show ? 'block' : 'hidden'
      }`}
      onClick={onClick}
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
          <div className='w-36 sm:w-44 md:w-60 lg:w-72 absolute left-[6rem] sm:left-[12rem] md:left-[16rem] lg:left-60 bottom-[8rem] sm:bottom-44 md:bottom-[15rem] lg:bottom-64 text-center text-[45%] sm:text-[70%] md:text-base -rotate-3'>
            Hi, I’m Super Fruity! Welcome to the Superhero Foods Adventure! I’m
            the leader of the Superhero Foods. I live in Healthy Town, which is
            the capital of Tucker Island. I live there with my friends. I’m
            excited for you to meet them!
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intro

// w-4/12
// style={font-size:8vw;}
