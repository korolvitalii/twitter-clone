import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SignUpModal from './index';

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
      title: 'Sign up',
    };
    component = render(
      <Provider store={store}>
        <SignUpModal {...props} />
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
    const fullnameInput = component.getByLabelText('Fullname') as HTMLInputElement;
    const usernameInput = component.getByLabelText('Username') as HTMLInputElement;
    const title = component.getByText('Sign up') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(fullnameInput, { target: { value: 'testfullname' } });
    fireEvent.change(usernameInput, { target: { value: 'testusername' } });

    await waitFor(() => {
      expect(emailInput.value).toBe('test@test.com');
      expect(passwordInput.value).toBe('test123');
      expect(fullnameInput.value).toBe('testfullname');
      expect(usernameInput.value).toBe('testusername');
      expect(title).toBeInTheDocument();
    });
  });
});
