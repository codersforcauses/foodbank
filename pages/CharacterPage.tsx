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
                <div className='relative w-128 h-max ml-20 flex flex-col justify-center items-center bg-grey-light z-20 rounded-lg font-serif'>
                    <div className='absolute inline-flex flex-col -top-16 gap-4'>
                        <div className='top-0 relative h-16 w-72 text-3xl bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-4 left-16'>Everyday Food</div>
                        <div className='-top-4 relative h-16 w-72 text-3xl bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-4 shadow-[3px_0_0_11px_rgba(0,0,0,1)]
'>Character Name </div>
                    </div>
                    <div className='p-20'>
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
