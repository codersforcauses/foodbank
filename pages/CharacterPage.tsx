import bgImg from '/components/Background Assets/BG Blue.jpg'
import Image from 'next/image'
import characterImg from 'components/Background Assets/Apple Atomic.png'
function CharacterSelection() {
    const bob = 3
    return (
        // <div className="fixed overflow-hidden -z-1">
        <>
            {/* <div className="bg-[url('../components/Background Assets/Background Assets/BG Blue.jpg')]"> */}

            <div className='flex items-center justify-center h-screen '>
                <div className='relative w-1/4 h-1/4 z-20'>
                    <Image src={characterImg} alt='character image' />
                </div>
                <div className='relative w-96 h-max ml-20 flex flex-col justify-center items-center bg-grey-light z-20 rounded-lg font-serif'>
                    <div className='absolute  -top-10'>
                        <div className=' h-10 w-40 bottom-10 bg-primary flex justify-center items-center text-white'>Everyday Food</div>
                        <div className='h-10 w-40 bg-orange flex justify-center items-center text-white'>Character Name </div>
                    </div>
                    <div className='p-12'>
                        <h1 className='text-right'>SUPERPOWERS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores, possimus reprehenderit optio sequi nostrum quaerat eaque porro ipsa eum iste.</p>
                        <h1 className='text-right'>USE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores, possimus reprehenderit optio sequi nostrum quaerat eaque porro ipsa eum iste. Deserunt provident cupiditate quae quaerat, molestiae rerum ipsam officiis sit distinctio consectetur, illum architecto exercitationem, itaque quo dolore. Veniam.</p>
                        <h1 className='text-right'>LIKES...</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores, possimus reprehenderit optio sequi nostrum quaerat eaque porro ipsa eum iste.</p>
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
            {/* </div> */}
        </>
        // </div>
    )
}

export default CharacterSelection
