import React from 'react';
import { StyleSheet, View, NativeModules, VrButton, Image, asset } from 'react-360';
import GazeButton from "react-360-gaze-button";

const { AudioModule } = NativeModules;

export default class AudioPanel extends React.Component {
    state = {
        isAudioPlaying: false
    }

    componentDidMount() {
        this.stopAmbientMusic();
    }

    playAmbientMusic() {
        this.setState({isAudioPlaying: true})
        AudioModule.playEnvironmental({
            source: asset('ambient.wav'),
            volume: 0.3
        });
    }

    stopAmbientMusic() {
        this.setState({isAudioPlaying: false})
        AudioModule.stopEnvironmental();
    }

    render() {
        return(
            <View style={styles.audioPanel}>
                {this.state.isAudioPlaying ? (
                    <GazeButton
                        onClick={() => this.stopAmbientMusic()}
                        duration={2000}
                        render={() => (
                            <Image
                                style={{height: 50, width: 50}}
                                source={asset('audioOff.png')}
                            />
                        )}
                    />
                ) : (
                    <GazeButton
                    onClick={() => this.playAmbientMusic()}
                        duration={2000}
                        render={() => (
                            <Image
                                style={{height: 50, width: 50}}
                                source={asset('audioOff.png')}
                            />
                        )}
                    />
                )}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    audioPanel: {
        position: 'absolute',
        bottom: 10,
        right: 10
    }
});