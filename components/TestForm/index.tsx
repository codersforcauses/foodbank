import { useEffect, ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface TestValues {
  username: string
  password: string
}

const TestForm = () => {
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const { username, password } = watch()

  useEffect(() => {
    register('username')
    register('password')
  }, [register])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    values: 'username' | 'password'
  ) => {
    setValue(values, e.target.value)
    console.log(username)
  }

  const onSubmit: SubmitHandler<TestValues> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Username</label>
      <br />
      <input
        onChange={e => handleChange(e, 'username')}
        value={username}
        name='username'
        id='username'
        placeholder='Enter username'
      />
      <br />
      <label htmlFor='password'>Password</label>
      <br />
      <input
        onChange={e => handleChange(e, 'password')}
        value={password}
        name='password'
        id='password'
        placeholder='Enter password'
      />
      <br />
      <input type='submit' />
    </form>
  )
}

export default TestForm
