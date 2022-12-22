import React from 'react';
import {SpanText} from './style/Span';

const Span = props => {
  return <SpanText size={props.font_size}>{props.children}</SpanText>;
};
export default Span;
