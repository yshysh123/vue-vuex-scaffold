import store from 'store/rootStore'

const {
  mutations: { setColor },
} = store

describe('headerStore', () => {
  it('测试mutition', () => {
    // 模拟状态
    const state = {
      themeColor: [],
    }
    // 应用 mutation
    setColor(state, ['#ffffff'])
    // 断言结果
    expect(state.themeColor).toEqual(['#ffffff'])
  })
})
