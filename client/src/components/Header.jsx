/* eslint-disable react/prop-types */
import React from 'react';
import {
  NavBar,
  TitleContainer,
  InstructContainer,
  TitleUpper,
  TitleLower,
  InstructionHover,
} from '../styles/Header.style';
import InfoModal from './InfoModal';

const Header = (props) => {
  const handleHover = () => {
    const { openInfo, setOpenInfo } = props;
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
      <InstructContainer onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <InstructionHover>
          ?
        </InstructionHover>
      </InstructContainer>
      <InfoModal />
    </NavBar>
  );
};

export default Header;
