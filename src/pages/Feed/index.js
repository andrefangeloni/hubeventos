<<<<<<< HEAD
import React, { useState } from "react";
import { Keyboard, ActivityIndicator, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
=======
import React, {useState} from 'react';
import {Keyboard, ActivityIndicator, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
>>>>>>> Melhoria na estilização
import {
  Container,
  Form,
  Input,
  SearchButton,
  Card,
  Image,
  Title,
  Description,
<<<<<<< HEAD
  DateEv,
  Address,
  DetailsButton,
  DetailsButtonText,
  Owner,
} from "./styles";

export default function Feed({ navigation }) {
  const [loading, setLoading] = useState(false);

  function handleDetails() {
    navigation.navigate("EventDetails");
=======
  Text,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Feed({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleDetails() {
    navigation.navigate('EventDetails');
>>>>>>> Melhoria na estilização
  }

  return (
    <Container>
      <Form>
        <Input
          placeholder="Pesquisar Eventos"
          value=""
<<<<<<< HEAD
          onChangeText={() => ""}
          returnKeyType="send"
          onSubmitEditing={() => ""}
        />
        <SearchButton loading={loading} onPress={() => ""}>
=======
          onChangeText={() => ''}
          returnKeyType="send"
          onSubmitEditing={() => ''}
        />
        <SearchButton loading={loading} onPress={() => ''}>
>>>>>>> Melhoria na estilização
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
<<<<<<< HEAD
                "http://feirasenegocios.com.br/wp-content/uploads/2019/06/DEVCAMP.png",
=======
                'http://feirasenegocios.com.br/wp-content/uploads/2019/06/DEVCAMP.png',
>>>>>>> Melhoria na estilização
            }}
          />
          <Title>DevCamp</Title>
          <Description>Conferência de Desenvolvimento de Software</Description>
<<<<<<< HEAD
          <DateEv>14 de Agosto, às 08h</DateEv>
          <Address>Expo Dom Pedro - Campinas/SP</Address>
          <Owner>Criado por: Dextra</Owner>
=======
          <Text>14 de Agosto, às 08h</Text>
          <Text>Expo Dom Pedro - Campinas/SP</Text>
          <Text>Criado por: Dextra</Text>
>>>>>>> Melhoria na estilização
          <DetailsButton onPress={handleDetails}>
            <DetailsButtonText>DETALHES</DetailsButtonText>
          </DetailsButton>
        </Card>
        <Card>
          <Image
            source={{
              uri:
<<<<<<< HEAD
                "https://res.cloudinary.com/practicaldev/image/fetch/s--DsRi1C7P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8m2htjjpp31idwz8wnrz.jpg",
=======
                'https://res.cloudinary.com/practicaldev/image/fetch/s--DsRi1C7P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8m2htjjpp31idwz8wnrz.jpg',
>>>>>>> Melhoria na estilização
            }}
          />
          <Title>Meetup React Native</Title>
          <Description>
            Maior evento de programação mobile do interior
          </Description>
<<<<<<< HEAD
          <DateEv>16 de Agosto, às 18h</DateEv>
          <Address>Avenida Francisco Glicério, 100 - Campinas/SP</Address>
          <Owner>Criado por: Facebook Inc.</Owner>
          <DetailsButton onPress={() => ""}>
=======
          <Text>16 de Agosto, às 18h</Text>
          <Text>Avenida Francisco Glicério, 100 - Campinas/SP</Text>
          <Text>Criado por: Facebook Inc.</Text>
          <DetailsButton onPress={() => ''}>
>>>>>>> Melhoria na estilização
            <DetailsButtonText>DETALHES</DetailsButtonText>
          </DetailsButton>
        </Card>
      </ScrollView>
    </Container>
  );
}
