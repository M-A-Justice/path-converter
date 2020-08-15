import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export const ModalBody = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 1;
  position: fixed;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  justify-content: center;
  overflow-y: auto;
`;

export const ModalMain = styled.div`
  background-color: white;
  z-index: 2;
  position: relative;
  height: fit-content;
  max-width: 565px;
  width: 100%;
  top: 35%;
  box-shadow: 0px 2px 8px 3px #e3e3e3;
  padding: 0px 0px 30px 0px;
  word-break: break-all;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalClose = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0px;
  justify-content: flex-end;
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 34px;
`;

export const ModalPath = styled.div`
`;

export const ModalText = styled.div`
  margin-top: 20px;
`;

export const Exit = styled(CloseOutline)`
  height: 36px;
`;
