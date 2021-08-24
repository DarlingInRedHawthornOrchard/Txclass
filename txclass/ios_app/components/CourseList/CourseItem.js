import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { directToPage } from '../../utils/extension'
import AniImage from '../AniImage'

export default class CourseItem extends Component {
  render() {

    const { data, styles, navigation, index } = this.props

    return (
      <TouchableWithoutFeedback
        onPress={() => directToPage(navigation, 'Detail', { courseId: data.id })}
      >
        {/* 当这个图片是一个最上面的元素时，加上marginTop为0这个样式 */}
        <View style={[ styles.courseItem ], index === 0 && styles.courseItemFirst}>  
          <View style={styles.imaView}>
            <AniImage 
              styles={ styles.imgView }
              source={ data.img }
            />
          </View>
          <View style={styles.infoView}>
            {/* 图片下的文字显示2排占位 */}
            <Text
              numberOfLines={ 2 }
              style={styles.courseName}
            >
              {data.couse_name}
            </Text>
            <Text
              style={styles.price}
            >
              { data.price === 0 ? '免费' : `￥${data.price}.00` }
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
