import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import { COLORS, FONTS } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import Input from '../../components/Input/Input'
import { IMAGES } from '../../constants/Images'
import Button from '../../components/Button/Button'


type SingInScreenProps = StackScreenProps<RootStackParamList, 'SingIn'>;

const SingIn = ({navigation} : SingInScreenProps) => {

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);

  return (
    <ImageBackground 
        source={IMAGES.back} 
        style={{flex:1}}
        resizeMode="cover"
    >
        <SafeAreaView style={{flex:1}}>
            <View style={[GlobalStyleSheet.container,{justifyContent:'center',marginLeft:-20,alignItems:'center',paddingVertical:40,flexDirection:'row',gap:10}]}>
                <Image
                    style={{resizeMode:'contain',height:106,width:120}}
                    source={theme.dark ? IMAGES.logosim :IMAGES.logosim}
                    
                />
                <Text style={[styles.title1,{color:colors.title}]}>Octo-Sim</Text>
            </View>

            <ScrollView style={{flexGrow:1,}} showsVerticalScrollIndicator={false}>
                <View style={[GlobalStyleSheet.container,{flexGrow:1,paddingBottom:0,paddingHorizontal:30,paddingTop:0}]}>
                    <View style={{}}>
                        <View style={{marginBottom:30}}>
                            <Text style={[styles.title1,{color:colors.title}]}>Sign In</Text>
                           
                        </View>
                        <View style={[GlobalStyleSheet.container,{padding:0}]}>
                            <Text style={[styles.title3,{color:'#8A8A8A'}]}>Username</Text>
                        </View>
                        <View style={{ marginBottom: 20, marginTop: 10 }}>
                            <Input
                                onFocus={() => setisFocused(true)}
                                onBlur={() => setisFocused(false)}
                                onChangeText={(value) => console.log(value)}
                                isFocused={isFocused}
                                inputBorder
                                defaultValue='williamsmith'
                            />
                        </View>
                        <View style={[GlobalStyleSheet.container,{padding:0}]}>
                            <Text style={[styles.title3,{color:'#8A8A8A'}]}>Password</Text>
                        </View>
                        <View style={{ marginBottom: 10,marginTop:10 }}>
                            <Input
                                onFocus={() => setisFocused2(true)}
                                onBlur={() => setisFocused2(false)}
                                backround={colors.card}
                                onChangeText={(value) => console.log(value)}
                                isFocused={isFocused2}
                                type={'password'}
                                inputBorder
                                defaultValue='123456789'
                            />
                        </View>
                    </View>
                    <View style={{marginTop:30}}>
                        <Button
                            title={"LOGIN"}
                            onPress={() => navigation.navigate('DrawerNavigation',{screen : 'Home'} )}
                            style={{borderRadius:52, backgroundColor: COLORS.primary}}
                        />
                        <View 
                            style={[GlobalStyleSheet.flex,{
                                marginBottom:20,
                                marginTop:10,
                                paddingHorizontal:10,
                                justifyContent:'flex-start',
                                gap:5
                            }]}
                        >
                            <Text style={[styles.text,{color:colors.title}]}>Forgot Password?</Text>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.navigate('ForgotPassword')}
                            >
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:COLORS.primary}}>Reset here</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom:15}}>
                            <Text style={[styles.title2, {color: colors.title,textAlign:'center',opacity:.5 }]}>Don't have an account?</Text>
                        </View>
                        <Button
                            title={"Create an account"}
                            onPress={() => navigation.navigate('SignUp')}
                            text={COLORS.title}
                            color={COLORS.secondary}
                            style={{borderRadius:52}}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    text:{
        ...FONTS.fontRegular,
        fontSize:14,
        color:COLORS.title,
    },
    title1:{
        ...FONTS.fontPlaywrite,
        fontSize: 24,
        color: COLORS.title,
        marginBottom: 5,
        fontWeight: '700',
        fontStyle: 'normal'
    },
    title2:{
        ...FONTS.fontRegular,
        fontSize: 14,
        color: COLORS.title, 
    },
    title3:{
        ...FONTS.fontMedium,
        fontSize:14,
        color:'#8A8A8A'
    }
})

export default SingIn