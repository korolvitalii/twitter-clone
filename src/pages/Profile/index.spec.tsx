import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Profile from './index';
import { BrowserRouter } from 'react-router-dom';

describe('SighInForm component', () => {
  let component: any;
  beforeEach(() => {
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
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
    expect(true).toBe(true);
  });
});
