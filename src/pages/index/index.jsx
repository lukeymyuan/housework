import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"

import Tab from './../../components/tab/tab'
import familyHouseworkJpg from './family-housework.jpg'
import './index.css'

const actions = ["做饭", "洗碗", "拖地", "倒垃圾", "洗衣服"];

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.state = {
      isOpened: false,
      action: ""
    }
  }

  handleClick() {
    const action = actions[Math.floor(Math.random() * actions.length)];
    this.setState({ action: action, isOpened: true })
  }

  handleModalClose() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    return (
      <View >
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
        <View className='at-row at-row__justify--center'>
          <Image
            src={familyHouseworkJpg}
          />
        </View>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
        <View className='at-row at-row__justify--center'>
          <a class="btn" onClick={this.handleClick}>分工</a>
        </View>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>

        <AtModal isOpened={this.state.isOpened} >
          <AtModalHeader>我来{this.state.action}</AtModalHeader>
          <AtModalAction> <Button onClick={this.handleModalClose}>确定</Button> </AtModalAction>
        </AtModal>

        <Tab />
      </View >
    )
  }
}
