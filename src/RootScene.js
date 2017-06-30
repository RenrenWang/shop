/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Home from './page/Home'
import Preference from './page/Preference'
import Shops from './page/Shops'
import My from './page/My'
import Classify from './page/Classify'
import ProductDetail from './page/ProductDetail'
import WelcomePage from './page/WelcomePage'

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

class setUp extends Component {
  render() {
    return (
      <View>
        <Text>RootScene</Text>
      </View>
    );
  }
}



const TabScreen = TabNavigator({
  Home: {
    screen: Home,
    
    navigationOptions: ({navigation}) => ({


    })
  
  },
  Preference: {
    screen: Preference,
    navigationOptions: ({navigation}) => ({


    }),
  },
  Shops: {
    screen: Shops,
    navigationOptions: ({navigation}) => ({

    }),
  },
  My: {
    screen: My,
    navigationOptions: ({navigation}) => ({


    }),
  },
},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',

      lazy: true,
        // initialRouteName: "Home",
        swipeEnabled: true,

        animationEnabled: false,
    tabBarOptions: {


      showIcon: true,
      indicatorStyle: { height: 0 },

      // activeBackgroundColor:"#e64275",
      activeTintColor: "#e64275",
      labelStyle: {
        fontSize: 12
      }
    }
  }


);

export default RootScene = StackNavigator({
  // WelcomePage: {
  //   screen: WelcomePage,
  // },
  TabScreen: {
    screen: TabScreen,
  },
  Classify: {
    screen: Classify,
    path: 'classify/:kindId',
  },
  ProductDetail: {
    screen: ProductDetail,
    path: 'productDetail/:kindId',
  }
}, {
    //Android页面左右切入
    headerMode: 'screen',
    // transitionConfig:()=>({
    //     screenInterpolator:CardStackStyleInterpolator.forHorizontal, 
    // }),
    navigationOptions: {

      header: null,
      gesturesEnabled: true
    },
  });


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

