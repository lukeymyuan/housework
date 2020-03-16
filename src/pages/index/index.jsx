import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Tab from './../../components/tab/tab'

const actions = ["做饭", "拖地", "擦桌子"];

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      action: ""
    }
  }

  handleClick() {

    const action = actions[Math.floor(Math.random() * actions.length)];
    this.setState({ action: action })
  }

  render() {

    return (
      <View >
        <AtButton size='small' type='primary' onClick={this.handleClick}>分工</AtButton>
        <div>
          我做 {this.state.action}
        </div>
        <Tab />
      </View>

    )
  }
}
