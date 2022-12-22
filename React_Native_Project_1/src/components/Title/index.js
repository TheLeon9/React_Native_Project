import React from 'react';
import {H1} from './style/Title';
import {View} from 'react-native';

const Title = props => {
  return (
    <View>
      <H1
        margin_top={props.margin_top}
        size={props.font_size}
        padding_bot={props.padding_bot}>
        {props.title}
      </H1>
    </View>
  );
};
export default Title;
