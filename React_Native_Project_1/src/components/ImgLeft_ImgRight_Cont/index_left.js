import React, {useRef} from 'react';
import Title from '../../components/Title/';
import {
  ImageBackgroundDiv,
  ImgLeftLayer,
  ContainerImgLeft,
} from './style/ImgLeft_ImgRight_Cont';
import {Animated, Easing} from 'react-native';
import LogoSrcL from '../../../assets/img/home_img/fond_ecran_left.png';

const Home_page_Left = ({isOpen}) => {
  const PaddingRight = useRef(new Animated.Value(0)).current;
  if (isOpen) {
    Animated.timing(PaddingRight, {
      toValue: -400,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }
  return (
    <ContainerImgLeft style={{transform: [{translateX: PaddingRight}]}}>
      <ImageBackgroundDiv source={LogoSrcL}>
        <ImgLeftLayer>
          <Title
            title="SALUT"
            margin_top={200}
            font_size={40}
            padding_bot={20}
          />
        </ImgLeftLayer>
      </ImageBackgroundDiv>
    </ContainerImgLeft>
  );
};
export default Home_page_Left;
