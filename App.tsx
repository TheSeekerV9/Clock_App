import {TamaguiProvider, createTamagui} from '@tamagui/core';
import {defaultConfig} from '@tamagui/config/v4';
import AppNavigator from './src/components/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

const config = createTamagui(defaultConfig);

type Conf = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default () => {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TamaguiProvider>
  );
};
