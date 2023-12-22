import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.big_row}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bccefb',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big_row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#91a1e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#88bf8d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#ffa7b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 2,
    backgroundColor: '#ff7373',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 2,
    backgroundColor: '#bf94e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#88bf8d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#ec9118',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});

export default App;
