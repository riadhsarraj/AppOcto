import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Cardstyle4 from '../../components/Card/Cardstyle4';


const PlansData = [
    {
        id:"30",
        image:IMAGES.orange,
        title:'Orange',
        coverage:"Tunisia",
        Network:"4G/5G",
        Services :"Data,Calls,SMS",
        
        
        
    },
    {
        id:"31",
        image:IMAGES.ooredoo,
        title:"Ooredoo",
        coverage:"Tunisia",
        Network:"4G/5G",
        Services :"Data,Calls,SMS",
        
    },
    {
        id:"32",
        image:IMAGES.telecom,
        title:'Telecom',
        coverage:"Tunisia",
        Network:"4G/5G",
        Services:"Data,Calls,SMS",
        
    },
   
]

type PlansScreenProps = StackScreenProps<RootStackParamList, 'Plans'>;

const Plans = ({navigation} : PlansScreenProps) => {
    const theme = useTheme();
    const { colors } : {colors : any} = theme;
    const [orderData , setOrderData] = useState(PlansData);
    return (
       <View style={{backgroundColor:theme.dark ? colors.background : colors.card,flex:1}}>
            <Header
                title='Tunisia'
                leftIcon='back'
                rightIcon4='home'
            />  
           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,paddingBottom:70,}}>
                <View style={[GlobalStyleSheet.container, { paddingTop: 20,paddingHorizontal:10 }]}>
                    <View >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View >
                                {orderData.map((data:any, index) => {
                                    return (
                                        <View   key={index} style={{marginBottom:30,borderRadius: 16, // Ajuste la valeur comme tu veux (ex: 8, 16, 20...)
                                            overflow: 'hidden',}}>
                                            <Cardstyle4
                                                id={data.id}
                                                
                                                title={data.title}
                                                coverage={data.coverage}
                                                Network={data.Network}
                                                Services={data.Services}
                                                price={data.price}
                                                image={data.image}
                                                btntitle={data.btntitle}
                                                completed={data.completed}
                                                onPress={() => navigation.navigate('Services')}
                                                onPress3={() => navigation.navigate('Trackorder')}
                                                onPress4={() => navigation.navigate('Writereview')}                                          
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
       </View>
    )
}




export default Plans