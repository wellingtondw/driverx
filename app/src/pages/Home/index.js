import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Avatar,
  Bullet,
  Button,
  ButtonText,
  Container,
  Input,
  Map,
  PulseCircle,
  Spacer,
  SubTitle,
  Title,
  VerticalSeparator,
} from '../../styles/index';

const Home = () => {
  // passenger, driver
  const type = 'driver';

  //S - Sem corrida, I - informações, P - Pesquisa, C corrida
  const status = 'C';

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        disabled={status === 'P'}
      />
      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={9}
        pointerEvents="box-none"
        style={{height: '100%'}}>
        <Container height={100} justify="flex-start" align="flex-start">
          {(status === 'S' || type === 'driver') && (
            <TouchableOpacity>
              <Avatar
                source={{
                  uri: 'https://www.radiestesia.net/wp-content/uploads/2020/09/manprofile-500.jpg',
                }}
              />
            </TouchableOpacity>
          )}

          {status !== 'S' && type === 'passenger' && (
            <Container elevation={50} justify="flex-end" color="light">
              <Container padding={14}>
                <Container row justify="flex-start">
                  <Bullet style={{marginRight: 8}} />
                  <SubTitle>Endereço de embarque completo</SubTitle>
                </Container>
                <Spacer />
                <Container row justify="flex-start">
                  <Bullet destination style={{marginRight: 8}} />
                  <SubTitle>Endereço de destino completo</SubTitle>
                </Container>
              </Container>
              <Button type="dark" compact>
                <ButtonText color="light">Toque para editar</ButtonText>
              </Button>
            </Container>
          )}
        </Container>

        {type === 'passenger' && status === 'P' && (
          <Container padding={20} zIndex={-1}>
            <PulseCircle
              numPulses={3}
              diameter={400}
              speed={20}
              duration={2000}
            />
          </Container>
        )}

        <Container
          justify="flex-end"
          padding={20}
          align="flex-start"
          elevation={50}
          height={200}
          color="light">
          {/* Passageiro sem corrida */}
          {type === 'passenger' && status === 'S' && (
            <Container>
              <SubTitle>Olá Wellington,</SubTitle>
              <Title>Para onde você quer ir?</Title>
              <Spacer />
              <Input placeholder="Procure um destino..." />
            </Container>
          )}

          {/* Passageiro informações da corrida */}
          {type === 'passenger' && (status === 'I' || status === 'P') && (
            <Container justify="flex-end" align="flex-start">
              <Container padding={20}>
                <SubTitle>Driverx Convencional</SubTitle>
                <Spacer />
                <Container row>
                  <Container>
                    <Title>R$ 13,90</Title>
                  </Container>
                  <VerticalSeparator />
                  <Container>
                    <Title>5 mins</Title>
                  </Container>
                </Container>
              </Container>
              <Button type={status === 'P' ? 'muted' : 'primary'}>
                <ButtonText>
                  {status === 'P' ? 'Cancelar Driverx' : 'Chamar Driverx'}
                </ButtonText>
              </Button>
            </Container>
          )}

          {/* Passageiro em corrida */}
          {type === 'passenger' && status === 'C' && (
            <Container border="primary" justify="flex-end" align="flex-start">
              <Container row>
                <Container row align="flex-start">
                  <Avatar
                    small
                    source={{
                      uri: 'https://www.radiestesia.net/wp-content/uploads/2020/09/manprofile-500.jpg',
                    }}
                  />
                  <Spacer width={10} />
                  <Container align="flex-start">
                    <SubTitle bold>Juliana Righi</SubTitle>
                    <SubTitle small>ABC-123, BMW X6, Preta</SubTitle>
                  </Container>
                </Container>
                <VerticalSeparator style={{height: 40}} />
                <Container width={120}>
                  <Title>R$ 12,90</Title>
                  <SubTitle bold color="primary">
                    Aprox. 5 mins
                  </SubTitle>
                </Container>
              </Container>
              <Button type="muted">
                <ButtonText>Cancelar corrida</ButtonText>
              </Button>
            </Container>
          )}

          {/* Motorista sem corrida */}
          {type === 'driver' && status === 'S' && (
            <Container>
              <SubTitle>Olá, Juliana</SubTitle>
              <Title>Nenhuma corrida encontrada.</Title>
              <Spacer />
            </Container>
          )}

          {/* Motorista está em corrida */}
          {type === 'driver' && status === 'C' && (
            <Container border="primary" justify="flex-end" align="flex-start">
              <Container row>
                <Container row align="flex-start">
                  <Avatar
                    small
                    source={{
                      uri: 'https://www.radiestesia.net/wp-content/uploads/2020/09/manprofile-500.jpg',
                    }}
                  />
                  <Spacer width={10} />
                  <Container align="flex-start">
                    <SubTitle bold>Wellington (2km)</SubTitle>
                    <Container height={40} style={{paddingRight: 14}}>
                      <Container row justify="flex-start">
                        <Bullet destination style={{marginRight: 4}} />
                        <SubTitle numberOfLines={1} small>
                          Endereço de embarque completo
                        </SubTitle>
                      </Container>
                      <Container row justify="flex-start">
                        <Bullet destination style={{marginRight: 4}} />
                        <SubTitle numberOfLines={1} small>
                          Endereço de destino completo
                        </SubTitle>
                      </Container>
                    </Container>
                  </Container>
                </Container>
                <VerticalSeparator style={{height: 40}} />
                <Container width={110}>
                  <Title>R$ 12,90</Title>
                  <SubTitle bold color="primary">
                    Aprox. 5 mins
                  </SubTitle>
                </Container>
              </Container>
              <Button type="primary">
                <ButtonText>Aceitar corrida</ButtonText>
              </Button>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
