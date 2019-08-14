import React, { useState } from "react";
import { Keyboard, ActivityIndicator, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  Form,
  Input,
  SearchButton,
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <Image
            source={{
              uri:
                "http://feirasenegocios.com.br/wp-content/uploads/2019/06/DEVCAMP.png",
            }}
          />
          <Title>DevCamp</Title>
          <Description>Conferência de Desenvolvimento de Software</Description>
          <DateEv>14 de Agosto, às 08h</DateEv>
          <Address>Expo Dom Pedro - Campinas/SP</Address>
          <Owner>Criado por: Dextra</Owner>
          <DetailsButton onPress={() => ""}>
            <DetailsButtonText>DETALHES</DetailsButtonText>
          </DetailsButton>
        </Card>
        <Card>
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--DsRi1C7P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8m2htjjpp31idwz8wnrz.jpg",
            }}
          />
          <Title>Meetup React Native</Title>
          <Description>
            Maior evento de programação mobile do interior
          </Description>
          <DateEv>16 de Agosto, às 18h</DateEv>
          <Address>Avenida Francisco Glicério, 100 - Campinas/SP</Address>
          <Owner>Criado por: Facebook Inc.</Owner>
          <DetailsButton onPress={() => ""}>
            <DetailsButtonText>DETALHES</DetailsButtonText>
          </DetailsButton>
        </Card>
      </ScrollView>
    </Container>
  );
}
