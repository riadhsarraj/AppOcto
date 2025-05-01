import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { addTowishList } from "../../redux/reducer/wishListReducer";
import ImageSwiper from "../../components/ImageSwiper";
import ListStyle1 from "../../components/List/ListStyle1";
import { openDrawer } from "../../redux/actions/drawerAction";

const ArrivalData = [
  {
    id: "1",
    title: "Local eSIMs",
    image: IMAGES.local,
  },
  {
    id: "2",
    title: "Regional eSIMs",

    image: IMAGES.regional,
  },
  {
    id: "3",
    title: "Global eSIMs",

    image: IMAGES.global,
  },
];
const SwiperData = [
  {
    id: "1",
    image: IMAGES.getsim,
    title: "How to get your free E-SIM",
  },
  {
    id: "2",
    image: IMAGES.money,
    title: "Get €3 for each friend who tries app. Invite now",
  },
];

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;
export const Home = ({ navigation }: HomeScreenProps) => {
  const [selectedType, setSelectedType] = useState("local");
  const dispatch = useDispatch();
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const addItemToWishList = (data: any) => {
    dispatch(addTowishList(data));
  };

  const renderLocationContent = () => {
    switch (selectedType) {
      case "local":
        return (
           <View style={GlobalStyleSheet.cardBody}>
            <TouchableOpacity onPress={() => navigation.navigate("Myorder")} >
              <ListStyle1 arrowRight image={IMAGES.tunisia} title={"Tunisia"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Myorder")}>
              <ListStyle1 arrowRight image={IMAGES.turkey} title={"Turkey"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Myorder')}>
              <ListStyle1 arrowRight image={IMAGES.france} title={"France"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Myorder')}>
              <ListStyle1 arrowRight image={IMAGES.italy} title={"Italy"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Myorder')}>
              <ListStyle1 arrowRight image={IMAGES.spain} title={"Spain"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Myorder')}>
              <ListStyle1 arrowRight image={IMAGES.germany} title={"Germany"} />
            </TouchableOpacity>
          </View>
        );
      case "regional":
        return (
          <View style={GlobalStyleSheet.cardBody}>
            <ListStyle1 arrowRight image={IMAGES.regional} title={"Europe"} />
            <ListStyle1 arrowRight image={IMAGES.regional} title={"Asia"} />
            <ListStyle1 arrowRight image={IMAGES.regional} title={"Africa"} />
            <ListStyle1 arrowRight image={IMAGES.regional} title={"Americas"} />
          </View>
        );
      case "global":
        return (
          <View style={GlobalStyleSheet.cardBody}>
            <ListStyle1 arrowRight image={IMAGES.global} title={"Worldwide Coverage"} />
            <ListStyle1 arrowRight image={IMAGES.global} title={"Global Plan"} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ backgroundColor: colors.card, flex: 1 }}>
      <View style={{}}>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 30, padding: 0, paddingTop: 30 },
          ]}
        >
          <View style={[GlobalStyleSheet.flex]}>
            <View>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                Good Morning
              </Text>
              <Text
                style={{
                  ...FONTS.fontSemiBold,
                  fontSize: 24,
                  color: colors.title,
                }}
              >
                Williams
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
                activeOpacity={0.5}
                style={[GlobalStyleSheet.background3, {}]}
              >
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                  ]}
                  source={IMAGES.Notification}
                />
                <View
                  style={[
                    styles.notifactioncricle,
                    {
                      backgroundColor: colors.card,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 13,
                      width: 13,
                      borderRadius: 13,
                      backgroundColor: COLORS.primary,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.openDrawer()}
                style={[GlobalStyleSheet.background3, {}]}
              >
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                  ]}
                  source={IMAGES.grid6}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 0, paddingHorizontal: 30, paddingTop: 15 },
          ]}
        >
          <View>
            <TextInput
              placeholder="Search Your Countries"
              style={[
                styles.TextInput,
                { color: COLORS.title, backgroundColor: "#FAFAFA" },
              ]}
              placeholderTextColor={"#929292"}
            />
            <View style={{ position: "absolute", top: 15, right: 20 }}>
              <Feather name="search" size={24} color={"#C9C9C9"} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
            <ImageSwiper data={SwiperData} />
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 0, paddingTop: 0 },
          ]}
        >
          <View
            style={[
              GlobalStyleSheet.flex,
              { paddingHorizontal: 30, marginTop: -20 },
            ]}
          >
            <Text
              style={[
                styles.brandsubtitle3,
                { fontSize: 18, color: colors.title },
              ]}
            >
              Location
            </Text>
          </View>
          <View style={{ marginHorizontal: -25, paddingHorizontal: 15 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 30 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  marginRight: 10,
                  marginBottom: 20,
                }}
              >
                {ArrivalData.map((data: any, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setSelectedType(data.id === "1" ? "local" : data.id === "2" ? "regional" : "global");
                        
                      }}
                      key={index}
                      style={[
                        styles.arrivaldata,
                        {
                          backgroundColor: theme.dark
                            ? colors.background
                            : colors.card,
                          shadowColor: "rgba(4,118,78,.6)",
                          borderWidth: selectedType === (data.id === "1" ? "local" : data.id === "2" ? "regional" : "global") ? 2 : 1,
                          borderColor: selectedType === (data.id === "1" ? "local" : data.id === "2" ? "regional" : "global") ? COLORS.primary : "#EFEFEF",
                        },
                      ]}
                    >
                      <View
                        style={[
                          GlobalStyleSheet.flexcenter,
                          { gap: 20, justifyContent: "flex-start" },
                        ]}
                      >
                        <Image
                          style={[GlobalStyleSheet.image3]}
                          source={data.image}
                        />
                        <View>
                          <Text
                            style={{
                              ...FONTS.fontMedium,
                              fontSize: 16,
                              color: colors.title,
                            }}
                          >
                            {data.title}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
        <View id="location">
          <View
            style={[
              GlobalStyleSheet.container,
              { paddingHorizontal: 0, paddingTop: 0, paddingBottom: 10 },
            ]}
          >
            <View style={[GlobalStyleSheet.flex, { paddingHorizontal: 30 }]}>
              <Text
                style={[
                  styles.brandsubtitle3,
                  { fontSize: 18, color: colors.title },
                ]}
              >
                {selectedType === "local" ? "Popular Countries" : 
                 selectedType === "regional" ? "Regional Coverage" : 
                 "Global Coverage"}
              </Text>
            </View>
          </View>
          <View
            style={[
              GlobalStyleSheet.card,
              { backgroundColor: theme.dark ? colors.card : colors.background },
            ]}
          >
            {renderLocationContent()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notifactioncricle: {
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 2,
    right: 2,
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  TextInput: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    height: 60,
    borderRadius: 61,
    paddingHorizontal: 40,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    backgroundColor: "#FAFAFA",
  },
  brandsubtitle2: {
    ...FONTS.fontSemiBold,
    fontSize: 12,
    color: COLORS.card,
  },
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
  title1: {
    ...FONTS.fontBold,
    fontSize: 28,
    color: COLORS.title,
  },
  title2: {
    ...FONTS.fontRegular,
    fontSize: 12,
    color: COLORS.title,
  },
  title3: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: "#8ABE12",
    //textAlign:'right'
  },
  colorCard: {},
  colorCardTitle: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
    lineHeight: 20,
    textAlign: "center",
  },
  arrivaldata: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    width: 199,
    paddingHorizontal: 10,
    paddingLeft: 25,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    shadowColor: "rgba(4,118,78,.6)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 18.27,
    elevation: 4,
  },
});

export default Home;
