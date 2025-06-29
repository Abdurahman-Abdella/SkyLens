
import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
}

const WeatherMain = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=219f54c752b537973d6a39110843f983&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      
      setWeatherData({
        name: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        visibility: data.visibility / 1000,
        uvIndex: 0 // Would need additional API call for UV index
      });
    } catch (err) {
      setError('City not found or API error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-slate-300 bg-clip-text text-transparent">
            Sky
          </span>
          <span className="text-white/90">Lens</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Experience weather like never before with our beautiful glassmorphism interface. 
          Get detailed weather information with stunning visual appeal.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={fetchWeather} loading={loading} />
        
        {error && (
          <div className="mt-6 p-4 backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-2xl text-red-200 text-center animate-fade-in">
            {error}
          </div>
        )}
        
        {weatherData && (
          <div className="mt-8 animate-scale-in">
            <WeatherCard weather={weatherData} />
          </div>
        )}
        
        {!weatherData && !loading && (
          <div className="mt-12 text-center">
            <div className="backdrop-blur-md bg-slate-800/20 border border-slate-600/30 rounded-3xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🌤️</div>
              <p className="text-slate-300">
                Enter a city name above to get started with your weather journey
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherMain;
