<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, {useState} from 'react';
>>>>>>> Melhoria na estilização
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
<<<<<<< HEAD
} from "react-native";
import styles from "./styles";
// import ImagePicker from 'react-native-image-picker'

const noUser = "Você precisa estar logado para criar eventos";

export default function AddEvent() {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState("");
=======
} from 'react-native';
import styles from './styles';
// import ImagePicker from 'react-native-image-picker'

const noUser = 'Você precisa estar logado para criar eventos';

export default function AddEvent() {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState('');
>>>>>>> Melhoria na estilização

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo evento</Text>
<<<<<<< HEAD
        <View style={styles.imageContainer}>
          {/* <Image source={this.state.image} 
                          style={styles.image} /> */}
        </View>
        <TouchableOpacity onPress={() => ""} style={styles.button}>
=======
        <View style={styles.imageContainer} />
        <TouchableOpacity onPress={() => ''} style={styles.button}>
>>>>>>> Melhoria na estilização
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>
        <TextInput placeholder="Nome do evento" style={styles.input} />
        <TextInput placeholder="Descrição" style={styles.input} />
<<<<<<< HEAD
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="Data" style={styles.inputData} />
          <TextInput placeholder="Hora" style={styles.inputHora} />
        </View>
        <TouchableOpacity onPress={() => ""} style={styles.button}>
=======
        <TextInput placeholder="Valor do ingresso" style={styles.input} />
        <View style={{flexDirection: 'row'}}>
          <TextInput placeholder="Data" style={styles.inputData} />
          <TextInput placeholder="Hora" style={styles.inputHora} />
        </View>
        <TouchableOpacity onPress={() => ''} style={styles.button}>
>>>>>>> Melhoria na estilização
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
