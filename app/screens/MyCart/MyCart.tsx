import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, FlatList, Image } from "react-native";
import Header from "../../layout/Header";
import { useSelector } from "react-redux";
import { ListItem, Text } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { IMAGES } from "../../constants/Images";
type MyCartScreenProps = StackScreenProps<RootStackParamList, "MyCart">;
const MyCart = ({ navigation }: MyCartScreenProps) => {
  const cart = useSelector((state: any) => state.cart.cart);
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const defaultData = [
    {
      id: "1",
      name: "Data",
      value: "200.00 GO",
      image: IMAGES.Network,
    },
    {
      id: "2",
      name: "Calls",
      value: "50.00 Min",
      image: IMAGES.call,
    },
    {
      id: "3",
      name: "SMS",
      value: "10.00 SMS",
      image: IMAGES.sms,
    },
  ];
  const data = cart.length > 0
    ? cart.map((item: { image: any }) => ({
        ...item,
        image: item.image || IMAGES.Network,
      }))
    : defaultData;

  const renderItem = ({ item }: { item: any }) => (
    <View
      style={{
        width: "90%",
        marginVertical: 10,
        alignSelf: "center", 
      }}
    >
      <ListItem
        linearGradientProps={{
          colors: ["rgb(249, 128, 0)", "rgb(241, 208, 173)"],
        }}
        ViewComponent={LinearGradient}
        containerStyle={{
          borderRadius: 80,
          paddingVertical: 35,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.image}
          style={{ width: 35, height: 36, borderRadius: 12, marginRight: 10 }}
        />
        <ListItem.Content style={{ flex: 0 }}>
          <ListItem.Title>
            <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>
              {item.name}
            </Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text style={{ color: "black", textAlign: "center" }}>
              {item.value}
            </Text>
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" style={{ marginLeft: 10 }} />
      </ListItem>
    </View>
  );
  return (
    <View style={{ backgroundColor: colors.background, flex: 1  }}>
      <Header
      title="My eSIMs"
      leftIcon="back"
     titleRight
/>
      <FlatList
      style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ 
            padding: 10 ,
            flexGrow: 1, 
            justifyContent: "center", }}
      />
    </View>
  );
};
export default MyCart;