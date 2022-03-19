import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SignInModal from './index';

describe('SighInForm component', () => {
  let component: any;
  let props: any;
  beforeEach(() => {
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    props = {
      handleClose: jest.fn(),
      isVisible: true,
      title: 'Sign in',
    };
    component = render(
      <Provider store={store}>
        <SignInModal {...props} />
      </Provider>,
    );
  });
  const initialState = {
    tweets: {
      items: [],
      LoadingStatus: 'NEVER',
      addTweetState: 'NEVER',
    },
    tweet: {
      LoadingStatus: 'NEVER',
    },
    topics: {
      items: [],
      LoadingStatus: 'NEVER',
    },
    user: {
      userTweets: [],
      status: 'LOADED',
      registered: false,
    },
    users: {
      status: 'NEVER',
    },
    appication: {
      loadingStatus: false,
    },
  };

  it('Inputs should be display text', async () => {
    const emailInput = component.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = component.getByLabelText('Password') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });

    await waitFor(() => {
      expect(emailInput.value).toBe('test@test.com');
      expect(passwordInput.value).toBe('test123');
    });
  });
  it('After submit inputs', async () => {
    const signInForm = component.getByTestId('signInModal');
    const submitButton = component.getByText('Submit');
    const emailInput = component.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = component.getByLabelText('Password') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.submit(signInForm);
    await waitFor(() => {
      expect(emailInput.value).toBe('test@test.com');
      expect(passwordInput.value).toBe('test123');
    });
  });
});
