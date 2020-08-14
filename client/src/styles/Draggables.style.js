import styled from 'styled-components';
import { Trash } from '@styled-icons/bootstrap/Trash';

export const Swappable = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  height: 10%;
  width: 40%;
  margin: 1%;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  white-space: nowrap;
  box-shadow: 3px 3px 6px -6px midnightblue;
`;

export const TrashContainer = styled.button`
  display: flex;
  width: 10%;
  height: 100%;
  border: none;
  border-left: 2px solid black;
  background-color: azure;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 3px 0px midnightblue;
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  word-break: break-word;
  padding: 3%;
  background-color: ghostwhite;
  box-shadow: inset 0px 0px 7px -2px midnightblue;
`;

export const TrashCan = styled(Trash)`
  height: 50%;
`;
