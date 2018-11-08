/**
 *
 * @param {总menu} menu
 * @param {header的key} key
 * 传入顶部以及侧边栏的数组，返回header的name
 */
export function getHeaderKeyByRouter(menu, key) {
  let result = ''
  menu.forEach(item => {
    if (item.children?.length) {
      item.children.forEach(item2 => {
        if (item2.name === key) {
          result = item.name
        }
        if (item2.children?.length) {
          item2.children.forEach(item3 => {
            if (item3.name === key) {
              result = item.name
            }
          })
        }
      })
    }
  })
  return result
}

/**
 *
 * @param {总menu} menu
 * @param {header的key} key
 * 传入顶部以及侧边栏的数组，返回header的index
 */
export function getHeaderIndexByRouter(menu, key) {
  let result = ''
  menu.forEach((item, index) => {
    if (item.children && item.children.length) {
      item.children.forEach(item2 => {
        if (item2.name === key) {
          result = index
        }
        if (item2.children && item2.children.length) {
          item2.children.forEach(item3 => {
            if (item3.name === key) {
              result = index
            }
          })
        }
      })
    }
  })
  return result
}
