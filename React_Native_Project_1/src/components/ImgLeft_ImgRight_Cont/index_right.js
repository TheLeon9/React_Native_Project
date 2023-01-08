import React, {useRef} from 'react';
import Title from '../../components/Title/';
import {
  ImageBackgroundDiv,
  ImgRightLayer,
  ContainerImgRight,
} from './style/ImgLeft_ImgRight_Cont';
import {Animated, Easing} from 'react-native';
import LogoSrcR from '../../../assets/img/home_img/fond_ecran_right.png';

const Home_page_Right = ({isOpen}) => {
  const PaddingLeft = useRef(new Animated.Value(0)).current;
  if (isOpen) {
    Animated.timing(PaddingLeft, {
      toValue: 400,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }
  return (
    <ContainerImgRight style={{transform: [{translateX: PaddingLeft}]}}>
      <ImageBackgroundDiv source={LogoSrcR}>
        <ImgRightLayer>
          <Title
            title="ATION"
            margin_top={200}
            font_size={40}
            padding_bot={20}
          />
        </ImgRightLayer>
      </ImageBackgroundDiv>
    </ContainerImgRight>
  );
};
export default Home_page_Right;
