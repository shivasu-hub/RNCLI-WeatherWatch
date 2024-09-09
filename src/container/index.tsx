// App.tsx (continued)
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {getWeatherForecast} from '../service/api';
import WeatherCard from '../component/WeatherCard';
import SearchBar from '../component/SearchBar';

const HomeScreen: React.FC = () => {
  const [res, setRes] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      const forecast = await getWeatherForecast(res?.latitude, res?.longitude);
      setWeatherForecast(forecast);
    };

    fetchWeatherForecast();
  }, [res]);

  return (
    <View style={styles.container}>
      <SearchBar onLocationSelect={setRes} />
      {weatherForecast && (
        <>
          <WeatherCard
            location={res?.name}
            temperature={weatherForecast?.current?.temperature_2m}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', flex: 1, alignSelf: 'center'},
});

export default HomeScreen;
