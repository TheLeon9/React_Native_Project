import React from 'react';
// import {H1} from '../../../assets/style';
import {View, Text} from 'react-native';

const Title = props => {
  return (
    <View>
      {/* <H1>{props.title}</H1> */}
      <Text>{props.title}</Text>
    </View>
  );
};
export default Title;
