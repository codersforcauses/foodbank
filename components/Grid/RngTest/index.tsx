import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'

interface rngProps {
  seed: string
}

const arrayTest: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const shuffleArray = (arr: Array<number>) => {
  const array = [...arr]
  //   const array = arr
  var currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
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
        Array: {arrayTest}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffle(arrayTest, { copy: true })}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffle(arrayTest, { copy: true })}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffle(arrayTest, { copy: true })}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffle(arrayTest, { copy: true })}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffleArray(arrayTest)}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffleArray(arrayTest)}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffleArray(arrayTest)}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        {shuffleArray(arrayTest)}
      </h1>
      <h1 className='flex items-center p-4 m-4 space-x-4 shadow-md'>
        Array: {arrayTest}
      </h1>
    </div>
  )
}

export default Rng
