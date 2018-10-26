const express = require('express')

const router = express.Router()
const { resultData } = require('../common/utils')

router.get('/menu/getMenuData', (req, res) => {
  res.type('json')
  const ret = {}

  const data = [
    {
      resId: 37,
      resType: 5,
      name: 'Menu1_1',
      fullName: '首页',
      icon: null,
      url: '',
      pid: 0,
      level: 1,
      status: 1,
      remark: 'Menu1_1',
      siteId: 5,
      orderNo: 1,
      children: [
        {
          resId: 63,
          resType: 5,
          name: 'Menu1_2',
          fullName: '首页1——1',
          icon: 'line-chart',
          url: '',
          pid: 37,
          level: 2,
          status: 1,
          remark: 'Menu1_2',
          siteId: 5,
          orderNo: 41,
          children: [
            {
              resId: 67,
              resType: 2,
              name: 'User',
              fullName: '用户管理',
              icon: null,
              url: '/User',
              pid: 63,
              level: 3,
              status: 1,
              remark: 'User',
              siteId: 5,
              orderNo: 411,
              children: null,
            },
            {
              resId: 68,
              resType: 2,
              name: 'Role',
              fullName: '角色管理',
              icon: null,
              url: '/Role',
              pid: 63,
              level: 3,
              status: 1,
              remark: 'Role',
              siteId: 5,
              orderNo: 412,
              children: null,
            },
            {
              resId: 69,
              resType: 2,
              name: 'Resource',
              fullName: '资源管理',
              icon: null,
              url: '/Resource',
              pid: 63,
              level: 3,
              status: 1,
              remark: 'Resource',
              siteId: 5,
              orderNo: 413,
              children: null,
            },
            {
              resId: 70,
              resType: 2,
              name: 'NotFound',
              fullName: '无匹配路由页面',
              icon: null,
              url: '/NotFound',
              pid: 63,
              level: 3,
              status: 1,
              remark: 'NotFound',
              siteId: 5,
              orderNo: 414,
              children: null,
            },
          ],
        },
      ],
    },
    {
      resId: 34,
      resType: 5,
      name: 'Menu2_1',
      fullName: '啦啦啦',
      icon: null,
      url: '',
      pid: 0,
      level: 1,
      status: 1,
      remark: 'Menu2_1',
      siteId: 5,
      orderNo: 2,
      children: [
        {
          resId: 38,
          resType: 5,
          name: 'Menu2_2',
          fullName: '啦啦啦啦啦',
          icon: 'select',
          url: '/Lalala',
          pid: 34,
          level: 2,
          status: 1,
          remark: 'Menu2_2',
          siteId: 5,
          orderNo: 11,
        },
      ],
    },
  ]
  Object.assign(ret, resultData, {
    data,
  })
  res.send(ret)
})

module.exports = router
