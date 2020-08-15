import styled from 'styled-components';
import Modal from '../components/Modal';

export const Container = styled.div`
  height: 100%;
  width: auto;
  border: 2px solid black;
  padding: 30px;
`;

export const NavBar = styled.div`
  display: flex;
  height: 100px;
  margin: 5px;
  border: 2px solid black;
  justify-content: space-between;
`;

export const Title = styled.div`
  height: 100px;
  width: 100px;
  background-color: blue;
`;

export const NavCenter = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  background-color: blue;
  align-items: flex-end;
`;

export const Emblem = styled.div`
  height: 100px;
  width: 100px;
  background-color: blue;
`;

export const Display = styled.p`
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
`;

export const Instructions = styled.p`
`;

export const ClosedModal = styled(Modal)`
  display: none;
`;
