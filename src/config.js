import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
// export const API_BASE_URL = 'http://120.79.229.207:6060'
// export const API_BASE_URL = 'http://127.0.0.1:3000'
export const API_BASE_URL = 'http://8.130.31.13:3000'
// project config
export const HEADER_BLOG_NAME = '凌烟' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  // avatar: require('@/assets/images/avatar.jpeg'), // 侧边栏头像
  avatar: 'https://fang-kang.gitee.io/blog-img/head.jpg', // 侧边栏头像
  title: '凌烟', // 标题
  subTitle: 'stay true to the mission.', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/fang-kang',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />
    },
    // gitee: {
    //   link: 'https://juejin.im/user/96412755827687',
    //   icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
    // }
  },
  friendslink: {
    fk: {
      link: 'https://fang-kang.gitee.io/',
      img: 'https://fang-kang.gitee.io/blog-img/head.jpg',
    },
    lingyan: {
      link: 'https://fang-kang.gitee.io/blog',
      img: 'https://fang-kang.gitee.io/blog-img/head.jpg'
    }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: false, // github 第三方授权开关
  client_id: '87a4f88b943adaafd44a', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: true, // 是否开启
  content: (
    <>
      个人笔记网站，请访问
      <Href href='https://fang-kang.gitee.io/blog'> fk's note</Href>
    </>
  )
}
