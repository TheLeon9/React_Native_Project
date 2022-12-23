import React from 'react';
import Title from '../../components/Title/';
import {
  ImageBackgroundDiv,
  ImgDroiteLayer,
  ContainerImg,
} from './style/ImgLeft_ImgRight_Cont';

import LogoSrcR from '../../../assets/img/home_img/fond_ecran_right.png';

const Home_page_Right = () => {
  return (
    <ContainerImg>
      <ImageBackgroundDiv source={LogoSrcR}>
        <ImgDroiteLayer>
          <Title
            title="LEON"
            margin_top={200}
            font_size={40}
            padding_bot={20}
          />
        </ImgDroiteLayer>
      </ImageBackgroundDiv>
    </ContainerImg>
  );
};
export default Home_page_Right;
