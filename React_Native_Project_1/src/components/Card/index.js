import React from 'react';
import {
  Logo,
  ImageDiv,
  Card,
  SeeMoreDiv,
  AbsoluteBackground,
} from './style/Card.js';
import Span from '../Span';
import P from '../P';

import {Card_Background} from '../../../assets/img/galerie_page/galerie_background';
import Eye from '../../../assets/img/galerie_page/eye.png';
const CardComp = ({navigation}) => {
  const nameFor3D = 'Cube';
  const ChangePage = () => {
    navigation.navigate('3D', {
      nameFor3D: nameFor3D,
    });
  };
  return (
    <Card>
      <AbsoluteBackground>
        <Card_Background />
      </AbsoluteBackground>
      <ImageDiv></ImageDiv>
      <Span font_size={18}>3D Cube</Span>
      <P font_size={16}>Cube fait en 3D</P>
      <SeeMoreDiv onPress={() => ChangePage()}>
        <Logo source={Eye} size={24} />
      </SeeMoreDiv>
    </Card>
  );
};

export default CardComp;
