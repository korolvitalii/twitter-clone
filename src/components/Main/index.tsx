import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet } from '../../store/ducks/tweet/actionCreators';
import { selectLoadingStatus } from '../../store/ducks/tweet/selectors';
import { setLoadingStatus } from '../../store/ducks/tweets/actionCreators';
import { LoadingStatus } from '../../store/types';
import { Alert } from '../Alert';
import CreateTweetForm, { ImageObj } from '../CreateTweetForm';
import Tweets from '../Tweets';
import { Wrapper } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Centered } from '../../styles';
import { selectIsLoading } from '../../store/ducks/tweets/selectors';
import { updateImages } from '../../utils/updateImages';

const Main: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const loadingStatus = useSelector(selectLoadingStatus);
  const isLoading = useSelector(selectIsLoading);
  const [images, setImages] = useState<ImageObj[]>([]);

  const handleClick = async (): Promise<void> => {
    dispatch(setLoadingStatus(LoadingStatus.LOADING));

    const imagesUrls = await images.reduce(async (acc: Promise<string[]>, image) => {
      const result = await updateImages(image.file);
      (await acc).push(result.url);
      return acc;
    }, Promise.resolve([]));

    dispatch(fetchAddTweet({ text, images: imagesUrls }));
    setImages([]);
    setText('');
  };

  return (
    <Wrapper>
      <div className='main-title'>
        <Typography variant='h6'>Latest Tweets</Typography>
      </div>
      {/* <Wrapper> */}
      <div className='createTweetFormWrapper'>
        {isLoading ? (
          <Centered>
            <CircularProgress />
          </Centered>
        ) : (
          <CreateTweetForm
            text={text}
            setText={setText}
            handleClick={handleClick}
            images={images}
            onChangeImages={setImages}
          />
        )}
      </div>

      {loadingStatus === LoadingStatus.ERROR && <Alert severity='error'>Some error!</Alert>}
      <Tweets />
      {/* </Wrapper> */}
    </Wrapper>
  );
};

export default Main;
