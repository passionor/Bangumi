/*
 * @Author: czy0729
 * @Date: 2019-05-05 02:45:46
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-05-05 21:30:33
 */
import React from 'react'
import { StyleSheet, UIManager, findNodeHandle, View } from 'react-native'
import Touchable from './touchable'

export default class Popover extends React.Component {
  static defaultProps = {
    data: [],
    onSelect: Function.prototype
  }

  ref

  showPopupAndroid = () => {
    const { data } = this.props
    UIManager.showPopupMenu(
      findNodeHandle(this.ref),
      data,
      () => {}, // err callback
      this.onPopupItemPress
    )
  }

  onPopupItemPress = (evt, index) => {
    const { data, onSelect } = this.props
    if (index !== undefined) {
      onSelect(data[index])
    }
  }

  render() {
    const { style, children } = this.props
    return (
      <View>
        <View ref={ref => (this.ref = ref)} style={styles.overflowView} />
        <Touchable style={style} onPress={this.showPopupAndroid}>
          {children}
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  overflowView: {
    position: 'absolute',
    top: -8,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent'
  }
})