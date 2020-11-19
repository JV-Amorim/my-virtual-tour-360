import React from 'react';
import { StyleSheet, Text, VrButton } from 'react-360';
import GazeButton from '../dependences/gaze-button';

import { changeRoom } from '../app/store';

export default class Button extends React.Component {
    state = {
      hover: false
    }
  
    clickHandler(roomSelection) {
      changeRoom(roomSelection)
    }
    
    render() {
      return (
        <GazeButton
          style={this.state.hover ? styles.hover : styles.button}
          onEnter={() => this.setState({hover: true})}
          onExit={() => this.setState({hover: false})}
          onClick={() => this.clickHandler(this.props.room)}
          duration={2000}
          render={() => (
            <Text style={{textAlign: 'center'}}>
              {this.props.room.replace('_', ' ')}
            </Text>
          )}
        />
      );
    }
}

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      marginBottom: 10,
      width: 200,
      backgroundColor: 'rgb(0, 0, 0)',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: 5,
    },
    hover: {
      marginTop: 10,
      marginBottom: 10,
      width: 200,
      backgroundColor: 'rgb(0, 45, 72)',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: 5,
    },
});