import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class MainTitle extends Component {
  render() {

    const { title } = this.props

    return (
      <View style={styles.mainTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}
