/*
 * @Author: czy0729
 * @Date: 2019-09-15 10:54:09
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-12-09 14:53:12
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Touchable, Iconfont } from '@components'
import { _ } from '@stores'
import { observer } from '@utils/decorators'

const sectionWidth = parseInt((_.window.width - _.wind * 3) / 2)
const sectionHeight = sectionWidth / 2.4

function MenuItem({ style, pathname, config, title, icon }, { navigation }) {
  const styles = memoStyles()
  return (
    <Touchable
      style={styles.container}
      onPress={() => navigation.push(pathname, config)}
    >
      <Flex style={[styles.block, style]}>
        <Text
          style={{
            color: _.colorTinygrailPlain
          }}
          size={20}
          bold
        >
          {title}
        </Text>
        <Iconfont style={styles.icon} name={icon} size={56} />
      </Flex>
    </Touchable>
  )
}

MenuItem.contextTypes = {
  navigation: PropTypes.object
}

export default observer(MenuItem)

const memoStyles = _.memoStyles(_ => ({
  container: {
    marginRight: _.wind,
    marginBottom: _.wind,
    borderRadius: _.radiusSm,
    overflow: 'hidden'
  },
  block: {
    width: sectionWidth,
    height: sectionHeight,
    paddingLeft: 24,
    backgroundColor: _.colorTinygrailBorder
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: -12,
    marginTop: -28,
    opacity: 0.16
  }
}))
