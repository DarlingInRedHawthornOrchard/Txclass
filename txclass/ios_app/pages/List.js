import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ListModel from '../models/List'
import commonStyles from '../../styles/commonStyles'
import ListTab from '../components/ListTab'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl'
import PageLoading from '../components/ListLoading'



const listModel = new ListModel()

export default class ListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fieldData: [],
      courseData: {
        // 'all': [],

      },
      curIndex: 0,
      curField: 'all',
      isRefreshing: false,
      pageLoadingShow: false,
    }
  }

  getCourseFields = () => {
    listModel.getCourseFields().then(res => {
      const { result } = res
      this.setState({
        fieldData: [{field_name: '全部课程', field: 'all'}, ...result]
      })
    })
  }

  getCourses(field) {
    this.setState({
      pageLoadingShow: true
    })
    listModel.getCourses(field).then(res => {
      const { result } = res
      // 先直接赋值，然后再setState
      this.state.courseData[field] = result
      setTimeout(() => {
        this.setState({
          courseData: this.state.courseData,
          isRefreshing: false,
          pageLoadingShow: false    // 请求到了数据之后，就关掉loading图标
        })
      }, 1000)
    })
  }

  async componentDidMount() {
    await this.getCourseFields()
    await this.getCourses(this.state.curField)
  }

  onTabClick = async (field, index) => {
    this.setState({
      curIndex: index,
      curField: field,
      pageLoadingShow: true   // 在切换tab时把loading图标显示出来，请求到了数据之后就关掉
    }, () => {
      const { courseData, curField } = this.state
      if(!courseData[curField]) {       // 没有这个key的话就调这个key对应的接口，设置缓存池
        await this.getCourses(curField) 
      }
    })
  }

  onPageRefresh = () => {
    if(this.state.isRefreshing) {
      return  //表示正在刷新，不用下拉了
    }else {
      this.setState({
        isRefreshing: true
      }, () => {
        this.getCourses(this.state.curField)   // 重新请求数据
      })
    }
    // 请求完了数据之后又置为false
    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 1000)
  }

  

  render() {

    const { fieldData, curIndex, courseData, curField, isRefreshing, pageLoadingShow } = this.state
    const { navigation } = this.props

    return (
      <View style={ commonStyles.container }>
        <ListTab 
          fieldData={ fieldData }
          curIndex={ curIndex }
          onTabClick= { this.onTabClick }
        />
        <ScrollView
          showsVerticalScrollIndicator={ false }
          refreshControl={
            <MyRefreshControl 
              isRefreshing={ isRefreshing }
              onPageRefresh={ this.onPageRefresh }
            />
          }
        > 
          {
            pageLoadingShow ? <PageLoading />
            : 
            <CourseList 
              courseData={ courseData[curField] || [] }  // 如果没有curField这个Key的话就先传空数组
              navigation={ navigation }
            />
          }
        </ScrollView>
      </View>
    )
  }
}
