
import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Platform,
 
} from 'react-native';
import _ from 'lodash';

// const {width, height} = Dimensions.get('window');
export default class ViewUtiles {
    static subHeaderImg(imgUrl,text) {
        return (
            <View style={[styles.headTitle, { marginTop: 0 }]}>
                <Image source={imgUrl} style={styles.headTitleIcon} />
                <Text style={styles.headeTitleTxt}>{text}</Text>
            </View>
        )
    }

   static subHeaderText(title,subTitle) {
        return(
            
            <View style={styles.headTitle}>
                <Text style={styles.headTitleH2}>{title}</Text>
                <Text style={styles.headeTitleTxt}>{subTitle}</Text>
            </View>
        )
   }

   static listCells(text){
       return(
           <View style={{paddingHorizontal:10,paddingVertical:15,backgroundColor:"#fff",flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontSize:16,color:"#666"}}>{text}</Text>
                  <Image style={{height:22,width:22,tintColor:"#666"}} source={require('../images/leftIcon.png')}  />
           </View>
       )
   }
  
}

const styles=StyleSheet.create({
    headTitle: {
    marginTop: 8,
    paddingHorizontal: 10,
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eeeeee',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headTitleIcon: {
    tintColor: "#e64275",
    height: 20,
    width: 20
  },

  headTitleH2: {
    fontWeight: 'bold',
    fontSize: 14

  },
  headeTitleTxt: {
    marginLeft: 8,
    fontSize: 12,
  },
})