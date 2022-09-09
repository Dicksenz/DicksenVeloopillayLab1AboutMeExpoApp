import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Dicksen Veloopillay</Text>
      <Text style={styles.textStyle}>ID#: 301255179</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 18,
  },
});

export default SubHeader;
