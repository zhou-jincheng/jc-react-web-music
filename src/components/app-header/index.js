import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/common/local-data'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HeaderWrapper, ContainerLeft, ContainerRight } from './style'

export default memo(function JCAppHeader() {

  const showOptionedItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="container wrap-v1">
        <ContainerLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="select-item" key={index}>
                    {showOptionedItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </ContainerLeft>
        <ContainerRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
          <div className="center">创作者中心</div>
          <div className="login">登陆</div>
        </ContainerRight>
      </div>
      <div className="divide"></div>
    </HeaderWrapper>
  )
})
