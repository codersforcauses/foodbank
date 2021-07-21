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
      <label>
        Username
        <br />
        <input
          type='username'
          id='username'
          name='username'
          placeholder='Enter username'
          value={username}
          onChange={e => handleChange(e, 'username')}
        />
      </label>
      <br />
      <label>
        Password
        <br />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter password'
          value={password}
          onChange={e => handleChange(e, 'password')}
        />
      </label>
      <br />
      <input type='submit' />
    </form>
  )
}

export default TestForm
