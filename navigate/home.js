import {
React,
Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component {
  render() {
    return(
      <View style = {styles.container}>
         <Text> We have {this.props.screenProps.currentFriends.length} friends! </Text>
         <Button
         title = "Add Some Friends"
         onPress={() =>
         this.props.navigation.navigate('Friends')
    }
    />
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});