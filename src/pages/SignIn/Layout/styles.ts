import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  height: 100vh;
  .blueSide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #71c9f8;
    flex: 0 0 50%;
    overflow: hidden;
    position: relative;
  }
  .blueSideBigIcon {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 0;
    transform: translate(-50% -50%);
  }
  .blueSideListInfo {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 380px;
    & h6 {
      display: flex;
      align-items: center;
      color: white;
      font-weight: 700;
      font-size: 20px;
    }
  }
  .blueSideListInfoItem {
    margin-bottom: 40px;
  }
  .blueSideListInfoIcon {
    font-size: 32px;
    margin-right: 15px;
  }
  .loginSide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
  }
  .loginSideTwitterIcon {
    font-size: 45px;
  }
  .loginSideWrapper {
    width: 380px;
  }
  .loginSideTitle {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 32px;
  }
  .loginSideIcon {
    margin-right: auto;
  }
  .loginSideField {
    margin-bottom: 18px;
  }
  .twitterIcon {
    position: absolute;
    width: 300%;
    height: 300%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  .buttonSignUp {
    margin-bottom: 20px;
    width: 100%;
  }

  .buttonSignIn {
    width: 100%;
  }
  @media (max-width: 45em) {
    .loginSideWrapper {
      max-width: 250px;
    }
    .loginSideField {
      margin-left: 10px;

      max-width: 150px;
    }
    .loginSideTitle {
      margin-left: 10px;

      max-width: 150px;
    }
    .buttonSignUp {
      margin-bottom: 20px;
      margin-left: 10px;
      width: 120px;
    }
    .buttonSignIn {
      margin-left: 10px;
      width: 120px;
    }
  }
`;
