/**
 *
 * @param {总menu} menu
 * @param {header的index} index
 * 传入顶部以及侧边栏的数组，以及header的Index，返回sider的渲染内容
 */
const getSiderByHeaderIndex = (menu, index) => {
  let result = []
  menu.map(item => {
    if (item.name === index) {
      result = item.children
    }
  })
  return result
}

export default getSiderByHeaderIndex
