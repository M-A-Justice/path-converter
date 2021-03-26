/* eslint-disable react/prop-types */
import React from 'react';
import {
  NavBar,
  TitleContainer,
  InstructContainer,
  TitleUpper,
  TitleLower,
  InstructionHover,
  Empty,
} from '../styles/Header.style';
import InfoModal from './InfoModal';

const Header = (props) => {
  const { openInfo, setOpenInfo } = props;

  const handleHover = () => {
    const toOpenInfo = !openInfo;
    setOpenInfo(toOpenInfo);
  };

  return (
    <NavBar>
      <TitleContainer>
        <TitleUpper>
          /Path/
        </TitleUpper>
        <TitleLower>
          C:\onverter
        </TitleLower>
      </TitleContainer>
      <InstructContainer>
        <InstructionHover onMouseEnter={handleHover} onMouseLeave={handleHover}>
          ?
        </InstructionHover>
      </InstructContainer>
      {openInfo ? <InfoModal /> : <Empty />}
    </NavBar>
  );
};

export default Header;
