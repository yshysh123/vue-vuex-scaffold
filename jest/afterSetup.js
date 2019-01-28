import noop from 'lodash/noop'

// 抑制antd form validator报错
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(noop)
  jest.spyOn(console, 'warn').mockImplementation(noop)
})
