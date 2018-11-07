const axios = {
  get: () =>
    Promise.resolve({
      dataSource: [],
      pageNo: 1,
    }),
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
}
export default axios
