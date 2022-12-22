import React from 'react';
import Home_page_Left from '../../components/ImgLeft_ImgRight_Cont/index_left';
import Home_page_Right from '../../components/ImgLeft_ImgRight_Cont/index_right';
import BoutonCercleDiv from '../../components/Bouton_power';

import {
  SafeAreaViewDivHome,
  GlobalLayerHome,
  AbsoluteCircle,
} from './style/home_page';

import {
  BigCercle,
  LittleCercle,
  MiddleCercle,
} from '../../../assets/img/home_img/home_img.js';

const Home_page = ({navigation}) => {
  return (
    <SafeAreaViewDivHome>
      <GlobalLayerHome>
        <AbsoluteCircle midsize="-102" size="204">
          <BigCercle />
        </AbsoluteCircle>
        <AbsoluteCircle midsize="-90" size="180">
          <MiddleCercle />
        </AbsoluteCircle>
        <AbsoluteCircle midsize="-80" size="160">
          <LittleCercle />
        </AbsoluteCircle>
        <BoutonCercleDiv navigation={navigation} />
        <Home_page_Left />
        <Home_page_Right />
      </GlobalLayerHome>
    </SafeAreaViewDivHome>
  );
};

export default Home_page;
