import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../Button/Button';
import { IMAGES } from '../../constants/Images';
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  image: any;
  buttonColor: string;
  buttonTextColor: string;
}
const PricingStyle2: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  image,
  buttonColor,
  buttonTextColor,
}) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  return (
    <View
      style={{
        padding: 30,
        paddingTop: 60,
        position: 'relative',
        marginTop: 50,
        borderRadius: SIZES.radius,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.borderColor,
        maxWidth: 320,
        width: '100%',
        shadowColor: 'rgba(0,0,0,.6)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        margin: 10, 
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.card,
            position: 'absolute',
            top: -100,
            shadowColor: 'rgba(0,0,0,.6)',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}
        >
          <Image
            style={{
              height: 44,
              width: 44,
            }}
            source={image}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <Text style={{ ...FONTS.h4, color: colors.title, marginBottom: 5 }}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 5 }}>
          <Text style={{ ...FONTS.h2, lineHeight: 35, color: colors.title }}>{price}</Text>
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontSemiBold,
              fontSize: 16,
              color: colors.title,
              marginBottom: 5,
              marginLeft: 3,
            }}
          >
            /month
          </Text>
        </View>
        <Text style={{ ...FONTS.font, textAlign: 'center', color: colors.text, marginBottom: 20 }}>
          {description}
        </Text>
        <Button title={'BUY NOW'} text={buttonTextColor} color={buttonColor} />
      </View>
    </View>
  );
};
const PricingCards = () => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <PricingStyle2
        title="20 GO"
        price="$10"
        description="Offer 3JAB, 20GB of high-speed internet"
        image={IMAGES.orange}
        buttonColor={COLORS.primary}
        buttonTextColor={COLORS.white}
      />
      <PricingStyle2
        title="30 GO"
        price="$12"
        description="Offer HBAL, 30GB of high-speed internet"
        image={IMAGES.ooredoo} 
        buttonColor={COLORS.primary}
        buttonTextColor={COLORS.white}
      />
    </View>
  );
};

export default PricingCards;