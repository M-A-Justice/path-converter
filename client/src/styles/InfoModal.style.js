import styled from 'styled-components';

export const InfoModalBody = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 18, 51, 0.40);
  backdrop-filter: blur(3px);
  z-index: 2;
`;

export const InfoModalMain = styled.div`
  background-color: #979DAC;
  border: 3px solid #001845;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.25));
`;

export const InfoTitle = styled.div`
  text-decoration: underline;
  text-align: center;
  font-size: 1.5vmax;
`;

export const InfoBody = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5%;
`;

export const InfoItem = styled.li`
  margin-bottom: 6%;
`;
