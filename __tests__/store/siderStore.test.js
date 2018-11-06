import store from 'store/siderStore'

const {
  mutations: { setCollapse, setItems },
} = store

describe('headerStore', () => {
  it('测试mutition', () => {
    // 模拟状态
    const state = {
      collapse: false,
      items: [],
    }
    // 应用 mutation
    setCollapse(state, true)
    // 断言结果
    expect(state.collapse).toBe(true)
    // 应用 mutation
    setItems(state, [111])
    // 断言结果
    expect(state.items).toEqual([111])
  })
})
