import React from 'react';
import { Provider } from 'react-redux';
import SignInForm from './index';
import configureStore from 'redux-mock-store';
import { fireEvent, render, waitFor } from '@testing-library/react';

describe('SighInForm component', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  it('The form should contain all the necessary input fields and buttons', () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    const signUpButton = component.getByPlaceholderText('e-mail');

    expect(signUpButton).toBeInTheDocument();
  });
});
