import React from 'react';
import CreateTweetForm from '../CreateTweetForm';
import ModalBlock from '../ModalBlock';
import { useDispatch } from 'react-redux';
import { updateTweet } from '../../store/ducks/tweet/actionCreators';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';

interface EditTweetModalInteface {
  tweetText?: string | undefined;
  tweetId?: string | undefined;
  visibleModal: boolean | undefined;
  handleCloseModal: () => void;
}

const EditTweetModal: React.FC<EditTweetModalInteface> = ({
  tweetText,
  tweetId,
  visibleModal,
  handleCloseModal,
}: EditTweetModalInteface): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>(tweetText || '');
  const handleClick = () => {
    dispatch(updateTweet(tweetId, text));
    dispatch(fetchTweets());
    setText('');
  };
  return (
    <>
      <ModalBlock visible={visibleModal} handleClose={handleCloseModal}>
        <CreateTweetForm maxRows={15} text={text} setText={setText} handleClick={handleClick} />
      </ModalBlock>
    </>
  );
};

export default EditTweetModal;
