import React from 'react';
import {render, screen} from '@testing-library/react-native';
import getWeatherImage from '../helpers/getWeatherImage';
import HourlyReport from './HourlyReport';

jest.mock('../helpers/getWeatherImage', () => ({
  getWeatherImage: jest.fn(),
}));

describe('WeatherCard Component', () => {
  const mockWeatherData: any = {
    date: '2024-09-16T02:02:02Z',
    temperature: '35',
    weatherCode: '56',
  };

  it('renders weather data correctly', () => {
    (getWeatherImage as jest.Mock).mockReturnValue(
      'http://openweathermap.org/img/wn/01d@2x.png',
    );

    render(<HourlyReport data={mockWeatherData} />);
    expect(
      screen.getByText(new Date(mockWeatherData.date).toLocaleDateString()),
    ).toBeTruthy();
    expect(screen.getByText(`${mockWeatherData.temperature}°C`)).toBeTruthy();
  });

  it('run when weatherCode is not available', () => {
    (getWeatherImage as jest.Mock).mockReturnValue(
      'http://openweathermap.org/img/wn/unknown.png',
    );

    const weatherData: any = {
      date: '2024-09-02T12:00:00Z',
      temperature: '25',
      weatherCode: 'unknown_code',
    };

    render(<HourlyReport data={weatherData} />);
  });
});
