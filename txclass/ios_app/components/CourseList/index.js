import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import CourseItem from './CourseItem'

export default class CourseList extends Component {
  render() {

    const { courseData, navigation } = this.props

    return (
      <View style={ styles.courseBoard }>
        {
          courseData.map((item, index) => {
            return (
              <CourseItem 
                data={item}
                styles={styles}
                index={index}
                key={index}
                navigation={navigation}
              />
            )
          })
        }
      </View>
    )
  }
}
