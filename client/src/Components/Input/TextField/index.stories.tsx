import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Formik } from 'formik'

import Input, { InputProps } from '.'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = args =>
  <Formik
    initialValues={{ name: args.name }}
    initialErrors={{ name: 'Username Required' }}
    onSubmit={() => { }}
  >
    {props =>
      <div className='bg-white p-3 w-96 rounded-xl'>
        < Input {...props} {...args} />
      </div>
    }

  </Formik >

export const TextField = Template.bind({})
TextField.args = {
  label: 'Username',
  name: 'input',
  type: 'text',
  description: 'Enter your username',
  disabled: false,
  required: false,
}
