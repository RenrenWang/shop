
import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import  {TabNavigator,TabBarBottom} from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Swiper  from '../common/Swiper'
import NavBar from '../common/NavBar'
import ViewUtils from '../Util/ViewUtils'
import MyListView from '../common/MyListView'
import ListItemShop from '../common/ListItemShop'

import Http  from '../data/Http'
export default class Shops extends React.Component {
  static navigationOptions = {
    tabBarLabel: '商铺',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/tab_shops.png')}
        style={[{tintColor: tintColor,width:24,height:24}]}
      />
    ),
  };
  constructor(props){
    super(props)

  }
_renderRow(item){
  return(
    <ListItemShop itemHeight={ITEMHEIGHT} item={item} />
  )
}
  renderSectionContent(){
    return(
     <MyListView  
          removeClippedSubviews={false}
          renderHeader={this._renderHeader} 
          url={Http.HOMEGOODS}
         
        />
    )
  }
  render() {
    return (
      <View style={styles.container}>
            <NavBar
          navigation={this.props.navigation}
          navBarLeftAction={() => this.props.navigation.goBack.bind(this)}
          navBarRight={() => <Image
            style={{ tintColor: "#fff", width: 28, height: 28 }}
            source={require('../images/home.png')}
          />} 
         />
          <ScrollableTabView
							   renderTabBar={() => <ScrollableTabBar/>}

                 tabBarBackgroundColor="#e64275"
								 tabBarActiveTextColor="white"
								 tabBarInactiveTextColor="mintcream"
								 tabBarUnderlineStyle={{backgroundColor:'white',height:2}}
								 tabBarTextStyle={{fontSize:16}}
								>
            
              {Http.kindList.map((item,index)=>{
              
                  return  <SectionContent key={index} tabLabel={item.ptyName} type={item.ptyCd}/>
              })}
			      
			     
           </ScrollableTabView>
     </View>
    );
  }
}

class  SectionContent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
         <MyListView  
           removeClippedSubviews={false}
           //renderHeader={this._renderHeader} 
           url={Http.shopsUrl+'&prdType='+this.props.type}
           itemKind={2}
        />
      )
  }
 
}
const  styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

})