import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./styles";
// import ImagePicker from 'react-native-image-picker'

const noUser = "Você precisa estar logado para criar eventos";

export default function AddEvent() {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState("");

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo evento</Text>
        <View style={styles.imageContainer} />
        <TouchableOpacity onPress={() => ""} style={styles.button}>
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>
        <TextInput placeholder="Nome do evento" style={styles.input} />
        <TextInput placeholder="Descrição" style={styles.input} />
        <TextInput placeholder="Local" style={styles.input} />
        <TextInput placeholder="Valor do ingresso" style={styles.input} />
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="Data" style={styles.inputData} />
          <TextInput placeholder="Hora" style={styles.inputHora} />
        </View>
        <TouchableOpacity onPress={() => ""} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
