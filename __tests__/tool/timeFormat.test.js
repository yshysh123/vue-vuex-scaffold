import timeFormat from 'tool/timeFormat'

describe('测试传入Date对象，是否返回字符串', () => {
  it('测试传入Date对象', () => {
    const date = new Date('2018-11-01 16:37:52')
    expect(timeFormat(date)).toBe('2018-11-01')
  })

  it('测试传入非Date对象', () => {
    const date = []
    expect(timeFormat(date)).toEqual([])
    const string = '字符串'
    expect(timeFormat(string)).toBe('字符串')
  })
})
