import React from 'react';
import { StyleSheet, Text, View } from 'react-360';

import Button from './Button';
import AudioPanel from './AudioPanel';

export default class ButtonsPanel extends React.Component {
    createRoomButtons(adjacentRooms) {
        let rooms = adjacentRooms;
        let buttons = [];

        rooms.map(room => (
            buttons.push(<Button key={`${room}-Button`} room={room} />)
        ));

        return buttons;
    }

    render() {
        return (
            <View>
                <View style={styles.buttonsPanel}>
                    <Text style={styles.header}> Navegação </Text>
                    {this.createRoomButtons(this.props.adjacentRooms)}
                    <AudioPanel />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    buttonsPanel: {
      width: 400,
      height: 400,
      opacity: 0.8,
      backgroundColor: 'rgb(255, 200, 50)',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: 5,
      borderRadius: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    }
});