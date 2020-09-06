import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Switch, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Icon } from "native-base";
import { WebView } from 'react-native-webview';

export default VideoWebViewPage = (props) => {
    return (


        <View style={{ flex: 1 }}>
            {/* <Text style={styles.mainTitleText}>{props.headerTitle}</Text> */}
            <WebView
                onLoad={props.hideSpinner}
                style={{ flex: 1 }}
                source={{ uri: props.uri }}

            />
            {props.isLoading && (
                <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator
                        size="large"
                        color="#000914"
                    />
                </View>

            )}

        </View>


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
    }

});