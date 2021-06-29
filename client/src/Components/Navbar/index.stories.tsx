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

const exampleComponent: React.FC = () => <div>Example</div>

export const Example = Template.bind({})
Example.args = {
  links: [
    { name: 'about', path: '#', component: exampleComponent },
    { name: 'Jokes', path: '#', component: exampleComponent },
    { name: 'Haha', path: '#', component: exampleComponent }
  ]
}
