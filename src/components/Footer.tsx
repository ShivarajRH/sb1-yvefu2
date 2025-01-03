import React from 'react';
import { Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Theme } from '../types/theme';

export default function Footer() {
  const { theme, setTheme } = useTheme();
  
  const themes: { value: Theme; label: string; description: string }[] = [
    { value: 'light', label: 'Light', description: 'Clean and crisp for daytime viewing' },
    { value: 'dark', label: 'Dark', description: 'Easy on the eyes for nighttime viewing' },
    { value: 'blue', label: 'Blue', description: 'Professional finance-focused theme' },
    { value: 'modern', label: 'Modern', description: 'Contemporary design with smooth gradients' },
    { value: 'elegant', label: 'Elegant', description: 'Sophisticated and refined appearance' },
    { value: 'vibrant', label: 'Vibrant', description: 'Bold and energetic color scheme' }
  ];

  return (
    <footer className="mt-auto py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Palette className="h-5 w-5 text-blue-500" />
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as Theme)}
              className="bg-transparent border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {themes.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Market Tracker. All rights reserved.
            <span className="mx-2">•</span>
            <Link to="/terms" className="text-blue-600 hover:text-blue-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}