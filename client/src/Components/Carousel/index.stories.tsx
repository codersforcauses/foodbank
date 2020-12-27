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
    }
  ]
}
