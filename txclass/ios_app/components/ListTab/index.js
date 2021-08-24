import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './styles'
import TabItem from './TabItem'

export default class ListTab extends Component {
  render() {

    const { fieldData, onTabClick, curIndex } = this.props

    return (
      <View style={ styles.tabContainer }>
        <ScrollView
          showsHorizontalScrollIndicator={ false }  // 横向滚动条不显示
          horizontal={ true }   // 水平布局模式，多个小tab
        >
          {
            fieldData.map((item, index) => {
              return (
                <TabItem 
                  data={ item }
                  index={ index }
                  key={ index }
                  curIndex={ curIndex }
                  onTabClick={ onTabClick }
                  styles={ styles }
                />
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}
