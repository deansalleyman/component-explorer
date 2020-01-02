/** @jsx jsx */
import React, { useState, useEffect  } from 'react';

import { jsx, css, Global  } from '@emotion/core';
import PropTypes from 'prop-types';


function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.start || 0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div 
      css={props.styles || {}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} css={{width: '80px'}}>
        {props.buttonText || 'Click me'}
      </button>
    </div>
  );
}

Example.propTypes = {
  /** Initial start counter */
  count: PropTypes.number,
  /** CSS Style object */
  styles: PropTypes.object,
  /** Button Text */
  buttonText: PropTypes.string
}

export default Example