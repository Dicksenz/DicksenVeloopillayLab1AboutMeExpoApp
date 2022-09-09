import React from "react";

import { View, Text, StyleSheet } from "react-native";

const SubHeader = ({ name, studentId }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textStyle}>ID#: {studentId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 18,
  },
});

export default SubHeader;
