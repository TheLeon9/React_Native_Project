import React from 'react';
import P from '../../P/';
import Span from '../../Span';
import {AroundText, AroundTextCont} from '../style/Profil';

const Profil_Text = ({span, p}) => {
  return (
    <AroundTextCont>
      <AroundText>
        <Span font_size={18}>{span}</Span>
      </AroundText>
      <P font_size={18}>{p}</P>
    </AroundTextCont>
  );
};

export default Profil_Text;
