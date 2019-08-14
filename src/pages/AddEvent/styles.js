import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === "ios" ? 30 : 10,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "90%",
    height: Dimensions.get("window").width / 2,
    backgroundColor: "#EEE",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width / 2,
    resizeMode: "center",
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#7159c1",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
  input: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    paddingLeft: 15,
  },
  inputData: {
    marginTop: 20,
    marginRight: 40,
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    paddingLeft: 15,
    width: "40%",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  inputHora: {
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    paddingLeft: 15,
    width: "40%",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  buttonDisabled: {
    backgroundColor: "#AAA",
  },
});

export default styles;
