import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, AtTag, AtNoticebar, AtCurtain } from "taro-ui"
import Tab from './../../components/tab/tab'
import Luckyturntable from 'wechat-taroturntable'

import familyHouseworkJpg from './family-housework.jpg'


const actions = { tag1: "做饭", tag2: "洗碗", tag3: "拖地", tag4: "倒垃圾", tag5: "洗衣服", tag6: "买菜", tag7: "刷马桶", tag8: "铲屎" };

const awardsList = [
  { id: 1, award: '娱乐放松嗨', comment: '电影要去影院看，飙歌要去包间喊！', commentIcon: 'sound' },
  { id: 2, award: '美味要大块', comment: '垂涎直下三千尺，享用美食在眼前。', commentIcon: 'heart' },
  { id: 3, award: '独坐静发呆', comment: '放空一段自己自由自我的午后，静静品味岁月静好。', commentIcon: 'user' },
  { id: 4, award: '心念下单买', comment: '终于为心心念念的消费找到一个充分必要的理由！', commentIcon: 'shopping-cart' },
  { id: 5, award: '开溜百里外', comment: '背上包，说走就走。多久没有出游玩一趟了？', commentIcon: 'image' },
  { id: 6, award: '红包约人派', comment: '朝某人振臂一呼，小小激励速速！且行且珍惜.' }
];

export default class Index extends Component {
  config = {
    navigationBarTitleText: '咋分工'
  }

  onShareAppMessage(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '把家务全丢给老公！',
      path: '/pages/index/index'
    }
  }

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
      activeTags: [],
      isCurtainOpened: false
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
      this.setState({ action: action, isCurtainOpened: true });
    })

  }

  handleModalClose() {
    this.setState({
      isOpened: false
    })
  }

  onCurtainClose() {
    this.setState({
      isCurtainOpened: false
    })
  }

  render() {
    return (
      <View >

        <AtNoticebar close={true}>选择家务后点击分工，深色的为默认已选</AtNoticebar>

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

        <AtCurtain
          isOpened={this.state.isCurtainOpened}
          onClose={this.onCurtainClose.bind(this)}
        >
          <Luckyturntable awards={awardsList} buttonTitle='小鼓励' />
        </AtCurtain>

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
        </View>

        <Tab current={0} />
      </View >
    )
  }
}