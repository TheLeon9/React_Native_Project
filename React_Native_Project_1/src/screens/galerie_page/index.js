import React, {useEffect} from 'react';
import {SafeAreaViewDiv, GlobalImg, GlobalLayer} from './style/galerie_page';
import Fond_ecran from '../../../assets/img/fond_ecran.jpg';
import {showMessage} from 'react-native-flash-message';
import Profil from '../../components/Profil';

const Galerie_Details = ({route}) => {
  useEffect(() => {
    showMessage({
      message: 'Welcome THE_LEON',
      description: 'Your connection succeed',
      type: 'default',
      backgroundColor: 'rgba(0, 0, 60, 0.80)',
      color: 'white',
      icon: 'info',
      position: 'right',
    });
  }, []);
  return (
    <SafeAreaViewDiv>
      <GlobalImg source={Fond_ecran}>
        <GlobalLayer>
          <Profil
            usernameCo={route.params.usernameCo}
            passwordCo={route.params.passwordCo}
          />
        </GlobalLayer>
      </GlobalImg>
    </SafeAreaViewDiv>
  );
};

export default Galerie_Details;
