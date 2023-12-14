import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextContainer}>My First App Container</Text>
      <Button
        title="State Update"
        onPress={() => Linking.openURL('https://www.youtube.com/')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainer: {
    margin: 20,
    color: '#fff',
    fontSize: 30,
    fontStyle: 'italic',
  },
});

export default App;
