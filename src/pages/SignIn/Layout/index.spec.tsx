import { Provider } from 'react-redux';
import SignInForm from './index';
import configureStore from 'redux-mock-store';
import { fireEvent, render, waitFor } from '@testing-library/react';

describe('SighInForm component', () => {
  let component: any;
  beforeEach(() => {
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);

    component = render(
      <Provider store={store}>
        <SignInForm />
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

  it('The form should contain all the necessary input fields and buttons', () => {
    const signUpButton = component.getByText('Sign up');
    const signInButton = component.getByText('Sign in');

    expect(signUpButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it('When click Sign In button should show sign in modal', async () => {
    const signInButton = component.getByText('Sign in');
    fireEvent.click(signInButton);
    await waitFor(() => {
      expect(component.getByLabelText('Email')).toBeInTheDocument();
      expect(component.getByLabelText('Password')).toBeInTheDocument();
      expect(component.getByText('Submit')).toBeInTheDocument();
    });
  });

  it('Sign in form should validate inputs', async () => {
    const signInButton = component.getByText('Sign in');
    fireEvent.click(signInButton);
    await waitFor(async () => {
      const signInForm = component.getByTestId('signInModal');
      fireEvent.submit(signInForm);
      await waitFor(() => {
        expect(component.getByText('email is a required field')).toBeInTheDocument();
        expect(component.getByText('password is a required field')).toBeInTheDocument();
      });

      expect(component.getByLabelText('Email')).toBeInTheDocument();
    });
  });

  it('Sign up form should contain all the necessary input fields and buttons', async () => {
    const signInButton = component.getByText('Sign up');
    fireEvent.click(signInButton);
    await waitFor(async () => {
      expect(component.getByLabelText('Email')).toBeInTheDocument();
      expect(component.getByLabelText('Fullname')).toBeInTheDocument();
      expect(component.getByLabelText('Username')).toBeInTheDocument();
      expect(component.getByLabelText('Password')).toBeInTheDocument();
      expect(component.getByLabelText('Confirm password')).toBeInTheDocument();
    });
  });

  it('Sign in form should validate inputs', async () => {
    const signInButton = component.getByText('Sign up');
    fireEvent.click(signInButton);
    await waitFor(async () => {
      const signUpForm = component.getByTestId('signUpModal');
      fireEvent.submit(signUpForm);
      await waitFor(() => {
        expect(component.getByLabelText('Email')).toBeInTheDocument();
        expect(component.getByLabelText('Fullname')).toBeInTheDocument();
        expect(component.getByLabelText('Username')).toBeInTheDocument();
        expect(component.getByLabelText('Password')).toBeInTheDocument();
      });
    });
  });
});
