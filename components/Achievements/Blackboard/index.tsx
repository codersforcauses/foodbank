import Image from 'next/image'
import blackboard from 'public/images/blackboard.png'

/**
 * Renders a Blackboard for achievements to be shown on.
 */
const Blackboard = () => {
  return (
    <>
      <div className='absolute h-screen w-screen'>
        <Image src={blackboard} alt='Blackboard' layout='fill' />
      </div>
      <h1 className='relative top-16 underline text-5xl font-serif text-white text-center'>
        Achievements
      </h1>
    </>
  )
}

export default Blackboard
