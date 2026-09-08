import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import BookCard from "./components/BookCard";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header />
      </View>
      <View>
        <BookCard />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    justifyContent: "center",
  },
});
