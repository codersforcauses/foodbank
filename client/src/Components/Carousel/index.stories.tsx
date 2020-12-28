import React from 'react'
import { Story, Meta } from '@storybook/react'
import Carousel, { CarouselProps } from '.'

export default {
  title: 'Components/Carousel',
  Component: Carousel
} as Meta

const Template: Story<CarouselProps> = args => <Carousel {...args} />

export const CarouselComponent = Template.bind({})

CarouselComponent.args = {
  images: [
    {
      src:
        'https://images.unsplash.com/photo-1608831260331-5ec49ca5d3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'a photo of a theatre'
    },
    {
      src:
        'https://images.unsplash.com/photo-1608837354983-686b62cca140?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      alt: 'a photo of a river meeting a lake'
    },
    {
      src:
        'https://images.unsplash.com/photo-1609009835496-7121e5ade7d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      alt: 'some water'
    }
  ],
  height: 600,
  width: 800,
  transition: 'fade',
  duration: 1000
}
