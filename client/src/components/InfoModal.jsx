import React from 'react';
import {
  InfoModalMain,
  InfoModalBody,
  InfoTitle,
  InfoBody,
  InfoItem,
} from '../styles/InfoModal.style';

const InfoModal = () => (
  <InfoModalBody>
    <InfoModalMain>
      <InfoTitle>
        Instructions
      </InfoTitle>
      <InfoBody>
        <InfoItem>
          Input the filepath you want to convert into the text field.
        </InfoItem>
        <InfoItem>
          When filepath is submitted it will be detected, converted, and copied to clipboard.
        </InfoItem>
        <InfoItem>
          You can drag your filepaths around to rearrange them as you like!
        </InfoItem>
        <InfoItem>
          Click on one of your filepaths to copy it to the clipboard.
        </InfoItem>
        <InfoItem>
          If you&#39;re done with a filepath just click on the trashcan to get rid of it!
        </InfoItem>
      </InfoBody>
    </InfoModalMain>
  </InfoModalBody>
);

export default InfoModal;
