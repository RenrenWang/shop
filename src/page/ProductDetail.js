import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

import NavBar from '../common/NavBar'
import Http  from '../data/Http'
import DataRepository from '../Util/DataRepository'

const {width, height} = Dimensions.get('window');

export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
      this.state={
          data:[]
      }
    }

  componentDidMount(){
       this.getData();
  } 
    getData(){
        DataRepository
			.fetchNetRepository(Http.PRODUCTDETAIL+this.props.navigation.state.params.id)
			.then(result=>{

			this.setState({
					 data:result.data[0]
					})
			})
			.catch(error=>{
				// this.setState({
				// 	result:JSON.stringify(result)
				// })
				console.log(error);
			})
    }
    render() {
       
        return (
            <View style={styles.container}>
              <View style={{position:'absolute',width,zIndex:10,padding:8,flexDirection:'row',justifyContent:'space-between'}}>
                  <TouchableOpacity 
                     onPress={()=>this.props.navigation.goBack()}
                     style={{height:36,width:36,backgroundColor:"rgba(0,0,0,.5)",borderRadius:18,alignItems:'center',justifyContent:'center'}}
                     >
                        <Image source={require('../images/arrow.png')} style={{height:22,width:22,tintColor:"#fff"}}/>
                  </TouchableOpacity>
                   {/*<TouchableOpacity 
                   onPress={()=>this.props.navBarLeftAction()}
                   style={{height:36,width:36,backgroundColor:"rgba(0,0,0,.5)",borderRadius:18,alignItems:'center',justifyContent:'center'}}
                    >
                        <Image source={require('../images/more.png')} style={{height:22,width:22,tintColor:"#fff"}}/>
                  </TouchableOpacity>*/}
              </View>
             <ScrollView> 
                <Swiper
                    height={350}
                    loop={true}
                    autoplay={true}
                    activeDotColor="#e64275"
                    dotColor="rgba(255,255,255,0.3)"
                    paginationStyle={{
                        bottom: 10, left: 0, right: 10
                    }} loop>

                    <View style={{
                        width,
                        height: 350,
                        justifyContent: 'center',
                        backgroundColor: 'transparent'
                    }} key="banner_1">

                        <Image resizeMode="stretch" style={{ width,height:350 }} source={{uri:Http.BASEURL+this.state.data.prdNuri}} />

                    </View>
                    {/*<View style={{
                        width,
                        height: 350,
                        justifyContent: 'center',
                        backgroundColor: 'transparent'
                    }} key="banner_2">

                        <Image resizeMode="stretch" style={{ width,height:350 }} source={{uri:'https://img.alicdn.com/bao/uploaded/i3/2228361831/TB2gsgacdhvOuFjSZFBXXcZgFXa_!!2228361831.jpg_430x430q90.jpg'}} />


                    </View>*/}

                </Swiper>
                <View style={{flexDirection:"column",backgroundColor:'#fff',padding:5}}>
                    <View style={{flexDirection:'row'}}>
                         <Text style={{flex:1,fontSize:16,paddingVertical:5}}>{this.state.data.prdName}</Text>
                         {/*<Image resizeMode="stretch" style={{marginRight:5,height:28,width:28}} source={require('../images/share.png')} />*/}
                    </View>
                    <Text style={{color:"crimson",fontSize:18}}>￥{this.state.data.prdZkprice}</Text>
                    <Text style={{color:"gainsboro",fontSize:14,textDecorationLine:'line-through'}}>原价￥{this.state.data.prdOldprice}</Text>

                </View>
                <View style={{marginTop:8,flexDirection:'column',flex:1,backgroundColor:'#fff',}}>
                    <Text style={{textAlign:'center',fontSize:18,marginTop:5,}}>商品详情</Text>
                    <View style={{flex:1}}>
                        <Text>{this.state.data.prdText}</Text>
                        <Image resizeMode="stretch"  style={{width,height}} source={{uri:Http.BASEURL+this.state.data.prdSuri}}/>
                    </View>
                </View>
                <Text>
                 
                </Text>
             </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

});