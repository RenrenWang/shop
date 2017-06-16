
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import NavBar from '../common/NavBar'
import  {TabNavigator,TabBarBottom} from 'react-navigation';
import ViewUtils from '../Util/ViewUtils'
import MyListView from '../common/MyListView'
import Http  from '../data/Http'

const {width,height}=Dimensions.get('window');

export default class Preference extends React.Component {
  static navigationOptions = {
    tabBarLabel: '优选',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/tab_Preference.png')}
        style={[{tintColor: tintColor,width:24,height:24}]}
      />
    ),
  };
  constructor(props){
    super(props)
    this._renderHeader=this._renderHeader.bind(this);
  }
_renderHeader(){
   return(
        <Swiper
          height={200}
          loop={true}
          autoplay={true}
          activeDotColor="#e64275"
          dotColor="rgba(255,255,255,0.3)"
          paginationStyle={{
            bottom: 10, left: 0, right: 10
          }} loop>

          <View style={{
          width,
          height: 200,
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }} key="banner_1">

       <Image resizeMode="stretch" style={{ width }} source={require('../images/banner.jpg')} />

        </View>
          <View style={{
          width,
          height: 200,
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }} key="banner_2">

          <Image resizeMode="stretch" style={{ width }} source={require('../images/banner.jpg')} />

        </View>
         
        </Swiper>
   )
}
 render(){
   return(
     <View style={styles.container}>
        <NavBar
          navigation={this.props.navigation}
          navBarLeftAction={() => this.props.navigation.goBack.bind(this)}
          navBarRight={() => <Image
           style={{ tintColor: "#fff", width: 28, height: 28 }}
           source={require('../images/home.png')}
          />}

         />
         
        <MyListView  
          removeClippedSubviews={false}
          renderHeader={this._renderHeader} 
          url={Http.HOMEGOODS}
          navigation={this.props.navigation}
        />
     </View>
   )
 }

}
const styles=StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column'
    },

})