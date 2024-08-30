import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 16,
  },
  activityIndicator: {
    paddingTop: 50,
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 32,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default styles;
