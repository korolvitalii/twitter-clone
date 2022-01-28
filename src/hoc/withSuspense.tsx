import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Centered } from '../styles';

function WithSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <React.Suspense
        fallback={
          <Centered>
            <CircularProgress />
          </Centered>
        }>
        <WrappedComponent {...props} />
      </React.Suspense>
    );
  };
}

export default WithSuspense;
