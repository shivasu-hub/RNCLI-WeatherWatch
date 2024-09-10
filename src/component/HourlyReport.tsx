import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import getWeatherImage from '../helpers/getWeatherImage';

const HourlyReport = data => {
  const {date, temperature, weatherCode} = data?.data;
  const weatherImage = getWeatherImage(weatherCode);

  return (
    <View style={style.main}>
      <Text style={style.text}>{new Date(date).toLocaleDateString()}</Text>
      <Image source={{uri: weatherImage}} style={style.image} />
      <Text style={style.text}>{temperature}°C</Text>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginHorizontal: 10,
    backgroundColor: 'lightblue',
  },
  text: {fontSize: 16},
  image: {width: 50, height: 50},
});
export default HourlyReport;
