import React from 'react';
import {SafeAreaViewDiv, GlobalImg, GlobalLayer, GoBack} from './style/3d_page';

import Fond_ecran from '../../../assets/img/fond_ecran.jpg';
import P from '../../components/P';
import Span from '../../components/Span';

const Cube_Page = ({navigation, route}) => {
  const GoBackFunct = () => {
    const newUser = 'The_Leon';
    const newPassword = 'Aucune Idée';
    navigation.navigate('Galerie', {
      usernameCo: newUser,
      passwordCo: newPassword,
    });
  };
  return (
    <SafeAreaViewDiv>
      <GlobalImg source={Fond_ecran}>
        <GlobalLayer>
          <Span font_size={18}>{route.params.nameFor3D}</Span>
          <GoBack onPress={() => GoBackFunct()}>
            <P font_size={16}>GO BACK</P>
          </GoBack>
        </GlobalLayer>
      </GlobalImg>
    </SafeAreaViewDiv>
  );
};

export default Cube_Page;
