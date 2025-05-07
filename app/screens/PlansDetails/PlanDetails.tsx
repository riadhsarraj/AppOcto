import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { IMAGES } from "../../constants/Images";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Button from "../../components/Button/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const ItemImages = [IMAGES.item4, IMAGES.item5, IMAGES.item6];

type PlanDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "PlanDetails"
>;

const Data = [
  "Access to all basic features",
  "Basic reporting and analytics",
  "Up to 10 individual users",
  "20 GB individual data each user",
  "Basic chat and emails support",
];
const PlanDetails = ({ navigation }: PlanDetailsScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const addItemToCart = () => {
    // TODO: Implement cart functionality
    console.log("Adding item to cart");
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            styles.imagecard,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Image
            style={{
              height: 350,
              width: "50%",
              resizeMode: "contain",
            }}
            source={IMAGES.orange}
          />

          <View style={[styles.toparre]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.backbtn,
                { backgroundColor: "rgba(246,246,246,.3)" },
              ]}
            >
              <Feather size={24} color={COLORS.card} name={"arrow-left"} />
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.fontSemiBold,
                fontSize: 20,
                color: COLORS.card,
                marginLeft: -50
              }}
            >
              Details
            </Text>
            <View></View>
          </View>
        </View>
        <View
          style={[
            styles.bottomcard,
            { backgroundColor: theme.dark ? colors.background : colors.card },
          ]}
        >
          <View style={[GlobalStyleSheet.container, { paddingHorizontal: 30 }]}>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <View
                style={{
                  height: 6,
                  width: 60,
                  borderRadius: 20,
                  backgroundColor: "#DDDDDD",
                }}
              />
            </View>

            <Text style={[styles.brandTitle, { color: colors.title }]}>
              Orange
            </Text>
            <View style={{ paddingHorizontal: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 40,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                      resizeMode: "contain",
                      marginRight: 8,
                    }}
                    source={IMAGES.Coverage}
                  />
                  <Text
                    style={[
                      styles.subtitle,
                      {
                        color: theme.dark ? "rgba(255,255,255,.7)" : "#4E4E4E",
                      },
                    ]}
                  >
                    Coverage :
                  </Text>
                </View>
                <Text
                  style={[
                    styles.subtitle,
                    { color: theme.dark ? "rgba(255,255,255,.7)" : "#4E4E4E" },
                  ]}
                >
                  Tunisia
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                      resizeMode: "contain",
                      marginRight: 8,
                    }}
                    source={IMAGES.Data}
                  />
                  <Text
                    style={[
                      styles.subtitle,
                      {
                        color: theme.dark ? "rgba(255,255,255,.7)" : "#4E4E4E",
                      },
                    ]}
                  >
                    Data :
                  </Text>
                </View>
                <Text
                  style={[
                    styles.subtitle,
                    { color: theme.dark ? "rgba(255,255,255,.7)" : "#4E4E4E" },
                  ]}
                >
                  1 GB
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                      resizeMode: "contain",
                      marginRight: 8,
                    }}
                    source={IMAGES.Validity}
                  />
                  <Text
                    style={[
                      styles.subtitle,
                      {
                        color: theme.dark ? "rgba(255,255,255,.7)" : "#4E4E4E",
                      },
                    ]}
                  >
                    Validity :
                  </Text>
                </View>
                <Text
                  style={[
                    styles.subtitle,
                    { color: theme.dark ? "rgba(255,255,255,.7)" : "#4E4E4E" },
                  ]}
                >
                  7 Days
                </Text>
              </View>
            </View>

            <View style={[GlobalStyleSheet.flex, { paddingVertical: 35 }]}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Text
                    style={[
                      styles.subtitle2,
                      { fontSize: 14, color: colors.title },
                    ]}
                  >
                    $
                  </Text>
                  <Text
                    style={[
                      styles.subtitle2,
                      { color: colors.title, lineHeight: 30 },
                    ]}
                  >
                    4.8
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 16,
                    color: "#9A9A9A",
                  }}
                >
                  $8.0
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.subtitle2,
                { marginTop: -10, color: colors.title, lineHeight: 30 },
              ]}
            >
              Additional Information
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background,
            marginBottom : 10
          }}
        >
          <View
            style={{
              padding: 30,
              borderWidth: 1,
              borderColor: COLORS.primary,
              backgroundColor: colors.card,
              maxWidth: 320,
              width: "100%",
              borderRadius: SIZES.radius,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  height: 24,
                  width: 24,
                  resizeMode: "contain",
                }}
                source={IMAGES.Network}
              />
              <Text
                style={{ ...FONTS.font, color: colors.title, marginLeft: 10 , fontWeight: 'bold' }}
              >
                Network
              </Text>
            </View>
            <Text style={{ ...FONTS.font, color: colors.text, marginLeft: 35 }}>
              orange
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  height: 24,
                  width: 24,
                  resizeMode: "contain",
                }}
                source={IMAGES.plan}
              />
              <Text
                style={{ ...FONTS.font, color: colors.title, marginLeft: 10 , fontWeight: 'bold'}}
              >
                Plan Type
              </Text>
            </View>
            <Text style={{ ...FONTS.font, color: colors.text, marginLeft: 35 }}>
              Data Only
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  height: 24,
                  width: 24,
                  resizeMode: "contain",
                }}
                source={IMAGES.Validity}
              />
              <Text
                style={{ ...FONTS.font, color: colors.title, marginLeft: 10 , fontWeight: 'bold'}}
              >
                Validity Policy
              </Text>
            </View>
            <Text style={{ ...FONTS.font, color: colors.text, marginLeft: 35 }}>
              The validity period begins when the eSIM connects to a mobile
              network within its coverage area. If you install the eSIM outside
              the coverage area, it will connect to a network once you arrive.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[GlobalStyleSheet.container, { paddingTop: 0 }]}>
        <Button
          onPress={() => navigation.navigate("Confirmation")}
          title="Buy Now"
          color={COLORS.primary}
          text={COLORS.card}
          style={{ borderRadius: 50 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subCard: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.inputborder,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 5,
  },
  imagecard: {
    width: "100%",
    height: SIZES.height / 2,
    paddingTop: 60,
    backgroundColor: COLORS.primaryLight,
    paddingBottom: 30,
  },
  backbtn: {
    height: 45,
    width: 45,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  toparre: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomcard: {
    backgroundColor: COLORS.card,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -60,
  },
  rattingcard: {
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: "#FF8730",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255,135,48,.4)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.34,
    shadowRadius: 31.27,
    elevation: 8,
    position: "absolute",
    right: 40,
    top: -25,
  },
  subtitle: {
    ...FONTS.fontRegular,
    fontSize: 14,
    color: COLORS.title,
  },
  bottombtn: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    height: 65,
    borderRadius: 50,
    padding: 0,
  },
  brandTitle: {
    ...FONTS.fontMedium,
    fontSize: 20,
    color: COLORS.title,
  },
  subtitle2: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: COLORS.title,
  },
});

export default PlanDetails;
