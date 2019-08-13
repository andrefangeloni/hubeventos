import React, { useState } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Form, Input, SubmitButton } from "./styles";

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
        <SubmitButton loading={loading} onPress={() => ""}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="search" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
