import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONTS } from '../../constants/theme'
import { IMAGES } from '../../constants/Images'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import CheckoutItems from '../CheckoutItems'

type Props = {
    id : string;
    title : string;
    Brande : string;
    price : string;
    validity : string;
    image ?: any;
    onPress ?: (e : any) => void,
    onPress2 ?: (e : any) => void,
}

const Cardstyle1 = ({title,image,price,Brande, validity,onPress,onPress2} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress} 
        style={{
            flexDirection:'row',
            width:'100%',
            alignItems:'flex-start',
            backgroundColor:colors.card,
            borderRadius:13,
            padding:15,
            shadowColor:theme.dark ? colors.background : "rgba(118, 65, 4, 0.6)",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.34,
            shadowRadius: 18.27,
            elevation: 8, 
        }}
    >
        <View style={{width:'30%',alignItems:'center'}}>
            <View 
                style={{
                    height:undefined,
                    width:'100%',
                    backgroundColor:COLORS.primary,
                    borderRadius:22,
                    aspectRatio:1/1.2,
                    alignItems:'center',
                    justifyContent:'center',
                    overflow:'hidden'
                }}
            >
                <Image
                    style={{height:undefined,width:'100%',aspectRatio:1/1.2,}}
                    source={image}
                />
            </View>
        </View>
        <View 
            style={{
                width:'70%',
                paddingLeft:15,
            }}
        >
            <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title,paddingRight:25}}>Brande : {Brande}</Text>
            <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title,paddingRight:25}}>Data : {title}</Text>
            <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title,paddingRight:25}}>Validity : {validity}</Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <View style={[{flexDirection:'row' , alignItems:'center', gap:5,}]}>
                    <Text style={{...FONTS.fontSemiBold,fontSize:18,color:colors.title}}>Price : {price}</Text>
                    
                </View>
               
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:20
            }}> 
                
                <TouchableOpacity
                    onPress={onPress2} 
                    activeOpacity={0.5} 
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}
                >
                    <Image
                        style={{ height: 16, width: 16, resizeMode: 'contain',tintColor:'#6CAE97' }}
                        source={IMAGES.delete}
                    />
                    <Text style={{ ...FONTS.fontMedium, fontSize: 14, color:'#6CAE97',lineHeight:20}}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    brandsubtitle3:{
        ...FONTS.fontMedium,
        fontSize:12,
        color:COLORS.title
    },
})



export default Cardstyle1