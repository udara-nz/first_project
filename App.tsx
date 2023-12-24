import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
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

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
    {
      title: 'Title 5',
      data: ['Item 5-1', 'Item 5-2'],
    },
  ];

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setList([...List, {name: 'Item 10'}]);
    setRefreshing(false);
  };

  return (
    // <SectionList
    //   sections={DATA}
    //   renderItem={({item}) => (
    //     <View style={styles.bod2}>
    //       <Text style={styles.text}>{item}</Text>
    //     </View>
    //   )}
    //   renderSectionHeader={({section}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
    //   )}
    // />
    <FlatList
      style={styles.container}
      // inverted {/* chenge the order asc to desc */}
      // horizontal
      numColumns={2}
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
  container: {
    backgroundColor: 'transparent',
  },
  item: {
    width: 160,
    height: 160,
    margin: 20,
    backgroundColor: '#0000FF20',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bod2: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 40,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});

export default App;
