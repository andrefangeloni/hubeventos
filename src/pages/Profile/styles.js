import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#7159c1',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default styles;
