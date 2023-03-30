import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {AppThemeContext} from '@components/AppThemeProvider';
import AppStackNavigation from './AppStackNavigation';

function Navigation(): JSX.Element {
  const {appTheme, stylesConfig} = useContext(AppThemeContext);

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: appTheme === 'dark',
        colors: {
          ...DefaultTheme.colors,
          background: stylesConfig.background,
          primary: stylesConfig.primary,
          text: stylesConfig.textPrimary,
        },
      }}>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
