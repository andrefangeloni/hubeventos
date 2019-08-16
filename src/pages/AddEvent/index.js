import React, { useState } from "react";
import api from "../../services/api";
import ImagePicker from "react-native-image-picker";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./styles";

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
          setImage(image);
        }
      }
    );
  }

  async function handleSubmit() {
    const data = new FormData();
    data.append("image", image);
    data.append("name", name);
    data.append("description", description);
    data.append("place", place);
    data.append("value", value);
    data.append("date", date);
    data.append("hour", hour);

    await api.post("/events", data);

    navigation.navigate("Feed");
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo evento</Text>
        <TouchableOpacity onPress={handleSelectImage} style={styles.button}>
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>

        {preview && <Image style={styles.preview} source={preview} />}

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
