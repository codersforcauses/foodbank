import {useState, useCallback, useEffect, ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import dynamic from 'next/dynamic'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

const links: Array<NavLinkProps> = [

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

  const [signIn, setSignIn] = useState(false)
  const toggleSignIn = useCallback(() => {
    setSignIn(prev => !prev)
  }, [])

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

  const onSubmit: SubmitHandler<TestValues> = data =>
    alert('Username : \t' + username + '\nPassword  : \t' + password)

  return (
    <div className='text-center'>
      <p>Username : {username}</p>
      <p>Password : {password}</p>
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

      <button
          className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'
          onClick={toggleSignIn}
        >
          {/* need to add proper state when auth was added */}
          {signIn ? 'Sign-out' : 'Sign-in'}
        </button>

    </div>
  )
}

export default TestForm
