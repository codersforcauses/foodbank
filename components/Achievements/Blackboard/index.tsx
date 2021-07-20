import Image from 'next/image'
import blackboard from 'public/images/blackboard.png'

/**
 * Renders a Blackboard for achievements to be shown on.
 */
const Blackboard = (): JSX.Element => {
  return (
    <>
      <div className='absolute'>
        <Image src={blackboard} alt='Blackboard' />
      </div>
      <h1 className='relative top-16 underline text-5xl font-serif text-white text-center'>
        Achievements
      </h1>
    </>
  )
}

export default Blackboard
