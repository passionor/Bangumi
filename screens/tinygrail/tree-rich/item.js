/*
 * @Author: czy0729
 * @Date: 2019-11-27 21:50:42
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-12-09 22:10:17
 */
import React from 'react'
import { View } from 'react-native'
import { Flex, Image, Text } from '@components'
import { Popover } from '@screens/_'
import { _ } from '@stores'
import { observer } from '@utils/decorators'

const area = _.window.width * _.window.height

function Item({
  w,
  h,
  x,
  y,
  id,
  icon,
  name,
  price,
  percent,
  onPress,
  onLongPress
}) {
  const styles = memoStyles()
  const ratio = (percent + 1) ** 2
  const ratioHeight = (h / _.window.height) * 1.2
  const showAvatar = !!icon && (w * h) / area > 0.016
  const _percent = percent * 100
  const textSize = parseInt(9 * ratio)

  let priceText
  if (price > 100000000) {
    priceText = `${parseFloat((price / 100000000).toFixed(1))}亿`
  } else if (price > 10000) {
    priceText = `${parseFloat((price / 10000).toFixed(1))}万`
  } else {
    priceText = parseFloat(price.toFixed(1))
  }

  let backgroundColor = _.colorTinygrailContainer
  if (!icon) {
    backgroundColor = _.colorTinygrailBorder
  }

  return (
    <View
      style={[
        styles.item,
        {
          top: y,
          left: x,
          backgroundColor
        }
      ]}
    >
      <Popover
        data={!id ? [] : [name, '资产分析', '隐藏']}
        placement='auto'
        onSelect={title =>
          onPress({
            id,
            name,
            title
          })
        }
        onLongPress={() =>
          onLongPress({
            id,
            name
          })
        }
      >
        <Flex
          style={[
            _.container.flex,
            {
              width: w,
              height: h
            }
          ]}
          direction='column'
          justify='center'
        >
          {showAvatar && (
            <Image
              style={{
                marginBottom: parseInt(5.6 * ratio)
              }}
              src={icon}
              size={parseInt(ratioHeight * 240)}
              height={parseInt(ratioHeight * 240)}
              radius={parseInt(ratioHeight * 120)}
              placeholder={false}
            />
          )}
          <Text
            style={{
              color: _.colorTinygrailPlain
            }}
            size={parseInt(11 * ratio)}
            numberOfLines={1}
            selectable={false}
          >
            {name}
          </Text>
          <Text
            style={{
              marginTop: parseInt(3 * ratio),
              color: _.colorTinygrailText
            }}
            size={textSize}
            numberOfLines={1}
            selectable={false}
          >
            <Text
              style={{
                color: _.colorTinygrailText
              }}
              size={textSize}
              selectable={false}
            >
              {priceText}
            </Text>{' '}
            / {_percent.toFixed(_percent < 0.1 ? 2 : 1)}%
          </Text>
        </Flex>
      </Popover>
    </View>
  )
}

Item.defaultProps = {
  onPress: Function.prototype,
  onLongPress: Function.prototype
}

export default observer(Item)

const memoStyles = _.memoStyles(_ => ({
  item: {
    position: 'absolute',
    borderWidth: _.hairlineWidth,
    borderColor: _.colorTinygrailBorder,
    overflow: 'hidden'
  }
}))
