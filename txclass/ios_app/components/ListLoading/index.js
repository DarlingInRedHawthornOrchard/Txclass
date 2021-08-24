import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'

export default class PageLoading extends Component {
  render() {
    return (
      <View style={ styles.pageLoading }>
        <Image 
          style={ styles.loadingPic }
          source={ require('../../assets/img/loading.gif') }
        />
      </View>
    )
  }
}
