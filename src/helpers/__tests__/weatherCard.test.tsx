// components/WeatherCard.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../../component/WeatherCard';

describe('WeatherCard', () => {
  it('renders location, temperature, and weather image', () => {
    const { getByText } = render(
      <WeatherCard location="London" temperature={20}  />
    );
    expect(getByText('London')).toBeTruthy();
    expect(getByText('20°C')).toBeTruthy();
  });
});