import React, { Component } from 'react'

import {      // 这里放组件
  StyleSheet,
  View,       // 所有的innerHTML文本必须用Text包裹
} from 'react-native'
import Content from './components/content'
import IndexModel from './models/Index'
import ListModel from './models/List'

import { NavgationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'  // 栈导航
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'    // 底部选项卡
import Ionicons from 'react-native-vector-icons/Ionicons'  // 图标库

import HomePage from './pages/Home'
import DetailPage from './pages/Detail'
import ListPage from './pages/List'

import Logo from './components/logo'


// 请求方法汇总类
// const indexModel = new IndexModel()
// const listModel = new ListModel()

function BottomTab() {
  const Tab = createBottomTabNavigator() // 创建底部导航栏组件
  return (
    <Tab.Navigator
    // route为路由名字，即栈中的name
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName
          switch (route.name) {
            case '首页':
              iconName = 'ios-home'
              break;
            case '列表':
              iconName = 'ios-list'
              break
          }

          return (
            // 根据上面的iconName返回对应的icon组件
            <Ionicons 
              name={iconName}
              size={size}
              color={color}
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: '#23b8ff',
        inativeTintColor: '#999',
      }}
    >
      {/* Tab为同一屏下的不同场景 */}
      <Tab.Screen
        name='首页'
        component={HomePage}
      ></Tab.Screen>
      <Tab.Screen
        name='列表'
        component={ListPage}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

function Txclass() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.navigator>
        {/* Stack为不同屏下的场景,每个场景独占一屏(子路由) */}
        {/* 只有在Stack场景中注册了的组件才能用navigation页面跳转 */}
        {/* navigation传入了栈导航的每个场景(屏幕) */}
        <Stack.Screen
          name='Tab'
          component={ BottomTab }
          options={{
            headerTitle: props => <Logo {...props} />
          }}
        />
        <Stack.Screen
          name='Detail'
          component={ DetailPage }
          options={{
            headerTitle: props => <Logo {...props} />,
            headerBackTitle: '返回'
          }}
        />
      </Stack.navigator>
    </NavigationContainer>
  )
}

export default class Txclass extends Component {
  
  

  render() {

    return (
      
    )
  }

  

}

// const styles = StyleSheet.create({
//   container: {
//     height: 100,
//     fontSize: 14,
//     backgroundColor: '#fff',
//     justifyContent: 'center'
//   },

// })
