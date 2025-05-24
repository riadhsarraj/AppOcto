import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { IMAGES } from "../../constants/Images";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
type Props = {
  id: string;
  title: string;
  btntitle?: string;
  price: string;
  coverage?: string;
  Network?: string;
  Services?: string;
  image?: any;
  product?: any;
  Myorder?: any;
  Plans?: any;
  Home?: any;
  completed?: any;
  countnumber?: string;
  onPress?: (e: any) => void;
  onPress2?: any;
  onPress3?: (e: any) => void;
  onPress4?: (e: any) => void;
  onPress5?: (e: any) => void;
};

const Cardstyle4 = ({
  title,
  image,
  Network,
  Services,
  countnumber,
  price,
  onPress,
  coverage,
  product,
  onPress2,
  Myorder,
  btntitle,
  completed,
  Home,

  onPress3,
  onPress4,
}: Props) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [show, setshow] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-start",
        backgroundColor: "rgba(192, 86, 0, 0.06)",
      }}
    >
      <View style={{ width: "40%", alignItems: "center" }}>
        <View
          style={{
            height: undefined,
            width: "100%",
            backgroundColor: "rgba(250, 126, 25, 0.3)",
            borderRadius: 22,
            aspectRatio: 1 / 1.2,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: "80%",
            }}
            resizeMode="contain"
            source={image}
          />
        </View>
      </View>
      <View  style={{
      paddingHorizontal: 20, 
    }}>
  <Text
    style={{
      ...FONTS.fontBold,
      fontSize: 18,
      color: colors.title,
      paddingRight: 40,
    }}
  >
    {title}
  </Text>

  <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginTop: 8 }}>
    <Text style={{ ...FONTS.fontRegular, fontSize: 15 }}>Coverage</Text>
    <Text
      style={{
        ...FONTS.fontRegular,
        fontSize: 15,
        color: theme.dark ? "rgba(255,255,255,.7)" : "#6A6A6A",
      }}
    >
      {coverage}
    </Text>
  </View>

  <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginTop: 8 }}>
    <Text style={{ ...FONTS.fontRegular, fontSize: 15 }}>Network</Text>
    <Text
      style={{
        ...FONTS.fontRegular,
        fontSize: 15,
        color: theme.dark ? "rgba(255,255,255,.7)" : "#6A6A6A",
      }}
    >
      {Network}
    </Text>
  </View>

  <View
    style={{
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 5,
      flexWrap: "wrap",
      marginTop: 8, // 👈 espacement vertical ajouté
    }}
  >
    <Text style={{ ...FONTS.fontRegular, fontSize: 15 }}>Services :</Text>
    <Text
      style={{
        ...FONTS.fontRegular,
        fontSize: 15,
        color: theme.dark ? "rgba(255,255,255,.7)" : "#6A6A6A",
        flexShrink: 1,
      }}
    >
      {Services}
    </Text>
  </View>
</View>

    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  coveragesubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
});

export default Cardstyle4;
