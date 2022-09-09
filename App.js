import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SubHeader name="Dicksen Veloopillay" studentId="301255179" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
