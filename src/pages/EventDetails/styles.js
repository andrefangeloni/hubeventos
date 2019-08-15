import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 20px;
`;

export const Card = styled.View`
  border-width: 1;
  margin-top: 20px;
  justify-content: center;
  border-radius: 4px;
`;

export const Image = styled.Image`
  align-self: stretch;
  width: 330px;
  height: 120px;
  min-width: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  padding: 10px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding: 5px 10px;
  color: #000;
`;
export const Text = styled.Text`
  padding: 5px 15px;
  color: #444;
`;

export const BuyButton = styled(RectButton)`
  margin: 15px;
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const BuyButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
