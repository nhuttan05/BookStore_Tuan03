import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
Header
export default function App() {
  return (
    <>
      <div style={styles.container}><Header></Header></div>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'while',
    height:'auto',
    justifyContent:'center'
  },
});
