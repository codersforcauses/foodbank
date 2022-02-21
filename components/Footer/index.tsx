import Link from 'next/link'

interface prop {
  location?: string
  stateChange: () => void
}
const Footer = ({ location, stateChange }: prop) => {
  return (
    <header className='fixed bottom-0 w-screen px-5 flex bg-primary h-16 content-center justify-between items-center'>
      <Link href={`/town/${location}`} passHref>
        <button className='bg-orange text-white font-serif text-2xl px-3 rounded hover:bg-white hover:text-orange transition ease-linear duration-200'>
          Other Characters
        </button>
      </Link>
      <button
        className='right-0 bg-blue text-black font-serif text-2xl px-3 rounded hover:bg-white hover:text-blue transition ease-linear duration-200'
        onClick={stateChange}
      >
        TRANSFORM
      </button>
    </header>
  )
}
export default Footer
