/* eslint-disable react/prop-types */
import React from 'react';
import {
  ModalMain,
  ModalClose,
  Exit,
  ModalInfo,
  ModalBody,
  ModalPath,
  ModalText,
  ButtonContainer,
} from '../styles/Modal.style';

const Modal = (props) => {
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
    <ModalBody className="exit" onClick={handleClick}>
      <ModalMain>
        <ButtonContainer>
          <ModalClose className="exit" onClick={buttonClick}>
            <Exit />
          </ModalClose>
        </ButtonContainer>
        <ModalInfo>
          <ModalPath>
            {path}
          </ModalPath>
          <ModalText>
            Successfully copied to clipboard!
          </ModalText>
        </ModalInfo>
      </ModalMain>
    </ModalBody>
  );
};

export default Modal;
