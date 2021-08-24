import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

export default class TabItem extends Component {
  render() {

    const { data, 
            onTabClick, 
            curIndex, 
            index, 
            styles } = this.props

    return (
      <View style={ [styles.TabItem, index === curIndex ? styles.tabItemCurrent : null] }>
        <TouchableWithoutFeedback
          onPress={ () => onTabClick(data.field, index) }>
          <Text
            style={ [ styles.tabItemText, index === curIndex ? styles.tabItemTextCurrent : null ] }
          >{ data.field_name }</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
