/**
 *
 * @param {总menu} menu
 * @param {header的key} key
 * 传入顶部以及侧边栏的数组，以及router，返回header的index
 */
export function getHeaderKeyByRouter(menu, key) {
  let _result = ''
  menu.map(item => {
    if (item.children && item.children.length) {
      item.children.map(item2 => {
        if (item2.name === key) {
          _result = item.name
        }
        if (item2.children && item2.children.length) {
          item2.children.map(item3 => {
            if (item3.name === key) {
              _result = item.name
            }
          })
        }
      })
    }
  })
  return _result
}

export function getHeaderIndexByRouter(menu, key) {
  let _result = ''
  menu.map((item, index) => {
    if (item.children && item.children.length) {
      item.children.map(item2 => {
        if (item2.name === key) {
          _result = index
        }
        if (item2.children && item2.children.length) {
          item2.children.map(item3 => {
            if (item3.name === key) {
              _result = index
            }
          })
        }
      })
    }
  })
  return _result
}
