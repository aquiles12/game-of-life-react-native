import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#999',
  },
  button: {
    padding: 3,
    margin: 10,
    width: '45%',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  buttonText: {
    color: '#FFF',
  },
  titleArea: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
  }
});
