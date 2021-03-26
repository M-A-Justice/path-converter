import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export const CopyModalBody = styled.div`
  display: flex;
  background-color: rgba(0, 18, 51, 0.40);
  z-index: 1;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  backdrop-filter: blur(4px);
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CopyModalMain = styled.div`
  background-color: #979DAC;
  z-index: 2;
  position: relative;
  height: fit-content;
  max-width: 565px;
  width: 100%;
  box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.25);
  padding: 0px 0px 30px 0px;
  word-break: break-all;
  border: 3px solid #001845;
  margin: 1%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CopyModalClose = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0px;
  justify-content: flex-end;
`;

export const CopyModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 34px;
  color: #33415C;
`;

export const CopyModalPath = styled.div`
`;

export const CopyModalText = styled.div`
  margin-top: 20px;
`;

export const Exit = styled(CloseOutline)`
  height: 36px;
  color: #33415C;
`;
