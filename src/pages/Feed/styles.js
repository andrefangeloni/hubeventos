import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SearchButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
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
  padding: 5px 15px;
  color: #000;
`;

export const Text = styled.Text`
  padding: 5px 15px;
  color: #444;
`;

export const DetailsButton = styled(RectButton)`
  margin: 15px;
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const DetailsButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
