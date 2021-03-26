import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 55%;
  height: 40%;
  border-radius: 10px;
  text-align: center;
  background: #979DAC;
  border: 5px solid #33415C;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
  ::placeholder {
    color: #33415C;
    font-family: Sarpanch;
    font-size: 1vmax;
  }
`;
