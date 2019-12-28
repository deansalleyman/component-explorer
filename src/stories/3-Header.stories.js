import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../components/header';
import { withKnobs, text, boolean, number , color, files} from "@storybook/addon-knobs";
import logoHeader from '../assets/images/Logo-Default.png';

export default {
  title: 'Header',
  decorators: [withKnobs]
};

export const standard = () => (
    <Header image={logoHeader}></Header>
  );

  export const ChangeLogo = () => {
    const label = 'Images';
    const accept = '.xlsx, .pdf, .png, .jpg';
    const defaultValue = logoHeader;
    const groupId = 'GROUP-ID1';

    const value = files(label, accept, defaultValue, groupId);

   return <Header image={value}></Header>
};



