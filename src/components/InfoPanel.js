import React from 'react';
import { StyleSheet, Text, View, } from 'react-360';

export default class InfoPanel extends React.Component {
    render() {
        return (
          <View>
              <View style={styles.infoPanel}>
              <Text style={styles.header}>
                  {this.props.room.replace('_', ' ')}
              </Text>
              <Text style={styles.infoText}>
                  {this.props.info}
              </Text>
              </View>
          </View>
        );
    }
};

const styles = StyleSheet.create({
    infoText: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    infoPanel: {
      width: 400,
      height: 400,
      opacity: 0.8,
      backgroundColor: 'rgb(255, 200, 50)',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: 5,
      borderRadius: 20
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    }
});