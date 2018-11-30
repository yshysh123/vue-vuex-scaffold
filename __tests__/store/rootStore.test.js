import store from 'store/rootStore'

const {
  mutations: { setColor, setQueryFrom },
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

    // 应用 mutation
    setQueryFrom(state, { aa: 111 })
    // 断言结果
    expect(state.queryFormStore).toEqual({ aa: 111 })
  })
})
