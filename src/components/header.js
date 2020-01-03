/** @jsx jsx */
import React, { useState, useEffect  } from 'react';
import { action } from '@storybook/addon-actions';
import { jsx, css, Global  } from '@emotion/core';
import PropTypes from 'prop-types';

function Header(props) {


    return (
        <div onClick={action('clicked')}
          css={{height:'100px', width:'100px'}}>
             <img  css={{height:'100px', width:'100px'}} src={props.image} alt=""/>
        </div>
      );
    }

    Header.propTypes = {
        /** Image encoded via webpack in data base 64 format */
        image: PropTypes.any
      }
    
    export default Header