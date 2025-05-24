import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyleSheet } from '../constants/StyleSheet';
import Cardstyle4 from './Card/Cardstyle4';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducer/cartReducer';
import { addTowishList } from '../redux/reducer/wishListReducer';
import CardService from './Card/CardService';

const CategoryCart = ({data } : any) => {
    
    const dispatch = useDispatch();

    const navigation = useNavigation<any>();

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    const addItemToWishList = (data: any) => {
        dispatch(addTowishList(data));
    }

    return (
        <View style={[GlobalStyleSheet.container,{padding:0}]}>
            <View style={{  }}>
                <View style={[GlobalStyleSheet.container,{paddingHorizontal:15}]}>
                    {data.map((data:any, index:any) => {
                        return (
                            <View key={index} style={{marginBottom:35}}>
                                <CardService
                                    id={data.id}
                                    image={data.image}
                                    coverage={data.coverage} 
                                    Data={data.Data} 
                                    validity={data.validity} 
                                    price={data.price}
                                    countnumber={data.countnumber} 
                                    title={data.title}
                                    onPress={() => navigation.navigate('PlanDetails')}
                                    
                                    product={true}                                                               
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}

export default CategoryCart