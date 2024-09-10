// components/SearchBar.tsx
import React, {useCallback, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useLazyGetLocationQuery} from '../service/modules/Location';
import {useDispatch} from 'react-redux';
import {saveLatLong, saveWeatherData} from '../Store/weatherDetail';
import {getWeatherForecast} from '../service/Config';

interface Props {
  onLocationSelect: any;
}

const SearchBar: React.FC<Props> = ({onLocationSelect}: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [getLocation] = useLazyGetLocationQuery();
  const disPatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const searchAPI = useCallback(async (searchTerm: string) => {
    getLocation({location: searchTerm}).then(res => {
      onLocationSelect(res.data);
      const fetchWeatherForecast = async () => {
        const forecast = await getWeatherForecast(
          res?.data?.results[0].latitude,
          res?.data?.results[0].longitude,
        );

        disPatch(saveWeatherData({data: forecast}));
      };

      fetchWeatherForecast();

      disPatch(
        saveLatLong({
          location: {
            lat: res?.data?.results[0].latitude,
            long: res?.data?.results[0].longitude,
          },
        }),
      );
    });
  }, []);

  const handleSearch = (searchQuery: string) => {
    searchAPI(searchQuery);
  };

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          handleSearch(text);
        }}
        placeholder="Search for a location"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },
});
export default SearchBar;
