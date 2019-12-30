import React from 'react';
import { action } from '@storybook/addon-actions';
import Example from '../components/example';
import { withKnobs, text, boolean, number , color} from "@storybook/addon-knobs";
import { withPropsOf } from '@utilitywarehouse/storybook-addon-prop-types';


export default {
  title: 'Example',
  decorators: [withKnobs]
};

export const standard = () => (
    <Example onClick={action('clicked')} styles={{
        backgroundColor: "#33ACFF",
          padding:"10px"
        }}></Example>
  );

  export const startTen = () => (
    <Example start={10} styles={{
        backgroundColor: "#33ACFF",
          padding:"10px"
        }}></Example>
  );

  export const extraText = () => {
    const buttonLabel = 'Button text';
    const buttonDefaultValue = 'Click me with extra long copy';
    const buttonGroupId = 'GROUP-ID1';

    const buttonValue = text(buttonLabel, buttonDefaultValue, buttonGroupId);

    return <Example buttonText={buttonValue} styles={{
        backgroundColor: "#33ACFF",
          padding:"10px"
        }}></Example>
  };


  export const changeStyling = () => {
    const label = 'Color';
    const defaultValue = '#33ACFF';
    const groupId = 'GROUP-ID1';
    
    const backgroundColor = color(label, defaultValue, groupId);
   // const backgroundColor = text("Background Color", "#33ACFF");
    const padding = number("Padding", 10);

    return  <Example onClick={action('clicked')} styles={{
        backgroundColor: backgroundColor,
          padding:`${padding}px`
        }}></Example>
  };

