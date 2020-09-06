import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Switch, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
export default VedioCard = (props) => {
    return (


        
        <Video source={{uri: props.audioStramuri}}   
            paused={props.paused}                                
            style={styles.backgroundVideo} />
    

    );
}

const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    icon: {
        marginHorizontal: 20,
        marginVertical: 20,
        color: "#9c84ff",
        fontSize: 30
    },
    mainTitleText: {
        color: "white",
        fontSize: 25,
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: "bold"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }

});