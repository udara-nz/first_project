import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('My First App Container is: Neuron');
  const [date, setDate] = useState('Published in 2023-12-01');
  const [current, setCurrent] = useState(true);
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(20231213);

  const onClickHandler = () => {
    setName('The second app will be continued...');
    setDate('Approximately 2024-02-10');
    setCurrent(false);
  };

  const onClicHandler = () => {
    setNumber(number + 1);
  };

  const onCal = () => {
    setAge(age - 19930819);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.TextContainer}>{name}</Text>
      <Text style={styles.TextContainer}>{date}</Text>
      <Text style={styles.TextContainer}>
        {current ? 'AI App' : 'Suggest the name'}
      </Text>
      <Button title="State Update" onPress={onClickHandler}></Button>
      <Text style={styles.TextContainer}>{number * 5}</Text>
      <Button title="ADD" onPress={onClicHandler}></Button>
      <Text style={styles.TextContainer}>You clicked {number} times</Text>
      <Text style={styles.TextContainer}>{age}</Text>
      <Button title="Calculate" onPress={onCal}></Button>
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
    margin: 10,
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default App;
