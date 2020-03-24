import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton } from "taro-ui"
import Tab from './../../components/tab/tab'
import singleHousework from './single-housework.jpg'

const actions = ["老婆", "老公"];

export default class Index extends Component {

    constructor() {
        super(...arguments);
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
                        src={singleHousework}
                    />
                </View>
                <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
                <View className='at-row at-row__justify--center'>
                    <AtButton type='primary' circle='true' onClick={this.handleClick} >谁来</AtButton>
                </View>
                <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>

                <AtModal isOpened={this.state.isOpened} >
                    <AtModalHeader>{this.state.action}全包！</AtModalHeader>
                    <AtModalAction> <Button onClick={this.handleModalClose}>确定</Button> </AtModalAction>
                </AtModal>

                <Tab />
            </View >
        )
    }
}
