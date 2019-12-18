import React, {
  Component 
} from 'react';

import {
  Text, View, StyleSheet, ScrollView
} from 'react-native';

class ScrollViewExample extends Component {
  state = {
    names: [
      {'name': 'Ben', 'id':1},
      {'name': 'susan','id' : 2},
      {'name': 'Robert', 'id': 3},
      {'name': 'Mary', 'id': 4},
      {'name': 'Daniel', 'id': 5},
      {'name': 'Krish', 'id': 6},
      {'name': 'Love', 'id': 7},
      {'name': 'beerbal', 'id': 8},
      {'name': 'Ram', 'id': 9},
      {'name': 'Lakshman', 'id': 10},
      {'name': 'Arora', 'id': 11},
      {'name': 'Bakshi', 'id': 12}
    ]
  }

  render() {
    return(
      <View>
        <ScrollView>
          {
            this.state.names.map((item,index) => (
              <View key = {item.id} style = {styles.item}>
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

export default ScrollViewExample

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  }
})