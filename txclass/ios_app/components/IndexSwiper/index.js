import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import SwiperItem from './SwiperItem'
import Swiper from 'react-native-swiper'

export default class IndexSwiper extends Component {
  render() {

    const { swiperData, navigation } = this.props,
          swiperHeight = styles.swiperSize.height

    return (
      <View
        height={swiperHeight}
      >
        {/* 轮播图组件 */}
        <Swiper
          key={swiperData.length}
          height={swiperHeight}
          autoplay={true}
          loop={true}
          activeDotColor={'#fff'}     // 轮播图下面小圆点：白色
          paginationStyle={styles.pagination}
        >
          {
            swiperData.map((item, index) => {
              return (
                <SwiperItem 
                  data={item}
                  key={index}
                  navigation={navigation}
                  styles={styles}
                />
              )
            })
          }
          <SwiperItem />
        </Swiper>
      </View>
    )
  }
}
