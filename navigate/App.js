import React from 'react';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        possibleFriends: [
          'Hitsa',
          'Pushpa',
          'Aanchal',
          'Krishna',
          'Bhawani',
        ],
        currentFriends: [],
      }
    }

    addFriend = (index) => {
      const{
        currentFriends,
        possibleFriends,
      } = this.state

      //pull friend out of possibleFriends
      const addedFriend = possibleFriends.splice(index,1)

      //And put friend in currentFriends
      currentFriends.push(addedFriend)

      //Finally,update our app state

      this.setState({
          currentFriends,
          possibleFriends,
      })
    }
    render() {
      return(
        <AppNavigator
        screenProps={{
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.state.addFriend,
        }}/>
    )
  }
}


