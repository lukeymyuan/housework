import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, AtTag, AtNoticebar } from "taro-ui"
import Tab from './../../components/tab/tab'
import familyHouseworkJpg from './family-housework.jpg'

const actions = { tag1: "做饭", tag2: "洗碗", tag3: "拖地", tag4: "倒垃圾", tag5: "洗衣服", tag6: "买菜", tag7: "刷马桶", tag8: "铲屎" };

export default class Index extends Component {

  constructor() {
    super(...arguments);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpened: false,
      action: "",
      tag1: true,
      tag2: true,
      tag3: true,
      tag4: true,
      tag5: true,
      tag6: false,
      tag7: false,
      tag8: false,
      activeTags: []
    }
  }

  handleTagClick(item) {
    this.setState({ [item.name]: !item.active })
  }

  handleClick() {
    const tags = Object.keys(actions);
    const result = tags.filter(tag => this.state[tag] === true);
    this.setState({ activeTags: result }, () => {
      const action = actions[this.state.activeTags[Math.floor(Math.random() * this.state.activeTags.length)]];
      this.setState({ action: action, isOpened: true });
    })

  }

  handleModalClose() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    return (
      <View >
        <AtNoticebar>选择家务后点击分工，深色的为默认已选</AtNoticebar>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
        <View className='at-row at-row__justify--center'>
          <Image
            src={familyHouseworkJpg}
          />
        </View>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
        <View className='at-row at-row__justify--center'>
          <AtButton type='primary' circle='true' onClick={this.handleClick} >分工</AtButton>
        </View>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>

        <AtModal isOpened={this.state.isOpened} >
          <AtModalHeader>我来{this.state.action}</AtModalHeader>
          <AtModalAction> <Button onClick={this.handleModalClose}>确定</Button> </AtModalAction>
        </AtModal>

        <View className='at-row at-row__justify--center'>
          <View className='at-col at-col-3'><AtTag name='tag1' type='primary' active={this.state.tag1} onClick={this.handleTagClick}>
            {actions.tag1}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag2' type='primary' active={this.state.tag2} onClick={this.handleTagClick}>
            {actions.tag2}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag3' type='primary' active={this.state.tag3} onClick={this.handleTagClick}>
            {actions.tag3}
          </AtTag></View>
        </View>
        <View className='at-row at-row__justify--center'>
          <View className='at-col at-col-3'><AtTag name='tag4' type='primary' active={this.state.tag4} onClick={this.handleTagClick}>
            {actions.tag4}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag5' type='primary' active={this.state.tag5} onClick={this.handleTagClick}>
            {actions.tag5}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag6' type='primary' active={this.state.tag6} onClick={this.handleTagClick}>
            {actions.tag6}
          </AtTag></View>
        </View>
        <View className='at-row at-row__justify--center'>
          <View className='at-col at-col-3'><AtTag name='tag7' type='primary' active={this.state.tag7} onClick={this.handleTagClick}>
            {actions.tag7}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag8' type='primary' active={this.state.tag8} onClick={this.handleTagClick}>
            {actions.tag8}
          </AtTag></View>
        </View>

        <Tab current={0} />
      </View >
    )
  }
}