import styled, {css} from 'styled-components/native';
import MapView from 'react-native-maps';
import Pulse from 'react-native-pulse';

import {colors} from './theme';

export const Container = styled.View`
  ${({
    color,
    row,
    justify,
    padding,
    align,
    width,
    height,
    position,
    top,
    zIndex,
  }) => css`
    flex: 1;
    background: ${color ? colors[color] : 'transparent'}
    flex-direction: ${row ? 'row' : 'column'};
    justify-content: ${justify || 'center'};
    padding: ${padding || 0}px;
    width: 100%;
    max-width: ${width || '100%'};
    max-height: ${height ? height + 'px' : 'auto'};
    align-items: ${align || 'center'};
    position: ${position || 'relative'};
    top: ${top || 0};
    z-index: ${zIndex || 1};
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({compact, disabled, type}) => css`
    width: 100%;
    padding: ${compact ? 5 : 15}px;
    opacity: ${disabled ? 0.5 : 1};
    background: ${type ? colors[type] : colors.primary};
  `}
`;

export const ButtonText = styled.Text`
  ${({color}) => css`
    text-align: center;
    color: ${color ? colors[color] : colors.black};
  `}
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.dark};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  ${({small, bold, color}) => css`
    font-size: ${small ? '12px' : '15px'};
    opacity: 0.7;
    font-weight: ${bold ? 'bold' : 'normal'};
    color: ${color ? colors[color] : colors.dark};
  `}
`;

export const PickerButton = styled.TouchableOpacity`
  ${({active}) => css`
    width: 100%;
    height: 40%;
    margin-top: 2.5%;
    border-width: 3px;
    border-style: solid;
    justify-content: space-around;
    align-items: center;
    border-color: ${active ? colors.primary : colors.muted50};
    background: ${active ? colors.primary + '80' : colors.muted50};
  `}
`;

export const Input = styled.TextInput`
  background-color: ${colors.light};
  border: 1px solid ${colors.muted};
  width: 100%;
  padding: 7px 15px;
`;

export const Spacer = styled.View`
  ${({width, height}) => css`
    width: ${width ? width + 'px' : '100%'};
    height: ${height ? height + 'px' : '10px'};
  `}
`;

export const AddressList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-top: 10px;
`;

export const AddressItem = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: flex-start;
`;

export const Map = styled(MapView)`
  ${({disabled}) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    opacity: ${disabled ? 0.4 : 1};
  `}
`;

export const Avatar = styled.Image.attrs({
  elevation: 50,
})`
  ${({small}) => css`
    width: ${small ? '35px' : '50px'};
    height: ${small ? '35px' : '50px'};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: ${colors.muted};
    border-radius: ${small ? '35px' : '50px'};
  `}
`;

export const VerticalSeparator = styled.View`
  width: 1px;
  height: 100%;
  background: ${colors.muted};
`;

export const Bullet = styled.View`
  ${({destination}) => css`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin-top: 4px;
    background: ${destination ? '#ff2929' : '#00eb5e'};
  `}
`;

export const PulseCircle = styled(Pulse).attrs({
  color: colors.primary,
})``;
