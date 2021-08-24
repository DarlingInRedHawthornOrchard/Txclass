import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CourseItem from './CourseItem'
import styles from './styles'

export default class RecomCourseList extends Component {
  render() {

    const { recomCourseData, navigation } = this.props 

    return (
      <View
        style={styles.recomCourseBoard}
      >
        {
          recomCourseData.map((item, index) => {
            return (
              <CourseItem 
                data={item}
                key={index}
                index={ index }
                navigation={navigation}
              />
            )
          })
        }
      </View>
    )
  }
}
