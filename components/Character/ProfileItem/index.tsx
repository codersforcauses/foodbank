import type { Character } from 'lib/types'
interface Props {
    character: Character
}

const ProfileItem = ({ character }: Props) => {
    return (<>
        <div className='absolute inline-flex flex-col -top-16 gap-4'>
            <div className='border-t-4 border-l-4 border-r-8 border-b-4 border-black top-0 relative h-16 w-72 text-3xl bottom-10 bg-primary flex justify-center items-center text-white uppercase transform rotate-6 z-10 p-2 left-16'>
                Everyday Food
            </div>
            <div className=' border-t-4 border-l-4 border-r-8 border-b-4 border-black -top-4 relative h-16 w-72 text-3xl bg-orange flex justify-center items-center text-white uppercase transform -rotate-6 p-2'>
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
                {character.heroLikes}
            </p>
        </div>
    </>
    )
}

export default ProfileItem