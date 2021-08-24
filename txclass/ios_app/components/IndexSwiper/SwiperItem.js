import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import AniImage from '../AniImage'
import { directToPage } from '../../utils/extension'

export default class SwiperItem extends Component {
  render() {

    const { data, styles, navigation } = this.props
    


    return (
      // 点击跳转
      <TouchableWithoutFeedback
        style={styles.swiperSize}
        onPress={() => directToPage(navigation, 'Detail', { courseId: data.course_id })}
      >
        <AniImage 
          styles={styles.swiperSize}
          url={ data.img }
        />
      </TouchableWithoutFeedback>
    )
  }
}
