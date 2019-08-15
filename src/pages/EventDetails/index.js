import React, { useState } from "react";
import { Keyboard, ActivityIndicator, ScrollView } from "react-native";
import {
  Container,
  Card,
  Image,
  Title,
  Description,
  DateEv,
  Address,
  BuyButton,
  BuyButtonText,
  Owner,
  Subscribed,
} from "./styles";

export default function EventDetails({ navigation }) {
  function handleBuy() {
    navigation.navigate("Login");
  }

  return (
    <Container>
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
          <Subscribed>Quantidade de Inscritos: 10</Subscribed>
          <BuyButton onPress={handleBuy}>
            <BuyButtonText>Comprar</BuyButtonText>
          </BuyButton>
        </Card>
      </ScrollView>
    </Container>
  );
}
