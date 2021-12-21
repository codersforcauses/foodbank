import bgImg from '/components/Background Assets/BG Blue.jpg'
import Image from 'next/image'
import characterImg from 'components/Background Assets/Bean Machine.png'
import Footer from 'components/Footer'
function CharacterSelection() {
  return (
    // <div className="fixed overflow-hidden -z-1">
    <>
      {/* <div className="bg-[url('../components/Background Assets/Background Assets/BG Blue.jpg')]"> */}

      <div className=' flex items-center justify-center main'>
        <div className='w-1/3 h-auto z-20'>
          <Image src={characterImg} alt='character image' />
        </div>
        <div className='relative w-128 h-max ml-20 flex flex-col justify-center items-center bg-grey-light z-20 rounded-3xl font-serif'>
          <div className='absolute inline-flex flex-col -top-16 gap-4'>
            <div className='border-t-4 border-l-4 border-r-12 border-b-4 border-black top-0 relative h-16 w-72 text-3xl bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-16'>
              Everyday Food
            </div>
            <div className=' border-t-4 border-l-4 border-r-12 border-b-4 border-black -top-4 relative h-16 w-72 text-3xl bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
              Character Name{' '}
            </div>
          </div>
          <div className='p-16 text-right'>
            <h1 className='leading-8 font-bold'>SUPERPOWERS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              maiores, possimus reprehenderit optio sequi nostrum quaerat eaque
              porro ipsa eum iste.
            </p>
            <h1 className='leading-8 font-bold'>USE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              maiores, possimus reprehenderit optio sequi nostrum quaerat eaque
              porro ipsa eum iste. Deserunt provident cupiditate quae quaerat,
              molestiae rerum ipsam officiis sit distinctio consectetur, illum
              architecto exercitationem, itaque quo dolore. Veniam.
            </p>
            <h1 className='leading-8 font-bold'>LIKES...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              maiores, possimus reprehenderit optio sequi nostrum quaerat eaque
              porro ipsa eum iste.
            </p>
          </div>
        </div>
        <Image
          className='relative -z-10 opacity-70'
          src={bgImg}
          alt='background image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <Footer />
    </>
    // </div>
  )
}

export default CharacterSelection
