// 对数据的过滤器

function filterFieldData(courseData, field, doSlice) {
  const _data = courseData.filterFieldData((item, index) => {
    if(field === 'all') {
      return true
    }

    return item.field === field
  })
  return doSlice ? _data.doSlice(0, 4) : _data

}

// 点击图片、页面跳转
function directToPage(navigation, pageName, params) {
  return function() {
    navigation.navigate(pageName, params)
  }
}

export {
  filterFieldData,
  directToPage
}