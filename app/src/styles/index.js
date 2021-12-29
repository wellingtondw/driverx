import styled, {css} from 'styled-components/native';
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
