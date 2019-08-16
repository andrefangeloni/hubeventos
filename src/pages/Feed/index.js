import React, { useState, useEffect } from "react";
import { Keyboard, ActivityIndicator, ScrollView } from "react-native";
import io from "socket.io-client";
import api from "../../services/api";
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
  Text,
  DetailsButton,
  DetailsButtonText,
} from "./styles";

export default function Feed({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      registerToSocket();
      const response = await api.get("/events");
      setFeed(response.data);
    }
    loadEvents();
  }, []);

  function registerToSocket() {
    const socket = io("http://192.168.15.12:3333");

    socket.on("event", newEvent => {
      setFeed([newEvent, ...feed]);
    });

    socket.on("subscribe", subscribed => {
      setFeed({
        feed: feed.map(event =>
          event._id === subscribed._id ? subscribed : event
        ),
      });
    });
  }

  function handleDetails() {
    navigation.navigate("EventDetails");
  }

  function handleSubscribe(id) {
    api.post(`/events/${id}/subscribe`);
  }

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
        {feed.map(event => (
          <Card key={event._id}>
            <Image
              source={{ uri: `http://192.168.15.12:3333/files/${event.image}` }}
            />
            <Title>{event.name}</Title>
            <Description>{event.description}</Description>
            <Text>{`${event.date} às ${event.hour}`}</Text>
            <Text>{event.place}</Text>
            <Text>{`Criado por: ${event.author}`}</Text>
            <Text>{`Inscritos: ${event.subscribes}`}</Text>
            <DetailsButton onPress={handleDetails}>
              <DetailsButtonText>DETALHES</DetailsButtonText>
            </DetailsButton>
          </Card>
        ))}
      </ScrollView>
    </Container>
  );
}
