import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [list, setList] = useState([
    {key: 1, list: 'Item 1'},
    {key: 2, list: 'Item 2'},
    {key: 3, list: 'Item 3'},
    {key: 4, list: 'Item 4'},
    {key: 5, list: 'Item 5'},
    {key: 6, list: 'Item 6'},
    {key: 7, list: 'Item 7'},
    {key: 8, list: 'Item 8'},
    {key: 9, list: 'Item 9'},
    {key: 10, list: 'Item 10'},
    {key: 11, list: 'Item 11'},
    {key: 12, list: 'Item 12'},
    {key: 13, list: 'Item 13'},
    {key: 14, list: 'Item 14'},
    {key: 15, list: 'Item 15'},
    {key: 16, list: 'Item 16'},
    {key: 17, list: 'Item 17'},
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, {key: 15, list: 'Item 15'}]);
    setRefreshing(false);
  };

  return (
    <View style={styles.body}>
      <ScrollView
        horizontal={false}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#03363e']}
          />
        }>
        {list.map(list => {
          return (
            <View style={styles.item} key={list.key}>
              <Text style={styles.text}>{list.list}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    backgroundColor: '#bccefb',
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
