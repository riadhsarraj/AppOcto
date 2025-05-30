import { View, Text, SafeAreaView, TouchableOpacity,ImageBackground, Image, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import Input from '../../components/Input/Input'
import { IMAGES } from '../../constants/Images'
import Button from '../../components/Button/Button'
import { authService } from '../../services/auth.service';
import Axios from 'axios'
import { API_URL } from '@env';

type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation} : SignUpScreenProps) => {

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);
    const [isFocused3 , setisFocused3] = useState(false);
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const response = async()=> await Axios.post(`${API_URL}/auth/signup`, {
        name,
        password,
        email,
      }).then((res)=>{
        console.log(res);
        navigation.navigate('SingIn');
      }).catch((err)=>{
        console.log(err);
      });
    
  return (
    <ImageBackground 
    source={IMAGES.back} 
    style={{flex:1}}
    resizeMode="cover"
>
    <SafeAreaView style={{flex:1}}>
        <View style={[GlobalStyleSheet.container,GlobalStyleSheet.flexcenter,{paddingVertical:50}]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.5}
                style={[styles.imagebackground,{
                    backgroundColor:'#F6F6F6',
                    zIndex:99
                }]}
            >
                <Feather name='arrow-left' size={24} color={COLORS.title}/>
            </TouchableOpacity>
            <View style={{flex:1,alignItems:'center',marginLeft:0,flexDirection:'row',gap:10}}>
                <Image
                    style={{height:90,width:120,resizeMode:'contain'}}
                    source={theme.dark ? IMAGES.logosim :IMAGES.logosim}
                />
                <Text style={[styles.title1,{color:colors.title}]}>Octo-Sim</Text>
            </View>
        </View>
        <ScrollView style={{flexGrow:1,}} showsVerticalScrollIndicator={false}>
            <View style={[GlobalStyleSheet.container,{flexGrow:1,paddingBottom:0,paddingHorizontal:30,paddingTop:0}]}>
                <View style={{}}>
                    <View style={{marginBottom:30}}>
                        <Text style={[styles.title1,{color:colors.title}]}>Create an account</Text>
                    </View>
                    <View style={[GlobalStyleSheet.container,{padding:0}]}>
                        <Text style={[styles.title3,{color:'#8A8A8A'}]}>Username</Text>
                    </View>
                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Input
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            onChangeText={setUsername}
                            isFocused={isFocused}
                            inputBorder
                            placeholder="Enter your username"
                            value={name}
                        />
                    </View>
                    <View style={[GlobalStyleSheet.container,{padding:0}]}>
                        <Text style={[styles.title3,{color:'#8A8A8A'}]}>Email</Text>
                    </View>
                    <View style={{ marginBottom: 20,marginTop:10 }}>
                        <Input
                            onFocus={() => setisFocused2(true)}
                            onBlur={() => setisFocused2(false)}
                            backround={colors.card}
                            onChangeText={setEmail}
                            isFocused={isFocused2}
                            inputBorder
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            value={email}
                        />
                    </View>
                    <View style={[GlobalStyleSheet.container,{padding:0}]}>
                        <Text style={[styles.title3,{color:'#8A8A8A'}]}>Password</Text>
                    </View>
                    <View style={{ marginBottom: 10,marginTop:10 }}>
                        <Input
                            onFocus={() => setisFocused3(true)}
                            onBlur={() => setisFocused3(false)}
                            backround={colors.card}
                            onChangeText={setPassword}
                            isFocused={isFocused3}
                            type={'password'}
                            inputBorder
                            placeholder="Enter your password"
                            value={password}
                        />
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <Button
                        title={"Sign Up"}
                        color={COLORS.primary}
                        onPress={response}
                        style={{borderRadius:52}}
                    />
                    <View style={{marginTop:10}}>
                        <Text style={[styles.title2,{color:theme.dark ? 'rgba(255,255,255,0.5)':'rgba(0,0,0,0.5)',textAlign:'center'}]}>By tapping "Sign Up" you accept our <Text style={[styles.title1,{fontSize:14,color:COLORS.primary}]}>terms</Text> and <Text style={[styles.title1,{fontSize:14,color:COLORS.primary}]}>condition</Text></Text>
                    </View>
                </View>
                {error ? (
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</Text>
                ) : null}
            </View>
        </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    title1:{
        ...FONTS.fontSemiBold,
         fontSize: 24,
        color: COLORS.title,
        marginBottom: 5 
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
    },
    imagebackground:{
        height:46,
        width:46,
        borderRadius:50,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default SignUp