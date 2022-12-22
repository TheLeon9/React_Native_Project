import React from 'react';
import {PText} from './style/P';

const P = props => {
  return <PText size={props.font_size}>{props.children}</PText>;
};
export default P;
