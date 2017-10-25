import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#2868C7',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
    alignItems: 'stretch',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  btn: {
    marginTop: 30,
  },
});

export default styles;
