import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainer: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderColor: "#000",
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayTime: {
    fontFamily: 'space-mono',
    fontSize: 36,
    marginBottom: 15,
    zIndex: 2
  },
  displayTimeInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontFamily: 'space-mono',
    fontSize: 36,
    marginBottom: 15,
    zIndex: 2
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  startStop: {
    marginRight: 15,
    fontFamily: 'space-mono',
    fontSize: 18,
    zIndex: 2
  },
  reset: {
    marginLeft: 15,
    fontFamily: 'space-mono',
    fontSize: 18,
    zIndex: 2
  },
  todoInput: {
    fontFamily: 'space-mono',
    marginTop: 50,
    textAlign: 'center',
    fontSize: 18,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    minHeight: 50
  }
});

export default styles;