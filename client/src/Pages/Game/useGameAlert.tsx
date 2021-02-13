import Swal from 'sweetalert2'
const wrongMp3 = new Audio('/wrong.mp3')
const gameEndMp3 = new Audio('/game-end.mp3')
const correctMp3 = new Audio('/correct.mp3')

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useGameAlert = () => {
  const error = ({ name, foodGroup }: { name: string; foodGroup: string }) => {
    wrongMp3.play()
    return Swal.fire({
      title: `Incorrect`,
      text: `${name} is not a ${foodGroup}`,
      icon: 'error',
      confirmButtonText: 'Fine'
    })
  }

  const success = ({
    name,
    foodGroup
  }: {
    name: string
    foodGroup: string
  }) => {
    correctMp3.play()
    return Swal.fire({
      title: `Correct!`,
      text: `${name} is a ${foodGroup}`,
      icon: 'success',
      confirmButtonText: 'Yay'
    })
  }

  const finishGame = async () => {
    gameEndMp3.play()

    await Swal.fire({
      title: `You Win!`,
      text: `You have correctly categorised all food well done`,
      icon: 'success',
      confirmButtonText: 'Play again'
    })

    location.reload()
  }

  return { error, success, finishGame }
}

export default useGameAlert
