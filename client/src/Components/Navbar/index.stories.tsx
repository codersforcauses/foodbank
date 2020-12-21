import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Navbar} from '.';

export default {
    title: 'Components/NavBar',
    component: Navbar,
    argTypes: {
        backgroundColor: { 
          control: {
            type: "radio",
            options: ["primary", "light-grey", "dark-grey"]
          } 
        },
        textColor:{
          control: {
            type: "radio",
            options: ["primary", "light-grey", "dark-grey", "white"]
          }
        }
  }
} as Meta

// export const Example = (args) => (
//   <Navbar {...args} />
// );