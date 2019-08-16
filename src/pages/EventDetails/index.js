import React, { useState } from "react";
import { Keyboard, ActivityIndicator, ScrollView } from "react-native";
import api from "../../services/api";
import {
  Container,
  Card,
  Image,
  Title,
  Description,
  Text,
  BuyButton,
  BuyButtonText,
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
          <Text>14 de Agosto, às 08h</Text>
          <Text>Expo Dom Pedro - Campinas/SP</Text>
          <Text>Criado por: Dextra</Text>
          <Text>Quantidade de Inscritos: 10</Text>
          <Text>Valor: R$ 100,00</Text>
          <BuyButton onPress={handleBuy}>
            <BuyButtonText>Comprar</BuyButtonText>
          </BuyButton>
        </Card>
      </ScrollView>
    </Container>
  );
}
