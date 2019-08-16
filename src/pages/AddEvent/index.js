import React, { useState } from "react";
// import ImagePicker from "react-native-image-picker"
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  // function handleSelectImage() {
  //   ImagePicker.showImagePicker(
  //     {
  //       title: "Selecionar imagem",
  //     },
  //     upload => {}
  //   );
  // }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo evento</Text>
        <View style={styles.imageContainer} />
        <TouchableOpacity onPress={handleSelectImage} style={styles.button}>
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
