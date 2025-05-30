import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../layout/Header';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Cardstyle1 from '../../components/Card/Cardstyle1';

const MyorderData = [
    {
        id: "30",
        image: IMAGES.orange,
        Brande: "Orange",
        title: '10 Go',
        price: "$11.6",
        validity: "7 Days",
      
    },
    {
        id: "31",
        image: IMAGES.orange,
        Brande: "Orange",
        title: '20 Go',
        price: "$19.6",
        validity: "14 Days",
    },
];

type MyorderScreenProps = StackScreenProps<RootStackParamList, 'Myorder'>;

const Myorder = ({ navigation }: MyorderScreenProps) => {
    const theme = useTheme();
    const { colors }: { colors: any } = theme;

    const [orderData, setOrderData] = useState(MyorderData);
    const [activeFilter, setActiveFilter] = useState('all'); // Track active filter

    const filterData = (val: any) => {
        setActiveFilter(val); // Update active filter when a filter is selected
        if (val === 'all') {
            setOrderData(MyorderData);
        } else {
            const newArry = MyorderData.filter((e) => e.status === val);
            setOrderData(newArry);
        }
    };

    return (
        <View style={{ backgroundColor: theme.dark ? colors.background : colors.card, flex: 1 }}>
            <Header
                title="My Order"
                leftIcon="back"
                rightIcon4="home"
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
                <View style={[GlobalStyleSheet.container, { paddingTop: 10, paddingHorizontal: 10 }]}>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                {orderData.map((data: any, index) => {
                                    return (
                                        <View key={index} style={{ marginBottom: 30 }}>
                                            <Cardstyle1
                                                id={data.id}
                                                Myorder={true}
                                                Brande={data.Brande}
                                                validity={data.validity}
                                                title={data.title}
                                                price={data.price}
                                                image={data.image}
                                            />
                                        </View>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            {/* New Order Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.newOrderButton, { backgroundColor: "#F28134"}]}
                    onPress={() => navigation.navigate('NewOrder')} // Adjust 'NewOrder' to your target screen name
                >
                    <Text style={[styles.buttonText, { color: colors.card }]}>BUY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    TopbarCenterLine: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    newOrderButton: {
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: FONTS.medium, // Adjust to your theme's font
        textAlign: 'center',
    },
});

export default Myorder;