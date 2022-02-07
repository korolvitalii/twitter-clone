import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Profile from './index';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Route, Routes, MemoryRouter } from 'react-router-dom';

export default {
  title: 'Profile',
  component: Profile,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <>
          <MemoryRouter>
            <>
              <Story />
            </>
          </MemoryRouter>
        </>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Income = Template.bind({});
Income.args = {};
