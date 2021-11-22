import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  baseNavigatorOptions,
  baseScreenOptions,
} from '../../../../constants/NavigationOptions';
import {HeaderTitle} from '../../../../components/styled/Text';
import NotificationRoot from './screens/NotificationsRoot';

export type NotificationSettingsStackParamList = {
  Root: undefined;
};

export enum NotificationSettingsScreens {
  ROOT = 'Root',
}

const NotificationSettings =
  createStackNavigator<NotificationSettingsStackParamList>();

const NotificationSettingsStack = () => {
  return (
    <NotificationSettings.Navigator
      initialRouteName={NotificationSettingsScreens.ROOT}
      screenOptions={{
        ...baseNavigatorOptions,
        ...baseScreenOptions,
      }}>
      <NotificationSettings.Screen
        name={NotificationSettingsScreens.ROOT}
        component={NotificationRoot}
        options={{
          headerTitle: () => <HeaderTitle>Notifications</HeaderTitle>,
        }}
      />
    </NotificationSettings.Navigator>
  );
};

export default NotificationSettingsStack;
