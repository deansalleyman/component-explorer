/** @jsx jsx */
import React, { useState, useEffect  } from 'react';

import { jsx, css, Global  } from '@emotion/core';


function Header(props) {


    return (
        <div 
          css={{height:'100px', width:'100px'}}>
             <img  css={{height:'100px', width:'100px'}} src={props.image} alt=""/>
        </div>
      );
    }
    
    export default Header