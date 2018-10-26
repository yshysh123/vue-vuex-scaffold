/**
 *
 * @param {总menu} menu
 * @param {header的key} key
 * 传入顶部以及侧边栏的数组，以及router，返回header的index
 */
export function getHeaderKeyByRouter(menu, key) {
  let result = ''
  menu.map(item => {
    if (item.children && item.children.length) {
      item.children.map(item2 => {
        if (item2.name === key) {
          result = item.name
        }
        if (item2.children && item2.children.length) {
          item2.children.map(item3 => {
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

export function getHeaderIndexByRouter(menu, key) {
  let result = ''
  menu.map((item, index) => {
    if (item.children && item.children.length) {
      item.children.map(item2 => {
        if (item2.name === key) {
          result = index
        }
        if (item2.children && item2.children.length) {
          item2.children.map(item3 => {
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
