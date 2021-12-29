import React, {useEffect, useState} from 'react';
import {Keyboard, ScrollView} from 'react-native';

import {
  Container,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Input,
  Spacer,
  AddressList,
  AddressItem,
} from '../../styles/index';

const Ride = () => {
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
    <>
      <Container row height={60} justify="flex-start" padding={20}>
        <Container align="flex-start">
          <SubTitle>Voltar</SubTitle>
        </Container>
        <Container>
          <SubTitle>Corrida</SubTitle>
        </Container>
        <Container align="flex-end" />
      </Container>

      <Container padding={30} justify="flex-start">
        <Container height={90} justify="flex-start">
          <Input placeholder="Embarque" />
          <Input placeholder="Destino" />
        </Container>
        <Container>
          <AddressList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            renderItem={({item, index}) => (
              <AddressItem>
                <SubTitle bold>Menlo Park</SubTitle>
                <SubTitle small>Palo Alto, CA</SubTitle>
              </AddressItem>
            )}
          />
        </Container>
      </Container>

      {visible && (
        <Container justify="flex-end" height={50}>
          <Button>
            <ButtonText>Comece a usar</ButtonText>
          </Button>
        </Container>
      )}
    </>
  );
};

export default Ride;
