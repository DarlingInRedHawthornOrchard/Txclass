import {
  StyleSheet
} from 'react-native'
import { screenSize } from '../../utils/tools'

const styles = StyleSheet.create({
  recomCourseBoard: {
    flexDirection: 'row',    // 子元素一行显示
    flexWrap: 'wrap',   // 每个子元素要换行
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    padding: 5
  },
  courseItem: {
    width: screenSize.width / 2,
    padding: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 5,
    backgroundColor: '#fff',
    borderBottomColor: '#eee'
  },
  courseItemFirst: {
    paddingRight: 5,
    paddingLeft: 10,  
  },
  imgView: {
    width: (screenSize.width) / 2 - 15,
    height: (screenSize.width / 2 - 20) * 1080 / 1920,
  },
  courseName: {
    marginTop: 5,
    marginBottom: 5,
  },
  courseNameText: {
    fontSize: 13,
  },
  teacherInfo: {
    flexDirection: 'row',    // 图片+老师名字，在一行
    alignItems: 'center',
    height: 30
  },
  teacherImg: {
    width: 25,
    height: 25,
    borderRadius: 12,
    marginRight: 5
  },
  teacherName: {
    fontSize: 12,
    color: '#666'
  },
  price: {
    alignItems: 'flex-end',    // 排到右边
    marginTop: 5
  },
  priceNum: {
    color: '#f40'
  }
})

export default styles