import { NavigationRouteContext } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, ScrollView, RefreshControl } from 'react-native'
import IndexModel from '../models/Index'
import IndexSwiper from '../components/IndexSwiper'
import styles from '../components/logo/styles'
import MainTitle from '../components/MainTitle'
import RecomCourseList from '../components/RecomCourseList'
import CourseList from '../components/CourseList'
import { filterFieldData } from '../utils/extension'

const indexModel = new IndexModel()

export default class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      swiperData: [],
      fieldData: [{field_name: '推荐课程', field: ''}].concat(data.fields),
      courseData: [],
      recomCourseData: [],
      isRefreshing: true,   // 进入页面就要刷新
    }
  }

  getCourseDatas = () => {
    indexModel.getCourseDatas().then(res => {
      const { result } = res
      setTimeout(() => {
        this.setState({
          swiperData: result.swipers,
          fieldData: result.fields,
          courseData: result.courses,
          recomCourseData: result.recomCourses,
          isRefreshing: false
        }, () => {
          if(this.state.isRefreshing) {
            this.setState({
              isRefreshing: false   // 如果正在下拉刷新的话，停止刷新
            })
          }
        })
      }, 1000)
    })
  }

  renderMainTitle = (data, title) => {
    if(data) {
      return (
        data && <MainTitle title={ data && data.field_name } />
      )
    }
  }

  onPageRefresh = () => {
    if(this.state.isRefreshing) {
      return  //表示正在刷新，不用下拉了
    }else {
      this.setState({
        isRefreshing: true
      })
    }
    this.getCourseDatas()   // 重新请求数据
  }

  renderRefreshControl(options) {
    const { isRefreshing, onPageRefresh, tintColor, title, titleColor } = options

    return (
      <RefreshControl 
        refreshing={ isRefreshing }   // 刷新时显示指示器
        onRefresh={ onPageRefresh }
        tintColor={ tintColor }              // 文字颜色
        title={ title }
        titleColor={ titleColor }
      />
    )
  }

  render() {

    const { navigation } = this.props,
          { swiperData, fieldData, courseData, recomCourseData, isRefreshing } = this.state

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}    // 垂直滚动条
        refreshControl={    // 下拉刷新
          this.renderRefreshControl({
            isRefreshing, 
            onPageRefresh: this.onPageRefresh, 
            tintColor: '#666', 
            title: '正在加载中...', 
            titleColor: '#666'
          })
        }
      >
        <IndexSwiper 
          swiperData={swiperData}
          navigation={navigation}   // 最好习惯把navigation传入子组件，方便跳转时用
        />
        {
          this.renderMainTitle(fieldData[0])
        }
        <RecomCourseList 
          recomCourseData={ recomCourseData }
          navigation={ navigation }
        />
        { this.renderMainTitle(fieldData[1]) }
        <CourseList 
          courseData={ filterFieldData(courseData, '0', true) }
          navigation={navigation}
        />
        { this.renderMainTitle(fieldData[2]) }
        <CourseList 
          courseData={ filterFieldData(courseData, '1', true) }
          navigation={navigation}
        />
        { this.renderMainTitle(fieldData[3]) }
        <CourseList 
          courseData={ filterFieldData(courseData, '2', true) }
          navigation={navigation}
        />
        { this.renderMainTitle(fieldData[4]) }
        <CourseList 
          courseData={ filterFieldData(courseData, '3', true) }
          navigation={navigation}
        />
      </ScrollView>
    )
  }
}
