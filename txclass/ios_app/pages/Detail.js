import React, { Component } from 'react'
import {WebView} from 'react-native-webview'

export default class DetailPage extends Component {
  render() {

    const { route } = this.props
    const { courseId } = route.params

    return (
      <WebView 
        source={{ url: 'https://ke.qq.com/course/' + courseId }}
        startInLoadingState={ true }    // 进入场景会又loading图标
      />
    )
  }
}
