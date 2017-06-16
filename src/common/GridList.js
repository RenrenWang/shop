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
 
  Platform,

} from 'react-native';
import _ from 'lodash';
const {width, height} = Dimensions.get('window');
export default class GridList extends React.Component {
  constructor(props) {
    super(props)

  }
   _onPress(id,name){
     return this.props.navigation.navigate(this.props.routerName, {id,name});
   }
  renderGridItems(imgList) {
    var gridItems = [];
    for (let i = 0; i < imgList.length; i++) {
      gridItems.push(
        <TouchableOpacity style={styles.gridItem} key={i} onPress={_.throttle(this._onPress.bind(this,imgList[i]['id'],imgList[i]['name']),1000,{

  'trailing': false
})}>
          <Image resizeMode="contain" source={imgList[i]['imgUrl']} key={i} style={styles.gridItemImg} />
          {
           (imgList[i]['name']&&this.props.showText)? <Text style={styles.gridItemText}>{imgList[i]['name']}</Text> : null
          }
        </TouchableOpacity>)
    }
    return gridItems;
  }
  render() {
    return (
      <View style={styles.grid}>
               {this.renderGridItems(this.props.gridList)}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  grid: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gridItem: {
    width: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  gridItemImg: {

    width: width / 6,
    height: width / 6,

  },
  gridItemText: {
    paddingBottom: 4,
    fontSize: 12,
    color: '#6b6b6b',
    backgroundColor: 'transparent',

  }
})