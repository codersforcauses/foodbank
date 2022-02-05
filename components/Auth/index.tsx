import { Button, Form, TextField, Modal } from '@components/Custom'

interface AuthProps {
  open: boolean
  onClose: () => void
}

interface FormValues {
  username: string
  DOB: string
}

const defaultValues: FormValues = {
  username: '',
  DOB: ''
}

const Auth = (props: AuthProps) => {
  return (
    <Modal {...props} size='sm' heading='Sign-in'>
      <Form<FormValues>
        defaultValues={defaultValues}
        onSubmit={values => console.log(values)}
      >
        <TextField setFocused label='Name' name='username' />
        <TextField label='Birth Year' name='DOB' />
        <div className='flex justify-center pt-4'>
          <Button className='flex items-center'>
            Login
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 25 25'
              className='h-6 ml-8'
            >
              <path
                fill='#FFF'
                fillRule='evenodd'
                d='M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
              />
            </svg>
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default Auth
export type LoginFormValues = keyof FormValues
