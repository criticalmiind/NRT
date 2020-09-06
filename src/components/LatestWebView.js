import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import { Icon } from "native-base";
import { WebView } from 'react-native-webview';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default LatestWebView = (props) => {
    return (
        <View style={{ flex:1 }}>
            <WebView
                onLoad={props.hideSpinner}
                style={{ flex: 1 }}
                source={{ uri: props.uri }}
            />
            {props.isLoading && (
                <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator
                        size="large"
                        color="#012754"
                    />
                </View>

            )}
        </View>

    );
}

const styles = StyleSheet.create({
    icon: {
        color: "white",
        fontSize: hp('3.5%')
    }

});