import { Paper, Typography } from '@mui/material';
import AddTweetForm from './AddTweetForm';

export interface ITagElementProps {}

export function TagElement(props: ITagElementProps) {
  return (
    <>
      <Paper variant='outlined'>
        <Typography variant='h6'>Tweets</Typography>
        <AddTweetForm />
      </Paper>
      <h1>Tag Element</h1>
    </>
  );
}
