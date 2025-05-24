import React, { useRef, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, StyleSheet, TextInput, useWindowDimensions, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { addToCart } from '../../redux/reducer/cartReducer';
import CategoryCart from '../../components/CategoryCart';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Data for each tab
const DataItems = [
    { id: "1", image: IMAGES.Data, title: "DATA Plan 1",coverage : 'Tunisia', Data: "10 Go" , validity: "7 Days" , price: "$10.00" },
    { id: "2", image: IMAGES.Data, title: "DATA Plan 2",coverage : 'Tunisia', Data: "20 Go", validity: "14 Days" , price: "$18.00" },
];

const CallItems = [
    { id: "3", image: IMAGES.call, title: "CALL Package 1",coverage : 'Tunisia', price: "$5", brand: "Local" },
    { id: "4", image: IMAGES.call, title: "CALL Package 2", price: "$7", brand: "International" },
];

const SmsItems = [
    { id: "5", image: IMAGES.sms, title: "SMS Bundle 1", price: "$2", brand: "Standard" },
    { id: "6", image: IMAGES.sms, title: "SMS Bundle 2", price: "$3", brand: "Premium" },
];

// Route components for each tab
const FirstRoute = () => (
    <ScrollView contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }} showsVerticalScrollIndicator={false}>
        <CategoryCart data={DataItems} />
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }} showsVerticalScrollIndicator={false}>
        <CategoryCart data={CallItems} />
    </ScrollView>
);

const ThreeRoute = () => (
    <ScrollView contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }} showsVerticalScrollIndicator={false}>
        <CategoryCart data={SmsItems} />
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Three: ThreeRoute,
});

// Screen props for Services screen
type ServicesScreenProps = StackScreenProps<RootStackParamList, 'Services'>;

const Services = ({ navigation }: ServicesScreenProps) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const { colors }: { colors: any } = theme;

    const sheetRef = useRef<any>(null);

    // Function to add items to cart
    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    };

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'DATA' },
        { key: 'second', title: 'CALLS' },
        { key: 'Three', title: 'SMS' },
    ]);

    return (
        <SafeAreaView style={{ backgroundColor: theme.dark ? colors.background : colors.card, flex: 1 }}>
            <Header title='Services' leftIcon='back' rightIcon3={'cart'} />
            <View style={[GlobalStyleSheet.container, { padding: 0, paddingHorizontal: 30, paddingVertical: 15, backgroundColor: colors.card }]}>
                <View>
                    <TextInput
                        placeholder='Search Best items for You'
                        style={[styles.TextInput, { color: COLORS.title, backgroundColor: '#FAFAFA' }]}
                        placeholderTextColor={'#929292'}
                    />
                    <View style={{ position: 'absolute', top: 17, right: 20 }}>
                        <Feather name='search' size={24} color={'#C9C9C9'} />
                    </View>
                </View>
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0, flex: 1 }]}>
                <TabView
                    style={{ flexGrow: 1 }}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            scrollEnabled={true}
                            indicatorStyle={{ backgroundColor: '#F28134', height: 3 }}
                            tabStyle={{ width: 120 }}
                            style={{ backgroundColor: 'white' }}
                            activeColor={COLORS.primary}
                            inactiveColor="gray"
                        />
                    )}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    TextInput: {
        ...FONTS.fontRegular,
        fontSize: 16,
        color: COLORS.title,
        height: 60,
        borderRadius: 61,
        paddingHorizontal: 40,
        paddingLeft: 30,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#FAFAFA',
    },
});

export default Services;
