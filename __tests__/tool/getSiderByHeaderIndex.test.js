import getSiderByHeaderIndex from 'tool/getSiderByHeaderIndex'
import menu from 'fixture/menu.json'

describe('测试传入顶部以及侧边栏的数组，以及header的Index，返回sider的渲染内容', () => {
  it('正常传入数组和index，正常返回数组', () => {
    expect(getSiderByHeaderIndex(menu, 'Menu1_1')).toEqual(menu[0].children)
    expect(getSiderByHeaderIndex(menu, 'Menu2_1')).toEqual(menu[1].children)
  })

  it('正常传入数组和错的index，返回空数组', () => {
    expect(getSiderByHeaderIndex(menu, 'xxx')).toEqual([])
  })
})
