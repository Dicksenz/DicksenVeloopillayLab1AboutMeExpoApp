import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => {
  return <Text style={styles.container}>AboutMe</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
  },
});

export default Header;
