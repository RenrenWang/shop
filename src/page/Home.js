
import React, { Component, PureComponent } from 'react';
import {
  AppRegistry,
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
  Animated,
  ScrollView
} from 'react-native';
import _ from 'lodash';
import Swiper from 'react-native-swiper';
const {width, height} = Dimensions.get('window');

//const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import { TabNavigator, TabBarBottom } from 'react-navigation';
import NavBar from '../common/NavBar'

import GridList from '../common/GridList'
import ViewUtils from '../Util/ViewUtils'
import MyListView from '../common/MyListView'
import Http from '../data/Http'

let kindList = [
  { id: 1, imgUrl: require('../images/kind_1.png'), name: "女装" },
  { id: 2, imgUrl: require('../images/kind_2.png'), name: "男装" },
  { id: 3, imgUrl: require('../images/kind_3.png'), name: "美妆" },
  { id: 4, imgUrl: require('../images/kind_4.png'), name: "配饰" },
  { id: 5, imgUrl: require('../images/kind_5.png'), name: "鞋品" },
  { id: 6, imgUrl: require('../images/kind_6.png'), name: "箱包" },
  { id: 7, imgUrl: require('../images/kind_7.png'), name: "居家" },
  { id: 8, imgUrl: require('../images/kind_8.png'), name: "美食" },
  { id: 9, imgUrl: require('../images/kind_9.png'), name: "数码" },
  { id: 10, imgUrl: require('../images/kind_10.png'), name: "其他" },

];
let storeList = [
  { id: 1, imgUrl: require('../images/shop_1.png') },
  { id: 2, imgUrl: require('../images/shop_2.png') },
  { id: 3, imgUrl: require('../images/shop_3.png') },
  { id: 4, imgUrl: require('../images/shop_4.png') },
  { id: 5, imgUrl: require('../images/shop_5.png') },


];




export default class Home extends React.PureComponent {

  static navigationOptions = {
    tabBarLabel: '主页',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home.png')}
        style={[{ tintColor: tintColor, width: 24, height: 24 }]}
      />
    ),


  };
  constructor(props) {
    super(props);

    this.state = {
      swiperShow: false
    }
    this._renderHeader = this._renderHeader.bind(this);

  }



  renderImgs(page) {
    let imgs = [];
    for (let i = 0; i < page; i++) {
      imgs.push(
        <View style={{
          width,
          height: 200,
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }} key={i}>

          <Image resizeMode="stretch" style={{ width }} source={require('../images/banner.jpg')} />

        </View>);
    }
    return imgs;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      })
    }, 0)
  }
  renderSwiper() {
    if (this.state.swiperShow) {
      return (

        <Swiper
          height={200}
          loop={true}
          swipeEnabled={true}
      
          removeClippedSubviews={false}
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

            <Image resizeMode="stretch" style={{ width,height:200 }} source={require('../images/banner.jpg')} />

          </View>
          <View style={{
            width,
            height: 200,
            justifyContent: 'center',
            backgroundColor: 'transparent'
          }} key="banner_1">

            <Image resizeMode="stretch" style={{ width,height:200 }}  source={require('../images/banner.jpg')} />

          </View>

        </Swiper>

      )
    } else {
      return <View style={{ width, height: 200, backgroundColor: "#fff" }}></View>
    }
  }
  _renderHeader() {
    return (
      <View style={styles.container}>
        {this.renderSwiper()}
        {ViewUtils.subHeaderImg(require('../images/headeTitleIcon.png'), "今日10点更新特价商品")}

        <GridList key="kind" gridList={kindList} showText={true} routerName={"Classify"} navigation={this.props.navigation} />
        {ViewUtils.subHeaderText("潮店名品", "好货低价购")}
        <GridList key="store" gridList={storeList} showText={false} routerName={"ShopD"} navigation={this.props.navigation} />
        {ViewUtils.subHeaderText("今日专享", "疯狂抢购")}
      </View>
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

        {/*{this.state.list.length > 30 ? <TouchableOpacity
          onPress={() => {
            //this._flatList.scrollToEnd();
            console.log(this._flatList);
            this._flatList.scrollToIndex({ viewPosition: 0, index: 0 });
            //  console.log(this._flatList.getNode().recordInteraction());
            //this._flatList.scrollToOffset({animated: true, offset: 2000});
          }}

          style={{ position: 'absolute', right: 10, bottom: 25, zIndex: 9999 }}
        >
          <Image style={{ tintColor: '#bbb', height: 32, width: 42 }} source={require('../images/toTop.png')} />
        </TouchableOpacity> : null}*/}

        <MyListView
         swipeEnabled={true}
  
         animationEnabled={true}
          removeClippedSubviews={false}
          renderHeader={this._renderHeader.bind(this)}
          url={Http.HOMEGOODS}
          navigation={this.props.navigation}
        />
        {/*
        <FlatList

          data={this.state.list}
          ref={(flatList) => this._flatList = flatList}
          ListHeaderComponent={this._ListHeaderComponent}
          ItemSeparatorComponent={this._ItemSeparatorComponent.bind(this)}
          initialNumToRender={8}

      
          numColumns={1}
          renderItem={({item, index}) => <ListItem itemHeight={ITEM_HEIGHT} index={index} item={item} />}
          getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: (ITEM_HEIGHT) * index, index })}
          ListFooterComponent={this._ListFooterComponent.bind(this)}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.3}
          refreshing={this.state._refreshing}
          keyExtractor={(item, index) => index}//item.prdIds
          removeClippedSubviews={false}
          legacyImplementation={false}
          extraData={this.state}
          onViewableItemsChanged={()=>_.debounce(this._onViewableItemsChanged.bind(this),300,{
            'leading': true,
            'trailing': false
          })}
          viewabilityConfig={{ minimumViewTime: 300, viewAreaCoveragePercentThreshold:0.5, waitForInteraction: true }}
        />*/}

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#eeeeee",
  },


});
