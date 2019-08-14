import React, { useState } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  Form,
  Input,
  SearchButton,
  List,
  Card,
  Image,
  Title,
  Description,
  DateEv,
  Address,
  DetailsButton,
  DetailsButtonText,
  Owner,
} from "./styles";

export default function Feed() {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Form>
        <Input
          placeholder="Pesquisar Eventos"
          value=""
          onChangeText={() => ""}
          returnKeyType="send"
          onSubmitEditing={() => ""}
        />
        <SearchButton loading={loading} onPress={() => ""}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="search" size={20} color="#FFF" />
          )}
        </SearchButton>
      </Form>

      <Card>
        <Image
          source={{
            uri: "https://api.adorable.io/avatars/285/abott@adorable.png",
          }}
        />
        <Title>Meetup React Native</Title>
        <Description>
          Maior evento de programação mobile do interior ssdasd asd adadas ds
          asadasdsadasdadasdasda da dasdadasdad ads
        </Description>
        <DateEv>14 de Agosto, às 18h</DateEv>
        <Address>Avenida Francisco Glicério, 100 - Campinas/SP</Address>
        <Owner>Criado por: Teste</Owner>
        <DetailsButton onPress={() => ""}>
          <DetailsButtonText>DETALHES</DetailsButtonText>
        </DetailsButton>
      </Card>
    </Container>
  );
}
