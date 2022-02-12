import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

import JCAppHeader from 'components/app-header'
import JcAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <JCAppHeader />
      {renderRoutes(routes)}
      <JcAppFooter />
    </HashRouter>
  )
})
