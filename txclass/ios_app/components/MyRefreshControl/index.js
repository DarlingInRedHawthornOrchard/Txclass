import React, { Component } from 'react'
import { Text, View, RefreshControl } from 'react-native'

export default class MyRefreshControl extends Component {
  render() {

    const { isRefreshing, onPageRefresh } = this.props

    return (
      <RefreshControl 
        refreshing={ isRefreshing }
        onRefresh={ onPageRefresh }
        tintColor='#666'
        title='正在加载中...'
        titleColor='#666'
      />
    )
  }
}
