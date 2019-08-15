import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import logo from "../../assets/logo.png";
import CheckBox from "../../components/CheckBox";
import styles from "./styles";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  function handleCheckBox() {
    setCheck(!check);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TextInput
        placeholder="Nome"
        style={styles.input}
        autoFocus
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CheckBox
        selected={check}
        onPress={handleCheckBox}
        text="Li e Aceito os Termos de Uso"
      />
      <TouchableOpacity onPress={() => ""} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
