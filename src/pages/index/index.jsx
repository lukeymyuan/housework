import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, AtTag, AtNoticebar, AtCurtain } from "taro-ui"
import Tab from './../../components/tab/tab'
import TextModal from './../../components/textModal/textModal'

import familyHouseworkJpg from './family-housework.jpg'


const actions = { tag1: "做饭", tag2: "洗碗", tag3: "拖地", tag4: "倒垃圾", tag5: "洗衣服", tag6: "买菜", tag7: "刷马桶", tag8: "铲猫屎", tag9: "遛狗" };

export default class Index extends Component {
  config = {
    navigationBarTitleText: '咋分工'
  }

  onShareAppMessage(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '试试这个小程序，妈妈再也不用担心家务分工！',
      path: '/pages/index/index'
    }
  }

  constructor() {
    super(...arguments);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalTwoClose = this.handleModalTwoClose.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isModalOpened: false,
      isModalTwoOpened: false,
      action: "",
      tag1: true,
      tag2: true,
      tag3: true,
      tag4: true,
      tag5: true,
      tag6: false,
      tag7: false,
      tag8: false,
      tag9: false,
      activeTags: [],
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
      this.setState({ action: action, isModalOpened: true });
    })

  }

  handleModalClose() {
    this.setState({
      isModalOpened: false, isModalTwoOpened: true
    })
  }

  handleModalTwoClose() {
    this.setState({
      isModalTwoOpened: false
    })
  }

  render() {
    return (
      <View >

        <AtNoticebar icon='volume-plus' close={true}>选择家务后点击分工，深色的为默认已选</AtNoticebar>

        <View className='at-row at-row__justify--center'>
          <Image
            src={familyHouseworkJpg}
          />
        </View>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>

        <AtModal isOpened={this.state.isModalOpened} >
          <TextModal action={this.state.action} />
          <AtModalAction> <Button onClick={this.handleModalClose}>好的我这就去做</Button> </AtModalAction>
        </AtModal>

        <AtModal isOpened={this.state.isModalTwoOpened} >
          <AtModalHeader>觉得好用或想要吐槽？转发领取10枚程序金币</AtModalHeader>
          <AtModalAction> <Button >转发领取金币</Button><Button onClick={this.handleModalTwoClose}>残忍取消</Button> </AtModalAction>
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
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
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
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
        <View className='at-row at-row__justify--center'>
          <View className='at-col at-col-3'><AtTag name='tag7' type='primary' active={this.state.tag7} onClick={this.handleTagClick}>
            {actions.tag7}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag8' type='primary' active={this.state.tag8} onClick={this.handleTagClick}>
            {actions.tag8}
          </AtTag></View>
          <View className='at-col at-col-3'><AtTag name='tag9' type='primary' active={this.state.tag9} onClick={this.handleTagClick}>
            {actions.tag9}
          </AtTag></View>
        </View>
        <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>

        <View className='at-row at-row__justify--center'>
          <View className='at-col at-col-5'>
            <AtButton type='primary' circle='true' onClick={this.handleClick} >选完后点我分工</AtButton>
          </View>
        </View>
        <Tab current={0} />
      </View >
    )
  }
}