import React, { Component } from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'
import styles from './styles'

export default class Content extends Component {
  render() {
    const { contentText, onViewClick } = this.props

    return (
      // TouchableNativeFeedback表示可点击
      <TouchableNativeFeedback onPress={onViewClick}>
        <View style={styles.container}>
          <Text style={styles.text}>{contentText}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
