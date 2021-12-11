import bgImg from '/components/Background Assets/Background Assets/BG Blue.jpg'
import Image from 'next/image'
import characterImg from 'components/App 1500 x1500 images/Apple Atomic.png'
function CharacterSelection() {
    const bob = 3
    return (
        // <div className="fixed overflow-hidden -z-1">
        <>
            {/* <div className="bg-[url('../components/Background Assets/Background Assets/BG Blue.jpg')]"> */}
            <Image
                className='relative -z-10'
                src={bgImg}
                alt='background image'
                layout='fill'
                objectFit='cover'
            />
            <div className='w-2/4 h-2/4'>
                <Image src={characterImg} alt='character image' />
            </div>
            <h1 className='fixed text-red z-20'>ssss</h1>
            {/* </div> */}
        </>
        // </div>
    )
}

export default CharacterSelection
