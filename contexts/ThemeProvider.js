import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const safeValue = (value, fallback) => (value ? value.trim() : fallback);

const ThemeContext = createContext();

const useThemeColors = (themeMode) => {
  const [themeColors, setThemeColors] = useState({
    background: '#ffffff',
    backgroundSwitch: 'hsla(0, 0.00%, 82.67%, 1.00)',
    border:"rgba(236, 236, 236, 0.25)",
    textPrimary: '#000000',
    primary: '#4285f4',
    playpadPrimaryShadowChart:'rgba(66, 133, 244,0.1)',
    secondary: '#e6fb94',
  });

  useEffect(() => {
    const root = document.documentElement;
    document.documentElement.className = themeMode; // Applique la classe du thème
    const computedStyles = getComputedStyle(root);

    setThemeColors({
      background: safeValue(computedStyles.getPropertyValue('--background'), '#ffffff'),
      backgroundSwitch: safeValue(computedStyles.getPropertyValue('--toggle-bg-devlink'), '#ffffff'),
      border: safeValue(computedStyles.getPropertyValue('--border-color-devlink'), '#ffffff'),
      textPrimary: safeValue(computedStyles.getPropertyValue('--text-primary-devlink'), '#000000'),
      primary: safeValue(computedStyles.getPropertyValue('--playpad-primary'), '#4285f4'),
      playpadPrimaryShadowChart: safeValue(computedStyles.getPropertyValue('--playpad-primary-shadow-chart'), '#4285f4'),
      
      secondary: safeValue(computedStyles.getPropertyValue('--playpad-second'), '#e6fb94'),
    });
  }, [themeMode]);

  return themeColors;
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light'); // Mode clair par défaut
  const themeColors = useThemeColors(themeMode);
  useEffect(() => {
    const actual = document.documentElement.className; // Applique la classe du thème
    setThemeMode(actual);
  }, []);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Création de la palette Material-UI basée sur les couleurs dynamiques
  const muiTheme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeColors.primary,
      },
      primaryShadowChart: {
        main: themeColors.playpadPrimaryShadowChart,
      },
      secondary: {
        main: themeColors.secondary,
      },
      background: {
        default: themeColors.background,
        paper: themeColors.background,
      },
      border:{
        main:themeColors.border
      },
      text: {
        primary: themeColors.textPrimary,
      },
      backgroundSwitch:{
        main:themeColors.backgroundSwitch
      }
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, theme:muiTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook pour accéder au mode de thème (light/dark) et basculer entre eux
export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};
