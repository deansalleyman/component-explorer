import React from 'react';
import { action } from '@storybook/addon-actions';
import Example from '../components/example';
import Header from '../components/header';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number , color, files, object} from "@storybook/addon-knobs";
import logoHeader from '../assets/images/Logo-Default.png';
import { jsx, css, Global  } from '@emotion/core';



export default {
  title: 'Home Page',
  decorators: [withKnobs]
};

export const standard = () => {

    const label = 'Color';
    const defaultValue = '#33ACFF';
    const groupId = 'PANASKY';
    
    const backgroundColor = color(label, defaultValue, groupId);
    const padding = number("Padding", 10);

    const buttonValue = text('Button text', 'Accounts', groupId);


    const titleValue = text('Home Page', 'Home Page', groupId);

    const headerLogo = files('Logo Image', '.xlsx, .pdf, .png, .jpg', logoHeader, groupId);

    const backgroundStyling = object('Background styling', 
    {backgroundColor: "#CCCCCC",
      padding:"10px"
    }, groupId);

    return (
        <div className="App" style={backgroundStyling}>
          <header className="App-header">
          <Header image={headerLogo}></Header>
           {titleValue}
          </header>
          <div id="main">
          <Example buttonText={buttonValue} onClick={action('clicked')} styles={{
        backgroundColor: backgroundColor,
          padding:`${padding}px`
        }}></Example>
            </div>     
        </div>
      );

    }