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
  Data?: string;
  validity?: string;
  image?: any;
  product?: any;
  Myorder?: any;
  Plans?:any;
  Home?:any;
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
  Data,
  validity,
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
  const { colors } : {colors : any} = theme;
  const [show, setshow] = useState(false)

  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress} 
    style={{flexDirection:'row',width:'100%',alignItems:'flex-start',backgroundColor:'#dcd9d32c' }}
    >
      <View style={{ width: "40%", alignItems: "center"  }}>
        <View
          style={{
            height: undefined,
            width: "100%",
            backgroundColor: COLORS.primary,
            borderRadius: 22,
            aspectRatio: 1 / 1.2,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image
            style={{ height: undefined, width: "100%", aspectRatio: 1 / 1.3  }}
            source={image}
          />
        </View>
      </View>
      <View
        style={{
          width: "60%",
          paddingHorizontal: 20,
          paddingRight: product ? 10 : 0,
        }}
      >
        <View>
          <Text
            style={{
              ...FONTS.fontMedium,
              fontSize: 16,
              color: colors.title,
              paddingRight: 40,
            }}
          >
            {title}
          </Text>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}} >
            <Text style={{...FONTS.fontRegular,fontSize:15}}>Coverage</Text>
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
          <View style={{flexDirection:'row',alignItems:'center',gap:5}} >
            <Text style={{...FONTS.fontRegular,fontSize:15}}>Data</Text>
          <Text
            style={{
              ...FONTS.fontRegular,
              fontSize: 15,
              color: theme.dark ? "rgba(255,255,255,.7)" : "#6A6A6A",
             
            }}
          >
            {Data}
          </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}} >
            <Text style={{...FONTS.fontRegular,fontSize:15}}>Validity :</Text>
          <Text
            style={{
              ...FONTS.fontRegular,
              fontSize: 15,
              color: theme.dark ? "rgba(255,255,255,.7)" : "#6A6A6A",
             
            }}
          >
            {validity}
          </Text>
          </View>
        </View>
        
        <View style={[GlobalStyleSheet.flex, { marginTop: Myorder ? 45 : 30 }]}>
          <Text
            style={{ ...FONTS.fontSemiBold, fontSize: 18, color: colors.title }}
          >
            {price}
          </Text>
          {product ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setshow(!show);
                onPress2();
              }}
              style={{
                padding: 10,
                paddingHorizontal: 25,
                backgroundColor: show ? COLORS.primary : "#E5F5F0",
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Image
                style={[
                  GlobalStyleSheet.image2,
                  { tintColor: show ? COLORS.card : COLORS.primary },
                ]}
                source={IMAGES.shoppingbag}
              />
              <Text
                style={{
                  ...FONTS.fontMedium,
                  fontSize: 16,
                  color: show ? COLORS.card : COLORS.primary,
                }}
              >
                Buy
              </Text>
            </TouchableOpacity>
          ) : Myorder ? (
            completed ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress4}
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                  backgroundColor: COLORS.primary,
                  borderRadius: 30,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: COLORS.card,
                    lineHeight: 21,
                  }}
                >
                  {btntitle}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress3}
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  backgroundColor: COLORS.primary,
                  borderRadius: 30,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: COLORS.card,
                    lineHeight: 21,
                  }}
                >
                  {btntitle}
                </Text>
              </TouchableOpacity>
            )
          ) : (
            <Text
              style={{
                ...FONTS.fontMedium,
                fontSize: 18,
                color: COLORS.primary,
              }}
            >
              {countnumber}
            </Text>
          )}
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
