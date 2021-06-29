import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Navbar, NavbarProps } from '.'

export default {
  title: 'Components/NavBar',
  component: Navbar,
  argTypes: {
    links: {
      control: {
        type: 'array'
      }
    }
  }
} as Meta

const Template: Story<NavbarProps> = args => {
  return (
    <>
      <div className='w-screen'>
        <Navbar {...args} />{' '}
      </div>
    </>
  )
}

const example: React.FC = () => <div>Example</div>

export const Example = Template.bind({})
Example.args = {
  links: [
    { name: 'about', path: '#', component: example },
    { name: 'Jokes', path: '#', component: example },
    { name: 'Haha', path: '#', component: example }
  ]
}
