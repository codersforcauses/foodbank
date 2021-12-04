import { useState, useCallback, useEffect, ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Dropdown from './Dropdown'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { selectSet } from '@components/Custom'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

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
  const grid = selectSet('hello')

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
    <>
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
          className='px-4 py-1 font-serif text-xl hover:opacity-75'
          onClick={toggleSignIn}
        >
          {/* need to add proper state when auth was added */}
          {signIn ? 'Sign-out' : 'Sign-in'}
        </button>
      </div>

      <Auth open={signIn} onClose={toggleSignIn} />

      <div className='flex w-full h-full p-8 place-items-center'>
        <input
          type='checkbox'
          name='themeToggler'
          id='themeToggler'
          className='peer'
        />
        <label
          htmlFor='themeToggler'
          className='w-10 h-10 text-blue peer-checked:text-red'
        >
          hello
        </label>
      </div>

      <div className='flex w-full h-full p-8 place-items-center'>
        <input
          type='checkbox'
          name='themeToggler='
          id='themeToggler1'
          className='peer'
        />
        <label
          htmlFor='themeToggler1'
          className='w-10 h-10 opacity-30 peer-checked:opacity-100'
        >
          <Image
            // className={
            //   'object-contain ' + (char.isSelected ? '' : 'opacity-30')
            // }
            // className='w-10 h-10 opacity-30 peer-checked:opacity-100'
            height={250}
            width={250}
            layout='responsive'
            src='/images/Characters/Dairy/BlueBoy.jpg'
            alt='BlueBoy'
          />
        </label>
        <p className='hidden text-center peer-checked:block'>Blue Boy</p>
      </div>

      <div className='grid w-full grid-cols-3 gap-4'>
        {grid.map(char => (
          //   <FieldLabel key={char.id}>
          <div key={char.id}>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              id={char.id}
              name='food'
              value={char.password}
              // checked={char.isSelected}
              // className='hidden'
              // className='opacity-0'
              className='peer'
              // {...register?.(props.name, {
              //   ...rules
              // onChange: e => toggleSelect(e, char)
              // })}
              // onChange={e => toggleSelect(e, char)}
            />
            <label
              htmlFor={char.id}
              // className='flex flex-col justify-content-center'
              className='opacity-30 peer-checked:opacity-100'
            >
              <Image
                // key={char.id}
                // className={
                //   'object-contain ' + (char.isSelected ? '' : 'opacity-30')
                // }
                height={250}
                width={250}
                layout='responsive'
                src={char.image}
                alt={char.name}
                //   placeholder='blur'
              />
              {/* <p className='text-center'>{char.name}</p> */}
              {/* <p className='text-center'>{char.isSelected.toString()}</p> */}
              {/* <p className='text-center'>{test}</p> */}
            </label>
            <p className='hidden text-center peer-checked:block'>{char.name}</p>
          </div>
        ))}
      </div>

      <Dropdown />
    </>
  )
}

export default TestForm
