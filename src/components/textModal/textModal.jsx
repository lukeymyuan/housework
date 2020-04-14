import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, } from "taro-ui"

export default class textModal extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            action: "抽取中。。。"
        }
    }

    componentDidUpdate() {
        const { action } = this.props;
        if (this.state.action === "抽取中。。。") {
            this.timeout = setTimeout(
                function () {
                    this.setState({ action: action });
                }.bind(this),
                2000
            );
        }

    }


    render() {
        return (
            <AtModalHeader>{this.state.action}</AtModalHeader>
        )
    }
}
