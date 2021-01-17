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
    onSubmit={(_, actions) => {
      actions.setFieldError(args.name, `${args.label} has error`)
    }}
  >
    {props =>
      <form onSubmit={props.handleSubmit} className='bg-white p-3 w-96 rounded-xl'>
        <Input {...args} />
        <button type="submit" className='mt-2 bg-primary text-white rounded-full px-3 py-1'>submit</button>
      </form>
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
