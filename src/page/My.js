
import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
} from 'react-native';



import ViewUtils from '../Util/ViewUtils'
import Http  from '../data/Http'
export default class My extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/tab_my.png')}
        style={[{tintColor: tintColor,width:24,height:24}]}
      />
    ),
  };
    constructor(props) {
    super(props);
       
     
    }
  
  render() {
 
    return (
     <View style={styles.container}>
             <View style={{paddingHorizontal:15,height:180,flexDirection:"row", backgroundColor:"#e64275",alignItems:"center"}}>
                     <Image style={{height:80,width:80,borderRadius:40,tintColor:'#fff'}}  source={require('../images/tab_my.png')}/>
                     <Text style={{marginLeft:15,fontSize:18,color:"#fff"}}>用户名</Text>
             </View>
             <View style={{marginTop:10,flexDirection:"column"}}>
                   {ViewUtils.listCells("关于我们")}
             </View>
             <View style={{marginTop:35,paddingVertical:15,backgroundColor:"#e64269",flexDirection:"row",justifyContent:"center"}}>
                 <Text style={{color:"#fff",}}>退出登录</Text>
             </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
 
   container: {
        flex: 1,
        flexDirection: 'column'
    },
});