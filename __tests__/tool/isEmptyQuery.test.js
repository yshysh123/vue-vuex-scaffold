import isEmptyQuery from 'tool/isEmptyQuery'

describe('测试那些在query应该被认为是空的值', () => {
  it('测试空值', () => {
    expect(isEmptyQuery([])).toBe(true)
    expect(isEmptyQuery([''])).toBe(true)
    expect(isEmptyQuery(['', null, ''])).toBe(true)
    expect(isEmptyQuery(['', 0, ''])).toBe(false)
    expect(isEmptyQuery('')).toBe(true)
    expect(isEmptyQuery(0)).toBe(false)
    expect(isEmptyQuery(21)).toBe(false)
    expect(isEmptyQuery('123')).toBe(false)
    expect(isEmptyQuery(null)).toBe(true)
    expect(isEmptyQuery(undefined)).toBe(true)
    expect(isEmptyQuery()).toBe(true)
  })

  it('测试之后，被测试的值不应该改变', () => {
    const a = ['', null, '']
    expect(isEmptyQuery(a)).toBe(true)
    expect(a[0]).toBe('')
    expect(a[1]).toBe(null)
    expect(a[2]).toBe('')

    const b = ['2018', '']
    expect(isEmptyQuery(b)).toBe(false)
    expect(b[0]).toBe('2018')
    expect(b[1]).toBe('')
  })
})
