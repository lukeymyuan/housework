import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'

export default class Tab extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
        switch (value) {
            case 0:
                Taro.redirectTo({
                    url: '/pages/index/index'
                })
                break;
            case 1:
                Taro.redirectTo({
                    url: '/pages/doItAll/doItAll'
                })
                break;
            case 2:
                Taro.redirectTo({
                    url: '/pages/aboutUs/aboutUs'
                })
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <AtTabBar fixed
                tabList={[
                    { title: '咋分工', },
                    { title: '谁全包' },
                    { title: '来聊聊' },
                ]}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
            />
        )
    }
}
