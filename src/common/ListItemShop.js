import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    Dimensions
} from 'react-native'
const {width,height}=Dimensions.get('window');
import Http  from '../data/Http'
export default class ListItemShop extends React.Component {
    constructor(props) {
        super(props)

    }
  //   height: this.props.itemHeight - 10
    render() {
        let item=this.props.item;
        return (
        
               <View   style={{ flexDirection: 'column', marginBottom:6,paddingHorizontal: 5,backgroundColor: '#fff',height:(width/3-5)+25+65}}
>
                    <View style={{alignItems:'center', flexDirection: 'row',justifyContent:'space-between',height:65}}>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                              <Image  style={{height:45,width:45}} source={{uri:Http.BASEURL+item.vndImg}}/>
                               <View style={{flexDirection: 'column',justifyContent:'space-between',marginLeft:8}}>
                                    <Text style={{fontSize:12}}>{item.vndName}</Text>
                                    <Text style={{fontSize:12}}>销量：100</Text>
                               </View>
                        </View>
                         <TouchableHighlight
                            underlayColor="#f00"
                            activeOpacity={0.7}
                            style={{borderWidth:1,borderColor:'#e64275',paddingHorizontal:15,paddingVertical:3,borderRadius:15}}
                        > 
                        <Text style={{color:"#e64275"}}>进店</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection: 'row',height:(width/3-5)+25}}>
                    {
                        item.foodData.map((product,index)=>{
                          return  <View style={{position:'relative',height:width/3-5,marginRight:3}} key={index}>
                               <Image  resizeMode="stretch" style={{height:width/3-5,width:width/3-5}} source={{uri:Http.BASEURL+product.prdUri}}/>
                               <View style={{position:'absolute',left:0,bottom:0,width:width/3-5,backgroundColor:"rgba(255,255,255,0.5)"}}>
                                    <Text style={{textAlign:'right',marginRight:5}}>￥{product.prdZkprice}</Text>
                               </View>
                            </View>
                        })
                    }
                      
                         
                      
                    </View>
               </View>
           
        )
    }
}