import React from 'react'

// components
import { Divider, Rate, Icon, Avatar } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: '具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。',
    rate: 4
  },
  {
    label: '熟悉 React 框架及其用法，熟悉 Vue 框架及其用法。',
    rate: 4
  },
  {
    label: '熟悉 微信小程序原生开发、uniapp开发小程序、app、公众号及混合app开发',
    rate: 4
  },
  {
    label: '熟练使用 Webpack 打包工具，熟悉常用工程化和模块化方案',
    rate: 4
  },
  {
    label: '熟悉 Typescript和Vue3.0',
    rate: 4
  },
  {
    label: '熟悉 Koa、express、Mysql、Mongodb，针对需求可以做到简单的数据库设计、接口的开发与设计',
    rate: 3
  },
  {
    label: '熟悉nest.js+ Typescript 进行接口的开发',
    rate: 3
  },
]

const MyInfo = () => {
  return (
    <>

      <Divider orientation='center'>关于我</Divider>

      <ul className='about-list'>
        <li>
          联系方式：
          <Icon type='qq' /> 1793980864
          <Divider type='vertical' />
          <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
          <a href='mailto:1793980864@qq.com'>1793980864@qq.com</a>
        </li>
        <li>工作地：济南</li>
        {/* <li>
          友情链接博客地址：
          <Href href='http://blog.liziyang.co/'>栗子栗子</Href>
          <Divider type='vertical' />
        </li> */}
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
        <li>
          其他
          <ul>
            <li>常用开发工具： hbuilder、vscode、webstorm、git</li>
            <li>熟悉的 UI 框架： antd、element-ui、uview</li>
            <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
