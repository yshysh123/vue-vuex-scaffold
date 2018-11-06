import store from 'store/headerStore'

const {
  mutations: { setAuthor, setHeaderMenu, setActiveIndex },
} = store

describe('headerStore', () => {
  it('测试mutition', () => {
    // 模拟状态
    const state = {
      author: 'Wise Wrong',
      headerMenu: [],
      activeIndex: '',
    }
    // 应用 mutation
    setAuthor(state, 'sihong')
    // 断言结果
    expect(state.author).toBe('sihong')
    // 应用 mutation
    setHeaderMenu(state, [111])
    // 断言结果
    expect(state.headerMenu).toEqual([111])
    // 应用 mutation
    setActiveIndex(state, 'Menu1_1')
    // 断言结果
    expect(state.activeIndex).toBe('Menu1_1')
  })
})
