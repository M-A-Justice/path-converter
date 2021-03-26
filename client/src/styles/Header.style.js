import styled from 'styled-components';

export const NavBar = styled.div`
  background-color: #33415C;
  border-bottom: 4px solid #001233;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 2.5vmax;
  margin-left: 1%;
`;

export const TitleUpper = styled.div`
  color: #979DAC;
`;

export const TitleLower = styled.div`
  color: #979DAC;
`;

export const InstructContainer = styled.div`
  display: flex;
  width: 5%;
  height: 100%;
  justify-content: flex-end;
  padding: 0.5%;
`;

export const InstructionHover = styled.div`
  background-color: #0466C8;
  width: 50%;
  height: 30%;
  border-radius: 50%;
  text-align: center;
  border: 4px solid #ADB5FF;
  font-size: 1.6vmax;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }
`;

export const Empty = styled.div`
  position: fixed;
`;
