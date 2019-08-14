import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import logo from "../../assets/logo.png";
import styles from "./styles";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <TouchableOpacity onPress={() => ""} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
