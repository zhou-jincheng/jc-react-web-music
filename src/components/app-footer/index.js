import React, { memo, Fragment } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'

import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function JCAppFooter() {
  return (
    <FooterWrapper>
      <div className="container wrap-v2">
        <FooterLeft>
          <div className="footer-link">
            {
              footerLinks.map(item => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span>|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyright">
            <div>
              <span style={{marginRight: '16px'}}>网易公司版权所有©1997-2020</span>
              <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
            </div>
            <div>
              违法和不良信息举报电话：0571-89853516举报邮箱：ncm5990@163.com
            </div>
            <div>粤B2-20090191-18工业和信息化部备案管理系统网站</div>
          </div>
        </FooterLeft>
        <FooterRight>
          <ul>
            {
              footerImages.map(item => {
                return (
                  <li key={item.title}>
                    <a href={item.link} className="link" target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className="title">{item.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
