/*
 * @Author: czy0729
 * @Date: 2019-09-19 00:35:21
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-02-14 05:35:16
 */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { _ } from '@stores'
import { inject, withHeader } from '@utils/decorators'
import { headerStyle } from '../styles'
import StatusBarEvents from '../_/status-bar-events'
import Tabs from '../_/tabs'
import IconGo from '../_/icon-go'
import List from './list'
import Store, { tabs } from './store'

const title = '资金日志'

export default
@inject(Store)
@withHeader({
  screen: title,
  hm: ['tinygrail/logs', 'TinygrailLogs'],
  ...headerStyle
})
@observer
class TinygrailLogs extends React.Component {
  static navigationOptions = {
    title
  }

  static contextTypes = {
    $: PropTypes.object,
    navigation: PropTypes.object
  }

  componentDidMount() {
    const { $, navigation } = this.context
    $.init()

    navigation.setParams({
      extra: <IconGo $={$} />
    })
  }

  render() {
    const { $ } = this.context
    const { _loaded } = $.state
    return (
      <View style={this.styles.container}>
        <StatusBarEvents />
        {!!_loaded && (
          <Tabs tabs={tabs}>
            {tabs.map((item, index) => (
              <List key={item.key} index={index} />
            ))}
          </Tabs>
        )}
      </View>
    )
  }

  get styles() {
    return memoStyles()
  }
}

const memoStyles = _.memoStyles(_ => ({
  container: {
    ..._.container.flex,
    backgroundColor: _.colorTinygrailContainer
  }
}))
