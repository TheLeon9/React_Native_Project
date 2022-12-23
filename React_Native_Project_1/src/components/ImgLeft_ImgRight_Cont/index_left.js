import React from 'react';
import Title from '../../components/Title/';
import {
  ImageBackgroundDiv,
  ImgGaucheLayer,
  ContainerImg,
} from './style/ImgLeft_ImgRight_Cont';

import LogoSrcL from '../../../assets/img/home_img/fond_ecran_left.png';

const Home_page_Left = () => {
  return (
    <ContainerImg>
      <ImageBackgroundDiv source={LogoSrcL}>
        <ImgGaucheLayer>
          <Title
            title="THE_"
            margin_top={200}
            font_size={40}
            padding_bot={20}
          />
        </ImgGaucheLayer>
      </ImageBackgroundDiv>
    </ContainerImg>
  );
};
export default Home_page_Left;
