import React,{Component} from 'react';
import{
	View,
	StyleSheet,
	Text,
	Image,
	Dimensions

}from 'react-native';
const {width, height} = Dimensions.get('window');
import { NavigationActions } from 'react-navigation'
export  default  class WelcomePage extends Component{
	constructor(props) {
	  super(props);
	
	
	 
	}
	componentDidMount(){
	 const {navigate,goBack} = this.props.navigation;
     this.timer=setTimeout(()=>{
          navigate('Home');
     },1000)
	}
	componentWillUnmount(){
	   this.timer&&clearTimeout(this.timer)
	}
	render(){
		return (
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Image   style={{width:width*0.5,height:width*0.5}} source={require('../images/logo.png')}/>
             </View>

			)
	}
}