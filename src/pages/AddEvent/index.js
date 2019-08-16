import React, { useState } from "react";
import api from "../../services/api";
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

export default function AddEvent({ navigation }) {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  function handleSelectImage() {
    ImagePicker.showImagePicker(
      {
        title: "Selecionar imagem",
      },
      upload => {
        if (upload.error) {
          console.log("Error");
        } else if (upload.didCancel) {
          console.log("User canceled");
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split(".");
            ext = ext.toLowerCase() === "heic" ? "jpg" : ext;
          } else {
            prefix = new Date().getTime();
            ext = "jpg";
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          setPreview(preview);
        }
      }
    );
  }

  async function handleSubmit() {
    try {
      const data = new FormData();
      // data.append("fileName", setImage);
      data.append("name", name);
      data.append("description", description);
      data.append("place", place);
      data.append("value", value);
      data.append("date", date);
      data.append("hour", hour);

      const response = await api.post("/events", data);
      console.log(response.data);
      navigation.navigate("Feed");
    } catch (err) {
      console.log(err, "Deu erro");
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo evento</Text>
        <View style={styles.imageContainer} />
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>

        {/* {useState(preview) && (
          <View style={styles.imageContainer} source={useState(preview)} />
        )} */}

        <TextInput
          style={styles.input}
          placeholder="Nome do evento"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Local"
          value={place}
          onChangeText={setPlace}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor do ingresso"
          value={value}
          onChangeText={setValue}
        />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.inputData}
            placeholder="Data"
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={styles.inputHora}
            placeholder="Hora"
            value={hour}
            onChangeText={setHour}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
