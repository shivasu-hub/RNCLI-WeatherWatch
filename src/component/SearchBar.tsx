// components/SearchBar.tsx
import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {getLatitudeLongitude} from '../service/api';

interface Props {
  onLocationSelect: any;
}

const SearchBar: React.FC<Props> = ({onLocationSelect}: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = async () => {
    const response = await getLatitudeLongitude(searchQuery);
    onLocationSelect(response);
  };

  useEffect(() => {
    handleSearch();
  }, [handleSearch, searchQuery]);

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
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
