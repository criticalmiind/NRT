// import * as React from 'react';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./OurHomePage";
import About from "./AboutUsPage";
import Contact from "./ContactUsPage";
import Privacy from "./PrivacyPage";
import Terms from "./TermsPage";
import LiveRadio from "./LiveRadio";
import LiveVideoPage from "./LiveVideoPage";

import { Icon } from 'native-base';

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
    render() {
        return (
            // <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'سەرەکی') {
                        iconName = focused ? 'home' : 'home';
                    }
                    else if (route.name === 'دەربارە') {
                        iconName = focused ? 'ios-contacts' : 'ios-contacts';
                    }
                    else if (route.name === 'پەیوەندی') {
                        iconName = focused ? 'ios-call' : 'ios-call';
                    }
                    else if (route.name === "ڕادیۆی نالیا") {
                        iconName = focused ? 'ios-radio' : 'ios-radio';
                    }
                    else if (route.name === "ڕاستەوخۆ") {
                        iconName = focused ? 'md-videocam' : 'md-videocam';
                    }
                    // else if (route.name === 'Privacy') {
                    //     iconName = focused ? 'camera' : 'camera';
                    // }
                    // else if (route.name === 'Terms') {
                    //     iconName = focused ? 'camera' : 'camera';
                    // }
                    // else if (route.name === 'Home') {
                    //     iconName = focused ? 'navigate' : 'navigate';
                    // }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })} tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#182e46',
                activeBackgroundColor: "#182e46",


            }}>
                <Tab.Screen name="سەرەکی" component={Home} initialParams={this.props}/>
                <Tab.Screen name="ڕاستەوخۆ" component={LiveVideoPage} initialParams={this.props}/>
                <Tab.Screen name="دەربارە" component={About} initialParams={this.props}/>
                <Tab.Screen name="پەیوەندی" component={Contact} initialParams={this.props}/>
                <Tab.Screen name="ڕادیۆی نالیا" component={LiveRadio} initialParams={this.props}/>
                
                {/* <Tab.Screen name="Privacy" component={Privacy}  initialParams={this.props} />
                <Tab.Screen name="Terms" component={Terms} initialParams={this.props}/> */}
                

            </Tab.Navigator>
            // </NavigationContainer>
        );
    }
}