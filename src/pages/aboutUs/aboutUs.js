import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import Tab from './../../components/tab/tab'
import coupleArgue from './couple-argue.jpg'

export default class Index extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    render() {

        return (
            <View>
                <Text>{process.env.TARO_ENV === 'h5' ? <br /> : '\n'}</Text>
                <View className='at-row at-row__justify--center'>
                    <Image
                        src={coupleArgue}
                    />
                </View>
                <View className='at-article'>
                    <View className='at-article__h1'>
                        我们是有梦想，脑回路奇怪，爱折腾的couple
                    </View>
                </View>
                <Tab />
            </View>
        )
    }
}
