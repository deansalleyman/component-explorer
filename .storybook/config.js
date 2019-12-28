import { withInfo } from '@storybook/addon-info';
import { configure, addDecorator } from '@storybook/react';
addDecorator(withInfo); 

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
