
import React from 'react';

interface WeatherCardProps {
  weather: {
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
  };
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const weatherDetails = [
    { label: 'Feels Like', value: `${weather.feelsLike}°C`, icon: '🌡️' },
    { label: 'Humidity', value: `${weather.humidity}%`, icon: '💧' },
    { label: 'Pressure', value: `${weather.pressure} hPa`, icon: '📊' },
    { label: 'Wind Speed', value: `${weather.windSpeed} m/s`, icon: '💨' },
    { label: 'Visibility', value: `${weather.visibility} km`, icon: '👁️' },
    { label: 'UV Index', value: weather.uvIndex.toString(), icon: '☀️' },
  ];

  return (
    <div className="backdrop-blur-md bg-slate-800/30 border border-slate-600/40 rounded-3xl p-8 shadow-2xl">
      {/* Main Weather Info */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl font-bold text-slate-100 mr-2 font-mono">
            {weather.name}
          </h2>
          <span className="text-slate-400 text-lg font-mono">{weather.country}</span>
        </div>
        
        <div className="flex items-center justify-center mb-4">
          <div className="text-8xl mr-4">
            {weather.icon ? (
              <img 
                src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                alt={weather.description}
                className="w-32 h-32"
              />
            ) : (
              '🌤️'
            )}
          </div>
          <div className="text-left">
            <div className="text-5xl font-bold text-slate-100 mb-2 font-mono">
              {weather.temperature}°C
            </div>
            <div className="text-lg text-slate-300 capitalize font-mono">
              {weather.description}
            </div>
          </div>
        </div>
      </div>
      
      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {weatherDetails.map((detail, index) => (
          <div
            key={detail.label}
            className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-4 text-center hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-2xl mb-2">{detail.icon}</div>
            <div className="text-xl font-bold text-slate-100 mb-1 font-mono">
              {detail.value}
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {detail.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Info */}
      <div className="mt-8 p-4 backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl">
        <p className="text-slate-300 text-center font-mono text-sm">
          Weather data updates in real-time • Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
