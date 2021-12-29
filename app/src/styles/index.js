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
