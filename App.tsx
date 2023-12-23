import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [List, setList] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 10'},
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setList([...List, {name: 'Item 10'}]);
    setRefreshing(false);
  };

  return (
    <FlatList
      // inverted {/* chenge the order asc to desc */}
      // horizontal {/* vertical change into horizontal*/}
      // numColumns={2} {/* number of columns */}
      keyExtractor={(item, index) => index.toString()}
      data={List}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#03363e']}
        />
      }
    />

    // <View style={styles.body}>
    //   <ScrollView
    //     horizontal={false}
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={Refreshing}
    //         onRefresh={onRefresh}
    //         colors={['#03363e']}
    //       />
    //     }>
    //     {list.map(list => {
    //       return (
    //         <View style={styles.item} key={list.key}>
    //           <Text style={styles.text}>{list.list}</Text>
    //         </View>
    //       );
    //     })}
    //   </ScrollView>
    // </View>
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
