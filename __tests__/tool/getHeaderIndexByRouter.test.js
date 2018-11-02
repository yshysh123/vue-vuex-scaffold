import {
  getHeaderKeyByRouter,
  getHeaderIndexByRouter,
} from 'tool/getHeaderIndexByRouter'
import menu from 'fixture/menu.json'

describe('测试传入顶部以及侧边栏的数组，以及当前页面的key，返回Header的name', () => {
  it('正常传入数组和index，正常返回key', () => {
    expect(getHeaderKeyByRouter(menu, 'Home')).toBe('Menu1_1')
    expect(getHeaderKeyByRouter(menu, 'User')).toBe('Menu1_1')
    expect(getHeaderKeyByRouter(menu, 'NotFound')).toBe('Menu1_1')
    expect(getHeaderKeyByRouter(menu, 'Lalala')).toBe('Menu2_1')
  })

  it('正常传入数组和错的index，返回空字符串', () => {
    expect(getHeaderKeyByRouter(menu, 'xxx')).toBe('')
  })
})

describe('测试传入顶部以及侧边栏的数组，以及当前页面的key，返回Header的index', () => {
  it('正常传入数组和index，正常返回index', () => {
    expect(getHeaderIndexByRouter(menu, 'Home')).toBe(0)
    expect(getHeaderIndexByRouter(menu, 'User')).toBe(0)
    expect(getHeaderIndexByRouter(menu, 'NotFound')).toBe(0)
    expect(getHeaderIndexByRouter(menu, 'Lalala')).toBe(1)
  })

  it('正常传入数组和错的index，返回空字符串', () => {
    expect(getHeaderIndexByRouter(menu, 'xxx')).toBe('')
  })
})
