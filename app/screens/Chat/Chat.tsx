import { View, Text,  ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS,FONTS } from '../../constants/theme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


const MessagesData = [
    {
        image: IMAGES.orange,
        title: "10 GO",
        message: "10$",
        time: "Fri",
        
    },
    {
        image: IMAGES.ooredoo,
        title: "20 Go - 100 min - 20 sms",
        message: "20 $",
        time: "Mon",
    },
    {
        image: IMAGES.telecom,
        title: "15 GO",
        message: "8 $",
        time: "Sat"
    },
   
]

type ChatScreenProps = StackScreenProps<RootStackParamList, 'Chat'>;


const Chat = ({navigation} : ChatScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='History'
                leftIcon='back'
                rightIcon1={'search'}
            />
             <ScrollView
                contentContainerStyle={{ flexGrow:1 }}
            >
                <View style={[GlobalStyleSheet.container, {paddingTop:5}]}>

                    {MessagesData.map((data, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Singlechat')}
                                key={index}
                                style={[GlobalStyleSheet.flex,{
                                    padding:10,
                                    marginTop: 10,
                                    paddingHorizontal: 15,
                                    backgroundColor:colors.card,
                                    borderRadius:15
                                }]}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image
                                        style={{ height: 50, width: 50, resizeMode: 'contain', borderRadius: 10 }}
                                        source={data.image}
                                    />
                                    <View>
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 12, color: colors.text }}>{data.message}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ ...FONTS.fontRegular, fontSize: 11, color:colors.text }}>{data.time}</Text>
                                </View>
                                {data.hasstory ?

                                    <View 
                                        style={{
                                            height: 16, 
                                            width: 16, 
                                            borderRadius: 15, 
                                            backgroundColor: colors.card, 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            position: 'absolute', 
                                            bottom: 6, 
                                            left: 54 
                                        }}
                                    >
                                        <View style={{ height: 10, width: 10, borderRadius: 12, backgroundColor: COLORS.success }}></View>
                                    </View>

                                    : null}
                            </TouchableOpacity>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    )
}

export default Chat