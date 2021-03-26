/* eslint-disable react/prop-types */
import React from 'react';
import {
  CopyModalMain,
  CopyModalClose,
  Exit,
  CopyModalInfo,
  CopyModalBody,
  CopyModalPath,
  CopyModalText,
  ButtonContainer,
} from '../styles/CopyModal.style';

const CopyModal = (props) => {
  const { path, open, setOpen } = props;

  const handleClick = (event) => {
    const { className } = event.target;
    if (typeof className === 'string' && className.includes('exit')) {
      const close = !open;
      setOpen(close);
    }
  };

  const buttonClick = () => {
    const close = !open;
    setOpen(close);
  };

  return (
    <CopyModalBody className="exit" onClick={handleClick}>
      <CopyModalMain>
        <ButtonContainer>
          <CopyModalClose className="exit" onClick={buttonClick}>
            <Exit />
          </CopyModalClose>
        </ButtonContainer>
        <CopyModalInfo>
          <CopyModalPath>
            {path}
          </CopyModalPath>
          <CopyModalText>
            Successfully copied to clipboard!
          </CopyModalText>
        </CopyModalInfo>
      </CopyModalMain>
    </CopyModalBody>
  );
};

export default CopyModal;
