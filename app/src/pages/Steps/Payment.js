import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import {CreditCardInput} from 'react-native-credit-card-input';

import {
  Container,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Spacer,
} from '../../styles/index';

const Payment = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setVisible(false),
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setVisible(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Container padding={30} justify="flex-start" align="space-around">
      <Container align="flex-start" height={40}>
        <Title>Escolha como pagar</Title>
        <SubTitle>Preencha os dados do cartão de crédito.</SubTitle>
      </Container>
      <Container>
        <Spacer height={50} />
        <CreditCardInput requiresName />
      </Container>

      {visible && (
        <Container justify="flex-end" height={70}>
          <Button>
            <ButtonText>Comece a usar</ButtonText>
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default Payment;
