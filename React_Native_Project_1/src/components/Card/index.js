import React from 'react';
import {
  Logo,
  ImageDiv,
  Card,
  SeeMoreDiv,
  AbsoluteBackground,
  ImgCard,
} from './style/Card.js';
import Span from '../Span';
import P from '../P';

import {Card_Background} from '../../../assets/img/galerie_page/galerie_background';

import Eye from '../../../assets/img/galerie_page/eye.png';

const CardComp = ({navigation, TitleCard, CardDesc, video, img}) => {
  const ChangePage = () => {
    navigation.navigate('3D', {
      nameFor3D: TitleCard,
      vidFor3D: video,
      description: CardDesc,
    });
  };
  return (
    <Card>
      <AbsoluteBackground>
        <Card_Background />
      </AbsoluteBackground>
      <ImageDiv>
        <ImgCard source={img} />
      </ImageDiv>
      <Span font_size={18}>{TitleCard}</Span>
      <P font_size={16}>{CardDesc}</P>
      <SeeMoreDiv onPress={() => ChangePage()}>
        <Logo source={Eye} size={24} />
      </SeeMoreDiv>
    </Card>
  );
};

export default CardComp;
