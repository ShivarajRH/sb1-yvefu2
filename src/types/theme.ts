export type Theme = 'light' | 'dark' | 'blue' | 'modern' | 'elegant' | 'vibrant';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}