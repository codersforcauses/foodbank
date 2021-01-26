import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DropDown, DropDownProps } from '.'
import { Formik } from 'formik'

const meta: Meta = {
  title: 'Components/DropDown',
  component: DropDown
}

const Template: Story<DropDownProps> = args => {
  return (
    <Formik
      initialValues={{ name: args.name }}
      onSubmit={(_, actions) => {
        actions.setFieldError(args.name, `${args.label} has error`)
      }}
    >
      {props => (
        <form
          onSubmit={props.handleSubmit}
          className='bg-white p-3 w-96 rounded-xl'
        >
          <DropDown {...args} />
          <button
            type='submit'
            className='mt-2 bg-primary text-white rounded-full px-3 py-1'
          >
            submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select an option:',
  name: 'selectOption',
  options: ['1', '2', '3'],
  // description: 'Enter your username',
  disabled: false,
  required: false
}

export default meta
