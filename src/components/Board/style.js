import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    height: 300,
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
  }
});
