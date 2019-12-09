/*
 * @Author: czy0729
 * @Date: 2019-04-29 16:44:35
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-12-09 14:31:09
 */
import React from 'react'
import { observer } from 'mobx-react'
import { Tabs as CompTabs } from '@components'
import { _ } from '@stores'
import { IOS } from '@constants'
import TabBarRight from './tab-bar-right'
import { tabs } from './store'

function Tabs({ tabBarStyle, $, children, ...other }) {
  const { page, _page } = $.state
  const _tabBarStyle = [tabBarStyle]
  if (!IOS) {
    _tabBarStyle.push({
      backgroundColor: _.colorPlain
    })
  }
  return (
    <CompTabs
      tabBarStyle={_tabBarStyle}
      tabs={tabs}
      initialPage={page}
      page={children ? page : _page}
      prerenderingSiblingsNumber={1}
      renderTabBarRight={<TabBarRight $={$} />}
      onTabClick={$.onTabClick}
      onChange={$.onChange}
      {...other}
    >
      {children}
    </CompTabs>
  )
}

export default observer(Tabs)
