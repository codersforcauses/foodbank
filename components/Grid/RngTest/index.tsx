import seedrandom from 'seedrandom'
// import shuffle from "shuffle-array";

interface rngProps {
  seed: string
}

const Rng = ({ seed }: rngProps) => {
  seedrandom(seed, { global: true })
  return (
    <div>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {Math.random()}
      </h1>
    </div>
  )
}

export default Rng
