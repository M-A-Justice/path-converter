import styled from 'styled-components';
import { Trash } from '@styled-icons/bootstrap/Trash';

export const Swappable = styled.div`
  display: flex;
  height: 75%;
  width: 75%;
  margin: 1%;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.25);;
  cursor: pointer;
  max-height: 110px;
`;

export const TrashContainer = styled.button`
  display: flex;
  width: 10%;
  height: 100%;
  border: none;
  background-color: #7D8597;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  word-break: break-word;
  padding: 3%;
  background-color: #7D8597;
`;

export const TrashCan = styled(Trash)`
  height: 50%;
  color: #001233;
`;
