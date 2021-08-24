import React, { Component } from 'react'
import { Image, Animated } from 'react-native'

export default class AniImage extends Component {

  state = {
    animatedValue: new Animated.Value(0)
  }

  render() {

    const { styles, url } = this.props
    const imgAnimation = this.state.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1]
    })

    return (
      // 淡入淡出动画效果
      <Animated.Image 
        onLoadEnd={() => {      // 图片加载结束后要做的
          Animated.timing(this.animatedValue, {
            toValue: 100,   // 最终期望的value
            duration: 500,  // 500ms完成动画
          }).start()
        }} 
        source={{ url }}
        style={[ styles, {opacity: imgAnimation} ]}    
      />
    )
  }
}
