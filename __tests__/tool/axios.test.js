import fetchMock from 'fetch-mock'
import axios from 'tool/axios'
import config from 'src/config'

describe('tool/axios', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  describe('测试分页处理', () => {
    test('测试有分页值', () => {
      const url = 'users'
      const data = {
        data: {
          entities: [
            { name: 'aaaa', id: 1 },
            {
              name: 'bbb',
              id: 2,
            },
          ],
          pageNo: 2,
          total: 10,
        },
      }
      fetchMock.get(`${config.baseURL}${url}`, data)
      return axios.get(url).then(res => {
        expect(res.originalData).toEqual(data.data)
        expect(res.dataSource).toEqual(data.data.entities)
        expect(res.total).toBe(10)
        expect(res.pageNo).toBe(2)
        expect(res.pageSize).toBe(20)
      })
    })

    it('测试非分页数据', async () => {
      const url = '/users'
      let data = {
        code: 200,
        data: null,
      }
      fetchMock.get(`${config.baseURL}${url}`, data)
      let res = await axios.get(url)
      expect(res).toEqual(null)
      fetchMock.restore()

      data = {
        code: 200,
        data: {
          name: 'abc',
        },
      }
      fetchMock.get(`${config.baseURL}${url}`, data)
      res = await axios.get(url)
      expect(res).toEqual(data.data)
      fetchMock.restore()

      data = {
        code: 200,
      }
      fetchMock.get(`${config.baseURL}${url}`, data)
      res = await axios.get(url)
      expect(res).toEqual(undefined)
    })

    test('测试没有分页值，返回默认分页值', () => {
      const url = '/users'
      const data = {
        data: {
          entities: [
            { name: 'aaaa', id: 1 },
            {
              name: 'bbb',
              id: 2,
            },
          ],
        },
      }
      fetchMock.get(`${config.baseURL}${url}`, data)
      return axios.get(url).then(res => {
        expect(res.originalData).toEqual(data.data)
        expect(res.dataSource).toEqual(data.data.entities)
        expect(res.total).toBe(0)
        expect(res.pageNo).toBe(1)
        expect(res.pageSize).toBe(20)
      })
    })
  })

  it('测试失败的请求', () => {
    const url = 'user/me'
    global.location.href = '/'
    expect(global.location.href).not.toEqual(config.loginHost)
    const res = new global.Response(
      {},
      {
        url: config.loginHost,
        type: 'opaqueredirect',
        redirected: false,
        status: 0,
        ok: false,
      },
    )
    res.ok = false
    fetchMock.get(`${config.baseURL}${url}`, res)
    // axios.interceptor.catch.push()
    return axios.get(url).catch(error => {
      // expect(global.location.href).toEqual(config.loginHost)
      expect(error).toBeInstanceOf(Error)
    })
  })

  it('axios will emit error when error occur', done => {
    const url = 'user/me'
    fetchMock.get(
      `${config.baseURL}${url}`,
      new global.Response({ status: 404, ok: false }),
    )
    const spy = jest.fn()
    axios.on('error', spy)
    axios.on('error', () => {
      expect(spy).toHaveBeenCalledTimes(1)
      done()
    })
    axios.get(url)
  })

  it('非get请求会发送success事件', async () => {
    const url = 'user'
    fetchMock.post(`${config.baseURL}${url}`, {
      code: 200,
    })
    fetchMock.get(`${config.baseURL}${url}`, {
      code: 200,
    })
    const spy = jest.fn()
    axios.once('success', spy)
    await axios.post(url)
    expect(spy).toHaveBeenCalledTimes(1)
    await axios.get(url)
    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('测试fxios catch的emit功能', () => {
    const url = 'user/me'
    fetchMock.get(`${config.baseURL}${url}`, {
      code: 400,
      message: 'error',
    })
    const fn = jest.fn()
    // axios.interceptor.catch.push(fn)
    expect(fn).not.toHaveBeenCalled()
    axios.on('error', fn)
    return axios.get(url).catch(() => {
      expect(fn).toHaveBeenCalled()
      axios.removeListener('error', fn)
    })
  })
})
