import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Switch, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Icon } from "native-base";
import WebViewPage from "../components/WebViewPage";

export default headerComponent = (props) => {
    return ( 
       

        

            <View style={{ height:80, justifyContent: "center", backgroundColor: "#000914", alignItems:"flex-end"}}>
                {/* <Text style={styles.mainTitleText}>{props.headerTitle}</Text> */}
                <Switch
                    trackColor={"#4CD964"}
                    thumbColor={"#f2f2f2"}
                    style={{ marginRight:10,transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], marginTop:moderateScale(35)  }}
                    onValueChange={props.onSwitch}
                    value={props.switchValue}
                />
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