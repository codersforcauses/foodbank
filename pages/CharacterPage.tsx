import bgImg from '/components/Background Assets/BG Blue.jpg'
import Image from 'next/image'
import characterImg from 'components/Background Assets/Apple Atomic.png'
function CharacterSelection() {
    const bob = 3
    return (
        // <div className="fixed overflow-hidden -z-1">
        <>
            {/* <div className="bg-[url('../components/Background Assets/Background Assets/BG Blue.jpg')]"> */}

            <div className='flex flex-row justify-center items-center h-screen'>
                <Image
                    className='relative -z-10 opacity-70'
                    src={bgImg}
                    alt='background image'
                    layout='fill'
                    objectFit='cover'
                />
                <div className='w-1/4 h-1/4'>
                    <Image src={characterImg} alt='character image' />
                </div>
                <div className='w-1/4 h-3/4  ml-20 flex flex-row justify-center items-center bg-white z-20 rounded-lg'>
                    <h1 className=' text-6xl'>Stuff that will be here</h1>
                </div>
            </div>
            {/* </div> */}
        </>
        // </div>
    )
}

export default CharacterSelection
