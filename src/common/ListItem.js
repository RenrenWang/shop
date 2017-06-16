import React, {PureComponent } from 'react';
import {

  StyleSheet,
  Text,
  View,

  Image,
  Dimensions,


  TouchableOpacity,
  TouchableHighlight,
   Platform,

} from 'react-native';
import _ from 'lodash';
const {width,height} = Dimensions.get('window');

export default class ListIttem extends React.PureComponent{
   constructor(props) {
      super(props);
    
   }

  _onPress(id,name){ console.log(JSON.stringify(this.props.navigation));
     return this.props.navigation.navigate("ProductDetail", {id});
   }
  render(){
    return (
     <TouchableOpacity   
    
    onPress={_.throttle(this._onPress.bind(this,this.props.item.prdCd),1000,{

    'trailing': false
  })}
    style={{flex:1,flexDirection:'row',height:this.props.itemHeight-10,paddingHorizontal:10,paddingVertical:5,backgroundColor:'#fff'}}
   >
      <View  style={{flex:1,flexDirection:'row'}}>
        {/*resizeMode='stretch' */}
          <Image  source={{uri:'http://118.178.224.224:6080/appsrv'+this.props.item.prdUri}} style={{width:this.props.itemHeight-10,height:this.props.itemHeigh-10}}/>
          <View style={{flex:1,marginLeft:10,flexDirection:'column',justifyContent:'space-between'}}>
               <Text style={{color:'#222'}}>{this.props.index}{this.props.item.prdName}</Text>
               <View style={{flex:1,marginTop:6,flexDirection:'row'}}>
                     <Text style={{color:'#999'}}>销量：{this.props.item.prdNums}</Text>
                     <Text style={{color:'#999',marginLeft:15,textDecorationLine:'line-through'}}>原价：{this.props.item.prdOldprice}</Text>
               </View>
               <Text style={{color:'red',fontSize:20}}><Text style={{color:'red',fontSize:14}}>￥</Text>{this.props.item.prdZkprice}</Text>
          </View>
      </View>
     
      </TouchableOpacity>
    )
  }
}