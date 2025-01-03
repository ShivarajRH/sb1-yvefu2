import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Theme } from '../types/theme';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'blue', label: 'Blue' }
  ];

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2">
        <Palette className="h-5 w-5" />
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer"
        >
          {themes.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}