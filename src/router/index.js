import React from 'react'
import { Redirect } from 'react-router-dom'

import JCDiscover from '@/views/discover'
import JCMine from '@/views/mine'
import JCFriend from '@/views/friend'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover" /> 
    }
  },
  {
    path: '/discover',
    component: JCDiscover
  },
  {
    path: '/mine',
    component: JCMine
  },
  {
    path: '/friend',
    component: JCFriend
  }
]

export default routes