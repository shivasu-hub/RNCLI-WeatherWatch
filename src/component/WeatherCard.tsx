// components/WeatherCard.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  location: string;
  temperature: number;
}

export const WeatherCard: React.FC<Props> = ({location, temperature}) => {
  return (
    <View>
      <Text testID="location" style={styles.text}>
        {location}
      </Text>
      <Text testID="tempText" style={styles.text}>
        {temperature}°C
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {color: 'black', fontSize: 20},
});
export default WeatherCard;
