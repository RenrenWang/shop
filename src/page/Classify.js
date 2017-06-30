import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import NavBar from '../common/NavBar'

import MyListView from '../common/MyListView'
import Http  from '../data/Http'
 const filters = [
            { id: 1, name: "默认" ,subPrdType:"A"},
            { id: 2, name: "优惠" ,subPrdType:"B"},
            { id: 3, name: "价格" ,subPrdType:"C"},
            { id: 4, name: "人气",subPrdType:"D" }

        ];
export default class Classify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemActive: 0,
            type:"A"
        }
    }
    _navBarRight() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image
                        style={{ tintColor: "#fff", width: 28, height: 28 }}
                        source={require('../images/select.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ tintColor: "#fff", width: 28, height: 28 }}
                        source={require('../images/home.png')} />
                </TouchableOpacity>
            </View>
        )
    }
    _filterItemActive(index) {
            
        this.setState({
            itemActive: index,
            type:filters[index]['subPrdType']
        })
        console.log(filters[index]['subPrdType']);
    }

    renderFilters(_filters) {

        let ViewList = [];
        _filters.map((item, index) => {
            ViewList.push(
                <View style={[styles.filterItem]} key={item.id}>

                    <Text onPress={() => this._filterItemActive(index)} style={[styles.filterItemFont, index == this.state.itemActive ? styles.filterItemFontActive : null]}>{item.name}</Text>
                </View>);
        })

        return (
            <View style={styles.filters}>
                {ViewList}
            </View>
        )
    }
    render() {
        let {goBack,state}=this.props.navigation;
       
        return (
            <View style={styles.container}>
    <NavBar
          navigation={this.props.navigation}
          navBarLeftAction={() => goBack()}
          navBarRight={() => <Image
            style={{ tintColor: "#fff", width: 28, height: 28 }}
            source={require('../images/home.png')}
          />}

        />
                {/*<NavBar
                    title={state.params.name}
                    navBarLeftAction={() =>goBack()}
                    navBarRight={() => this._navBarRight()}


                />*/}
                {this.renderFilters(filters)}
                <MyListView
                    removeClippedSubviews={false}
                   // renderHeader={this._renderHeader.bind(this)}
                  url={Http.KINDURL+'&prdType=FZ&subPrdType='+this.state.type}
                  navigation={this.props.navigation}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingVertical: 8,
        borderWidth:2,
        borderColor:"#eeeff3"
    },
    filterItem: {
        flex: 1,

        marginHorizontal: 8,

    },

    filterItemFont: {
        color: "#666",
        backgroundColor: "#eeeff3",
        paddingVertical: 6,
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#eeeff3",

    },
    filterItemFontActive: {
        borderColor: "#e64275",
        backgroundColor: "#fff",
        color: '#e64275'
    }

})