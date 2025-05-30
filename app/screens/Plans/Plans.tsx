import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../../layout/Header";
import { IMAGES } from "../../constants/Images";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Cardstyle4 from "../../components/Card/Cardstyle4";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Button from "../../components/Button/Button";

const PlansData = [
  {
    id: "30",
    image: IMAGES.orange,
    title: "Orange",
    coverage: "Tunisia",
    Network: "4G/5G",
    Services: "Data, Calls, SMS",
  },
  {
    id: "31",
    image: IMAGES.ooredoo,
    title: "Ooredoo",
    coverage: "Tunisia",
    Network: "4G/5G",
    Services: "Data, Calls, SMS",
  },
  {
    id: "32",
    image: IMAGES.telecom,
    title: "Telecom",
    coverage: "Tunisia",
    Network: "4G/5G",
    Services: "Data, Calls, SMS",
  },
];

type PlansScreenProps = StackScreenProps<RootStackParamList, "Plans">;

const Plans = ({ navigation }: PlansScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [orderData, setOrderData] = useState(PlansData);

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Tunisia" leftIcon="back" rightIcon4="home" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.bannerContainer}>
          <Text style={[FONTS.h5, styles.bannerText]}>
            🎁 Check out our latest offers
          </Text>
          <Button
            title={"Our Offers"}
            color="rgba(126, 61, 0, 0.56)"
            onPress={() => navigation.navigate("Offer")}
          />
        </View>
        <View style={styles.cardsWrapper}>
          {orderData.map((data, index) => (
            <View key={index} style={styles.cardContainer}>
              <Cardstyle4
                      id={data.id}
                      title={data.title}
                      coverage={data.coverage}
                      Network={data.Network}
                      Services={data.Services}
                      image={data.image}
                      onPress={() => navigation.navigate("Services")}
                      onPress3={() => navigation.navigate("Trackorder")}
                      onPress4={() => navigation.navigate("Writereview")} price={""}              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(255, 123, 0, 0.78)",
    borderRadius: 16,
    alignItems: "center",
  },
  bannerText: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  cardsWrapper: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
  },
});

export default Plans;