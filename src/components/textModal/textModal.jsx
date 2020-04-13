import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, } from "taro-ui"

export default class textModal extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <AtModalHeader>抽中  {this.props.action}</AtModalHeader>
        )
    }
}
