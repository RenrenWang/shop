import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width,height } = Dimensions.get('window')

const styles = {
  wrapper: {
     width,
    height:180,
  },

  slide: {
    flex: 1,
     width,
     height,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
image:{
    width,
   height:180,
  }
}

export default class  extends Component {
   constructor(props) {
    super(props);
    this.state ={swiperShow:false };
  }
componentDidMount(){
 
}
renderImgs(page){
  let imgs=[];
  for(let i=0;i<page;i++){
     imgs.push(
     <View style={styles.slide} key={i}>
            <Image resizeMode='stretch'  style={styles.image}  source={{uri:'https://img.alicdn.com/tfs/TB1AyfIRpXXXXcaaFXXXXXXXXXX-520-280.jpg_q90_.webp'}} />
     </View>);
  }
   return imgs;
}
renderSwiper(){
  
  if(this.state.swiperShow){
    return (<Swiper
         height={180} 
         horizontal={true}
         activeDotColor="#e64275"
         dotColor="rgba(255,255,255,0.3)"
         paginationStyle={{
            bottom: 10, left: 0, right: 10
          }} loop>
         
         {this.renderItem(5)}
         
         
        </Swiper>)
  }else{
    return   <Text>ccc</Text>
  }
}
  render () {
    
    return (
     
       
        <View style={styles.wrapper}>

        {this.renderSwiper()}
                 
          
        </View>
       
    
    )
  }
}
