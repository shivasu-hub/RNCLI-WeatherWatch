// App.tsx (continued)
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import WeatherCard from '../component/WeatherCard';
import SearchBar from '../component/SearchBar';
import {useSelector} from 'react-redux';
import HourlyReport from '../component/HourlyReport';

const HomeScreen: React.FC = () => {
  const [res, setRes] = useState(null);
  const data = useSelector(state => state.weatherdetail);

  const forecast: any[] = data.data.daily.time.map(
    (time: number, index: number) => ({
      date: time,
      temperature: data.data.daily.temperature_2m_max[index],
      weatherCode: data.data.daily.weather_code[index].toString(),
    }),
  );
  return (
    <View style={styles.container}>
      <SearchBar onLocationSelect={setRes} />
      {res && (
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 40,
          }}>
          {res?.results?.[0].name && (
            <WeatherCard
              location={res?.results?.[0].name}
              temperature={data?.data?.current_weather?.temperature}
            />
          )}
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
            {'Daily Forcast'}
          </Text>
          {res?.results?.[0].name && (
            <FlatList
              data={forecast}
              keyExtractor={(item, index) => item.toString()}
              horizontal
              renderItem={({item}) => <HourlyReport data={item} />}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 30}}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
