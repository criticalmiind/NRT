import * as React from "react";

import AboutUsPage from "./src/screens/AboutUsPage";
import AppLatest from "./src/screens/AppLatest";
import BottomTabPage from "./src/screens/BottomTab";
import CategoriesLatest from "./src/screens/CategoriesLatest";
import CategoryBtn1 from "./src/screens/CategoryBtn1";
import CategoryBtn2 from "./src/screens/CategoryBtn2";
import CategoryBtn3 from "./src/screens/CategoryBtn3";
import CategoryBtn4 from "./src/screens/CategoryBtn4";
import CategoryBtn5 from "./src/screens/CategoryBtn5";
import CategoryBtn6 from "./src/screens/CategoryBtn6";
import CategoryBtn7 from "./src/screens/CategoryBtn7";
import ContactUsPage from "./src/screens/ContactUsPage";
import Darmakan from "./src/screens/Darmakan";
import LatestAbout from "./src/screens/LatestAbout";
import LatestContact from "./src/screens/LatestContact";
import LatestHome from "./src/screens/LatestHome";
import LatestSettings from "./src/screens/LatestSettings";
import LiveRadioPage from "./src/screens/LiveRadio";
import LiveVideoPage from "./src/screens/LiveVideoPage";
import { NavigationContainer } from "@react-navigation/native";
import OurHomepage from "./src/screens/OurHomePage";
import PrivacyPage from "./src/screens/PrivacyPage";
import Programms from "./src/screens/Programms";
import SideMenu from "./src/screens/SideMenu";
import Splash from "./src/screens/Splash";
import TermsPage from "./src/screens/TermsPage";
import WebsiteMain from "./src/screens/WebsiteMain";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const DrawerNav = createStackNavigator();
const Stack = createDrawerNavigator();
function MyStack(props) {
  return (<>
    <Stack.Navigator
      drawerContent={(props) => <SideMenu {...props} />}
      headerMode={"none"}
      initialRouteName={"Splash"}
      drawerPosition="right"
    >
      <Stack.Screen name="WebsiteMain" component={WebsiteMain} />
      <Stack.Screen name="OurHomepage" component={OurHomepage} />
      <Stack.Screen name="PrivacyPage" component={PrivacyPage} />
      <Stack.Screen name="TermsPage" component={TermsPage} />
      <Stack.Screen name="AboutUsPage" component={AboutUsPage} />
      <Stack.Screen name="ContactUsPage" component={ContactUsPage} />
      <Stack.Screen name="LiveRadioPage" component={LiveRadioPage} />
      <Stack.Screen name="LiveVideoPage" component={LiveVideoPage} />
      <Stack.Screen name="BottomTabPage" component={BottomTabPage} />

      <Stack.Screen name="LatestHome" component={LatestHome} />
      <Stack.Screen name="Programms" component={Programms} />
      <Stack.Screen name="Darmakan" component={Darmakan} />
      <Stack.Screen name="AppLatest" component={AppLatest} />

      <Stack.Screen name="CategoriesLatest" component={CategoriesLatest} />

      <Stack.Screen name="CategoryBtn1" component={CategoryBtn1} />
      <Stack.Screen name="CategoryBtn2" component={CategoryBtn2} />
      <Stack.Screen name="CategoryBtn3" component={CategoryBtn3} />
      <Stack.Screen name="CategoryBtn4" component={CategoryBtn4} />
      <Stack.Screen name="CategoryBtn5" component={CategoryBtn5} />
      <Stack.Screen name="CategoryBtn6" component={CategoryBtn6} />
      <Stack.Screen name="CategoryBtn7" component={CategoryBtn7} />

      <Stack.Screen name="LatestContact" component={LatestContact} />
      <Stack.Screen name="LatestAbout" component={LatestAbout} />
      <Stack.Screen name="LatestSettings" component={LatestSettings} />

      {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen}/>
                <Stack.Screen name="AppDrawer" component={AppDrawer} /> */}
    </Stack.Navigator>
  </>);
}

export default function Drawer() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator headerMode="none">
        <DrawerNav.Screen
          name="Splash"
          component={Splash}
          options={{ title: "Splash" }}
        />
        <DrawerNav.Screen name="MyStack" component={MyStack} />
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}
