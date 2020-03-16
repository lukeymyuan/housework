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
            default:
                break;
        }
    }

    render() {

        return (
            <AtTabBar
                tabList={[
                    { title: '选一个', },
                    { title: '全包' },
                ]}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
            />
        )
    }
}
