import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import {
  Container,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Input,
  Spacer,
} from '../../styles/index';

const Car = () => {
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
        <Title>Cadastre seu veículo</Title>
        <SubTitle>Preencha os campos abaixo.</SubTitle>
      </Container>
      <Container justify="flex-start">
        <Spacer height={50} />
        <Input placeholder="Placa do veículo" />
        <Spacer />
        <Input placeholder="Marca do veículo" />
        <Spacer />
        <Input placeholder="Modelo do veículo" />
        <Spacer />
        <Input placeholder="Cor do veículo" />
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

export default Car;
