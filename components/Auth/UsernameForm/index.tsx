import { Button, TextField } from '@components/Custom'
import Svg from '@components/Custom/Svg'

import validationSchema from '../validation'

interface UsernameFormProps {
  label: string
  error: string
}
const UsernameForm = ({ label, error }: UsernameFormProps) => {
  return (
    <>
      <TextField
        label={label}
        type='text'
        name='username'
        setFocused
        rules={validationSchema.username}
      />
      {error && <p className='text-lg text-center text-red'>{error}</p>}
      <div className='flex flex-col items-center pt-4 space-x-3'>
        <Button className='flex items-center disabled:opacity-50' type='submit'>
          Next
          <Svg
            name='SolidArrowCircleRight'
            className='h-6 ml-8'
            viewBox='0 0 20 20'
            fill='#FFF'
          />
        </Button>
      </div>
    </>
  )
}

export default UsernameForm
