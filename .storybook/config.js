import { withInfo } from '@storybook/addon-info';
import { configure, addDecorator } from '@storybook/react';
// addDecorator(withInfo); 

const { withPropsTable } = require('storybook-addon-react-docgen');

// addDecorator(withPropsTable(options));
// or
addDecorator(withPropsTable);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
