import store from 'store/userStore'
import axios from 'tool/axios'
import user from 'fixture/user.json'

const {
  mutations: { setLists },
  actions: { fetchLists },
} = store

describe('userStore', () => {
  it('测试mutition', () => {
    // 模拟状态
    const state = {
      lists: {
        dataSource: [],
      },
    }
    // 应用 mutation
    setLists(state, { dataSource: [1, 2, 3] })
    // 断言结果
    expect(state.lists).toEqual({ dataSource: [1, 2, 3] })
  })

  it('测试action', async () => {
    // 模拟状态
    const state = {
      lists: {
        dataSource: [],
      },
    }
    const spy = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve(user))

    // 应用 action
    await fetchLists(state, { pageNo: 2, pageSize: 10 })
    // 断言结果
    // expect(lists).toEqual([1, 2, 3])
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenLastCalledWith('user/lists', {
      query: { pageNo: 2, pageSize: 10 },
    })
  })
})
